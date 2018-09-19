import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Mongo } from 'meteor/mongo';


Companies = new Meteor.Collection('items');

export default class CompanyPage extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  insertdata(e){
    
    Companies.insert({
        companyName: $('input#newCompanyName')[0].value
    });
    console.log((Companies));
    
  }

  displaydata(e){
    console.log(Companies.find().fetch());
    Companies.find().forEach((items) => {
      console.log(items.companyName);
    });
  }

  cleardata(e){
    console.log("clear");    
    var result = Companies.findOne({companyName:$('input#newCompanyName')[0].value});
    console.log(result);
    
    Companies.remove({_id: result._id});
    console.log("done");
    
  }

  render(){
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
    
    console.log(currentUser);
    
    var companyList = [];
    var counter = 0;
    
    Companies.find().forEach((items) => {
      companyList.push(items.companyName);
      
    });
    
    console.log(companyList);
    
    return (
        <div className="container"> 
        
          <h1 className="text-center">Manage your Companies</h1>

          <div className="content">
            <div className="form-group">
              <label>Enter the name of your new company below.</label>
              <div className="content">
              </div>
              <input type="text" id="newCompanyName" className="form-control input-lg"/>
            </div>

            <div className="form-group">
              <button className="submit" onClick ={this.insertdata}> Submit </button> &nbsp;
              <button className="display" onClick ={this.displaydata}> Display </button> &nbsp;
              <button className="clear" onClick ={this.cleardata}> Clear </button> &nbsp;
            </div>
            <div>
              <label>Here are the list of companies currently in the system: </label>
            </div>
            <div className="results">
            
              {companyList.map(company => <div> <button onClick ={this.handleCompanyProfile}> {company} </button> </div>)} 
              
            </div>
          </div>
        </div>
    );
  }
}


