import { createContainer } from 'meteor/react-meteor-data';
import CompanyProfilePage from '../pages/CompanyProfilePage.jsx'

export default CompanyProfileContainer = createContainer(({params}) => {
  const currentUser = Meteor.user();
  
  if(currentUser==null){
    console.log("currentUser in CompanyProfileContainer is null");
  }
  
  return {
    currentUser,
  };
},  CompanyProfilePage);