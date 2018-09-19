import { createContainer } from 'meteor/react-meteor-data';
import RosterPage from '../pages/RosterPage.jsx'

export default RosterContainer = createContainer(({params}) => {
  const currentUser = Meteor.user();
  
  if(currentUser==null){
	  console.log("currentUser in RosterContainer is null");
  }
  
  return {
    currentUser,
  };
}, RosterPage);