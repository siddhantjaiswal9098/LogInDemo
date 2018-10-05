import {createStackNavigator} from 'react-navigation';
import Signup from '../components/Signup';
import logIn from '../components/logIn';
import showUser from '../components/showUser'
import ImageDemo from '../components/ImageDemo'

  const navigator = createStackNavigator({
    Signup: { screen: Signup },
    logIn: { screen: logIn },
    showUser : {screen : showUser},
    ImageDemo : {screen : ImageDemo}
  });
  
  export default navigator;