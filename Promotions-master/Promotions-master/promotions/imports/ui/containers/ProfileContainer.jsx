import { createContainer } from 'meteor/react-meteor-data';
import ProfilePage from '../pages/ProfilePage.jsx'

export default ProfileContainer = createContainer(({params}) => {
  const currentUser = Meteor.user();
  
  if(currentUser==null){
    console.log("currentUser in ProfileContainer is null");
  }
  
  return {
    currentUser,
  };
}, ProfilePage);