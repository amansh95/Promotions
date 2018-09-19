import React, { Component } from 'react';
import { withHistory } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';
import ProfileContainer from './ProfileContainer.jsx';
import RosterContainer from './RosterContainer.jsx';
import CompaniesContainer from './CompaniesContainer.jsx';
import CompanyContainer from './CompanyContainer.jsx';

export default class AppContainer extends Component {
  
  constructor(props){
    super(props);
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);
    this.profile = this.profile.bind(this);
    this.test = this.test.bind(this); 
    this.home = this.home.bind(this); 
    this.roster = this.roster.bind(this);
    this.companies = this.companies.bind(this);
    this.currentPage = "Home";
  }

  getMeteorData(){
    return { isAuthenticated: Meteor.userId() !== null };
  }

  componentWillMount(){
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  logout(e){
    e.preventDefault();
    Meteor.logout( (err) => {
      if (err) {
        console.log( err.reason );
      } else {
        this.props.history.push('/login');
      }
    });
  }

  profile(e){
    e.preventDefault();
    this.currentPage = "Profile";
    this.props.history.push(ProfileContainer);
  }

  test(e){
    e.preventDefault();
    this.currentPage = "Test";
    this.props.history.push(TestContainer);
  }

  home(e){
    e.preventDefault();
    this.currentPage = "Home";
    this.props.history.push(MainContainer);
  }
  roster(e){
    e.preventDefault();
    this.currentPage="Roster";
    this.props.history.push(RosterContainer);
  }
  companies(e){
    e.preventDefault();
    this.currentPage = "Companies";
    this.props.history.push(CompaniesContainer);
  }

  render(){
    
    var renderPage = "";
    
    if(this.currentPage === "Home"){
      renderPage = <MainContainer />
    }else if(this.currentPage === "Test"){
      renderPage = <TestContainer />
    }else if(this.currentPage === "Profile"){
      renderPage = <ProfileContainer />
    }else if (this.currentPage === "Roster"){
      renderPage = <RosterContainer />
    }else if(this.currentPage === "Companies"){
      renderPage = <CompaniesContainer />
    }

    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top" id="mainNavBar">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" id="navbar-brand" href="#" onClick={this.home}>
                <img src={'logo-clock.png'} id="logo-clock"/>
                Promotions
              </a>
            </div>
            
            <div className="navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#" onClick={this.logout}>Logout</a>
                </li>
              </ul>


              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#" onClick={this.roster}>Roster</a>
                </li>
              </ul>
              
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#" onClick={this.companies}>Companies</a>
                </li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#" onClick={this.profile}>Profile</a>
                </li>
              </ul>
              
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#" onClick={this.test}>Allocate</a>
                </li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#" onClick={this.home}>Home</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {renderPage}
        
      </div>
    );
  }
}
