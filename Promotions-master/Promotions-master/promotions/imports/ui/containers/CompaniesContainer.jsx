import { createContainer } from 'meteor/react-meteor-data';
import CompaniesPage from '../pages/CompaniesPage.jsx'

export default CompaniesContainer = createContainer(({params}) => {
  const currentUser = Meteor.user();
  
  if(currentUser==null){
    console.log("currentUser in CompaniesContainer is null");
  }
  
  return {
    currentUser,
  };
},  CompaniesPage);