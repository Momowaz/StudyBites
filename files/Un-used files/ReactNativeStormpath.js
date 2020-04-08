import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Login from '../SignIn';
import SignUp from '../SignUpView';

class ReactNativeStormpath extends Component {

  state = {
    isSignedUp: false
  }

  render() {

  if(this.state.isSignedUp)
  return
         <SignUp 
          onPressSignUp={() => this.setState({isSignedUp: true})}
        />;
  }

}

AppRegistry.registerComponent(ReactNativeStormpath , () => ReactNativeStormpath );