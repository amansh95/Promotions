import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CompanyProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  render(){
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
    console.log(currentUser);    
    return (
      <div>
      lalala
      </div>
    );
  }
}

