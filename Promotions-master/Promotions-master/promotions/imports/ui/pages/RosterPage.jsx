import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const products = [{
      TimeSlot: "9am-10am",
      mon: "N",
      tue: "N",
      wed: "N",
      thu: "N",
      fri: "N"
  }, {
      TimeSlot: "10am-11am",
      mon: "N",
      tue: "N",
      wed: "N",
      thu: "N",
      fri: "N"
  }, {
      TimeSlot: "11am-12am",
      mon: "N",
      tue: "N",
      wed: "N",
      thu: "N",
      fri: "N"
  }, {
      TimeSlot: "12pm-01pm",
      mon: "N",
      tue: "N",
      wed: "N",
      thu: "N",
      fri: "N"
  }, {
      TimeSlot: "1pm-2pm",
      mon: "N",
      tue: "N",
      wed: "N",
      thu: "N",
      fri: "N"
  }, {
      TimeSlot: "2pm-3pm",
      mon: "N",
      tue: "N",
      wed: "N",
      thu: "N",
      fri: "N"
  }, {
      TimeSlot: "3pm-4pm",
      mon: "N",
      tue: "N",
      wed: "N",
      thu: "N",
      fri: "N"
  },
  ];

const cellEditProp = {
  mode: 'click',
  blurToSave: true
};

export default class BasicTable extends Component {
  render() {
    return (
      <BootstrapTable className="container" data={ products } cellEdit={ cellEditProp }>
          <TableHeaderColumn width='80' dataField='TimeSlot' isKey={ true }>TimeSlot</TableHeaderColumn>
          <TableHeaderColumn width='100'dataField='mon' editable={ { type: 'checkbox', options: { values: 'Y:N' }}}>Mon</TableHeaderColumn>
          <TableHeaderColumn width='100'dataField='tue' editable={ { type: 'checkbox', options: { values: 'Y:N' }}}>Tue</TableHeaderColumn>
          <TableHeaderColumn width='100'dataField='wed' editable={ { type: 'checkbox', options: { values: 'Y:N' }}}>Wed</TableHeaderColumn>
          <TableHeaderColumn width='100'dataField='thu' editable={ { type: 'checkbox', options: { values: 'Y:N' }}}>Thu</TableHeaderColumn>
          <TableHeaderColumn width='100'dataField='fri' editable={ { type: 'checkbox', options: { values: 'Y:N' }}}>Fri</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}