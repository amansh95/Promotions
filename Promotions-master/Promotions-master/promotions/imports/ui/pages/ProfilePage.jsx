import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProfilePage extends Component {
  constructor(props){
    super(props);
    let property = props;
    this.state = {
    };
    //let currentUser = this.props.currentUser;
  }
  
  handleSubmit(e){
    e.preventDefault();
    
    var success;

    //Update firstName if input box is not empty
    if($('input#profile-firstname')[0].value.length>0){
        Meteor.users.update({_id: Meteor.userId()}, {$set: {
          "profile.firstName": $('input#profile-firstname')[0].value
          },
        });
    }
    
    //Update lastName if input box is not empty
    if($('input#profile-lastname')[0].value.length>0){
        Meteor.users.update({_id: Meteor.userId()}, {$set: {
          "profile.lastName": $('input#profile-lastname')[0].value
          },
        });
    }
    
    //Update email if input box is not empty
    if($('input#profile-email')[0].value.length>0){
        Meteor.users.update({_id: Meteor.userId()}, {$set: {
          "profile.email": $('input#profile-email')[0].value
          },
        });
    }
    
    if(($('input#profile-oldpassword')[0].value.length>0) && ($('input#profile-newpassword')[0].value.length>0)){
      Accounts.changePassword($('input#profile-oldpassword')[0].value, $('input#profile-newpassword')[0].value, function(error){
        if(error){
          alert(error.reason);
        }else{
          alert("Successfully updated profile");
        }
      });  
    }else{
      alert("Successfully updated profile");
    }
    
    
  
  }
  
  render(){
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
    
    let tempFirstName = currentUser.profile.firstName;
    
    console.log(currentUser);
    
    return (
      <div>
        <div className="container">
          <h1 className="text-center">
            { loggedIn ? 'Profile of user '+currentUser.username : '' }
          </h1>
          
          <form id="edit-form" className="form col-md-12 center-block" onSubmit={this.handleSubmit}>
            <div className="content">
              
              <div className="form-group">
                <label>Username:</label>
                <input type="text" id="profile-username" className="form-control input-lg" placeholder="Username" value={currentUser.username} disabled/>
              </div>
              
              <div className="form-group">
                <label>First Name:</label>
                <input type="text" id="profile-firstname" className="form-control input-lg" placeholder={currentUser.profile.firstName} />
              </div>
              
              <div className="form-group">
                <label>Last Name:</label>
                <input type="text" id="profile-lastname" className="form-control input-lg" placeholder={currentUser.profile.lastName} />
              </div>
              
              <div className="form-group">
                <label>E-mail:</label>
                <input type="email" id="profile-email" className="form-control input-lg" placeholder={currentUser.profile.email} />
              </div>
              
              <div className="form-group">
                <label>Old Password:</label>
                <input type="password" id="profile-oldpassword" className="form-control input-lg" />
              </div>
              
              <div className="form-group">
                <label>New Password:</label>
                <input type="password" id="profile-newpassword" className="form-control input-lg" />
              </div>
              
              <div className="form-group">
                <input type="submit" value="Submit" />
              </div>
              
            </div>
          </form>
          
        </div>
      </div>
    );
  }
}

