import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class TestPage extends Component {
  constructor(props){
    super(props);
  this.state = {
      username: '',
    };
  }

  testAllocate = () => {
    Meteor.call('testAllocator');
  }

  testGetRoster = () => {
    Meteor.call('testGetRoster');
  }

  render(){
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
  
    return (
      <div>
        <div className="container">
          <h1 className="text-center">
            { loggedIn ? 'Shift Allocator' : '' }
          </h1>

          <div className="content">
            <button id="bigButton1" onClick={this.testAllocate}>
              Allocate
            </button> &nbsp;
            <button id="bigButton2" onClick={this.testGetRoster}>
              Get Roster
            </button>
          </div>
        </div>
      </div>
    );
  }
}

TestPage.propTypes = {
  username: React.PropTypes.string,
}
