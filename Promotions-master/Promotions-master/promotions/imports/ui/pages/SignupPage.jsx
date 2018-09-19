import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class SignupPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        error: '',
        isManager: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    
    this.setState({error: ''});
    
    var options = {
      username: $('input#signup-username')[0].value,
      password: $('input#signup-password')[0].value,
      /*
      emails: [{
        address: $('input#signup-email')[0].value,
        verified: false
      }],
      */
      profile: {
        email: $('input#signup-email')[0].value,
        firstName: $('input#signup-first-name')[0].value,
        lastName: $('input#signup-last-name')[0].value,
        manager: $('input[name="isManager"]').is(':checked')
        
      },
      
    };
    
    Accounts.createUser( 
      
      options, 
      
      (err) => {
          if(err){
            this.setState({
              error: err.reason
            });
          } else {
            this.props.history.push('/login');
          }
        }
    );  
  }
  
  
  
  render(){
    const error = this.state.error;
    return (
      <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center">Sign up</h1>
            </div>
            <div className="modal-body">
              { error.length > 0 ?
                <div className="alert alert-danger fade in">{error}</div>
                :''}
              <form  id="login-form"
                    className="form col-md-12 center-block"
                    onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="text" id="signup-username"
                        className="form-control input-lg" placeholder="Username"/>
                </div>
      
                <div className="form-group">
                  <input type="password" id="signup-password"
                        className="form-control input-lg" placeholder="Password"/>
                </div>
        
                <div className="form-group">
                  <input type="email" id="signup-email"
                        className="form-control input-lg" placeholder="E-mail"/>
                </div>
        
                <div className="form-group">
                  <input type="text" id="signup-first-name"
                        className="form-control input-lg" placeholder="First Name"/>
                </div>
        
                <div className="form-group">
                  <input type="text" id="signup-last-name"
                        className="form-control input-lg" placeholder="Last Name"/>
                </div>
                
                <div className="checkbox">
                  <label>
                  <input name="isManager" type="checkbox" id="signup-checkbox"
                        checked={this.state.isManager}
                        onChange={this.handleInputChange} />
                  Manager
                  </label>
                </div>
        
                <div className="form-group">
                  <input type="submit" id="login-button"
                        className="btn btn-lg btn-primary btn-block"
                        value="Sign Up" />
                </div>
        
                <div className="form-group">
                  <p className="text-center">
                    Already have an account? Login <Link to="/login">here</Link>
                  </p>
                </div>
        
              </form>
            </div>
            <div className="modal-footer" style={{borderTop: 0}}></div>
          </div>
        </div>
      </div>
    );
  }
}