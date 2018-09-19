import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CompaniesPage extends Component {
  constructor(props){
    super(props);
	this.state = {
    };
    this.create = this.create.bind(this);
    this.currentPage = "Company";
  }



  create(e){
  	e.preventDefault();
    this.currentPage = "Company";
    console.log(this.currentPage);
    this.props.history.push(CompanyContainer);
  }
  
  render(){
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
    console.log(currentUser);

    var renderPage = "";

    if(this.currentPage == "Companies"){
      renderPage = <CompanyProfileContainer />
    }

    if(this.currentPage == "Company"){
      renderPage = <CompanyContainer />
    }

    
    return (
      <div>
        	{renderPage}
      </div>
    );
  }
}

