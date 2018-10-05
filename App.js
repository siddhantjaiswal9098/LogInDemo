import React, {Component} from 'react';
import {Provider} from 'react-redux'; 
import Navigator from './src/navigator/navigator';
//import FormHome from './src/components/FormHome';
import store from './src/store/store';
import codePush from 'react-native-code-push'

export default class App extends Component{
componentDidMount(){
  codePush.sync({
    updateDialog: true,
    installMode: codePush.InstallMode.IMMEDIATE
});
}
  render() {
    return (
      <Provider store = {store}>
          <Navigator />
      </Provider>
    );
  }
}