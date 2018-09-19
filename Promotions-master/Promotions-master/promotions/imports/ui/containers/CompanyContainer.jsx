import { createContainer } from 'meteor/react-meteor-data';
import CompanyPage from '../pages/CompanyPage.jsx'

export default CompanyContainer = createContainer(({params}) => {
  const currentUser = Meteor.user();
  
  if(currentUser==null){
    console.log("currentUser in CompanyContainer is null");
  }
  
  return {
    currentUser,
  };
},  CompanyPage);