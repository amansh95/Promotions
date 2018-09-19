import { createContainer } from 'meteor/react-meteor-data';
import TestPage from '../pages/TestPage.jsx'

export default TestContainer = createContainer(({params}) => {
  const currentUser = Meteor.user();
  
  if(currentUser==null){
	  console.log("currentUser in TestContainer is null");
  }
  
  return {
    currentUser,
  };
}, TestPage);