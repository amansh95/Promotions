import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// containers
import AppContainer from '../../ui/containers/AppContainer.jsx'
import MainContainer from '../../ui/containers/MainContainer.jsx'
import ProfileContainer from '../../ui/containers/ProfileContainer.jsx'
import RosterContainer from '../../ui/containers/RosterContainer.jsx'
import TestContainer from '../../ui/containers/TestContainer.jsx'
import CompanyContainer from '../../ui/containers/CompanyContainer.jsx'
import CompaniesContainer from '../../ui/containers/CompaniesContainer.jsx'
import CompanyProfileContainer from '../../ui/containers/CompanyProfileContainer.jsx'

// pages
import SignupPage from '../../ui/pages/SignupPage.jsx'
import LoginPage from '../../ui/pages/LoginPage.jsx'
import ProfilePage from '../../ui/pages/ProfilePage.jsx'
import TestPage from '../../ui/pages/TestPage.jsx'
import HomePage from '../../ui/pages/MainPage.jsx'
import RosterPage from '../../ui/pages/RosterPage.jsx'
import CompanyPage from '../../ui/pages/CompanyPage.jsx'
import CompaniesPage from '../../ui/pages/CompaniesPage.jsx'
import CompanyProfilePage from '../../ui/pages/CompanyProfilePage.jsx'

export const renderRoutes = () => (
  <Router>
    <div>
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={SignupPage}/>
      <Route path="/profile" component={ProfilePage}/>
      <Route path="/roster" component={RosterPage}/>
      <Route path="/test" component={TestPage}/>
      <Route path="/home" component={HomePage}/>
      <Route path="/company" component={CompanyContainer}/>
      <Route path="/companies" component={CompaniesPage}/> 
      <Route path="/companies" component={CompanyProfilePage}/> 
      <Route exact={true} path="/" component={AppContainer}/>
    </div>
  </Router>
);
