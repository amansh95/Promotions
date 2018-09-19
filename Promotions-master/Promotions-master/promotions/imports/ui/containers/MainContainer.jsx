import { createContainer } from 'meteor/react-meteor-data';
import MainPage from '../pages/MainPage.jsx'

export default MainContainer = createContainer(({params}) => {
  const currentUser = Meteor.user();
  
  if(currentUser==null){
    console.log("currentUser in MainContainer is null");
  }
  
  return {
    currentUser,
  };
}, MainPage);