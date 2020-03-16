import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import SplashScreen from './src/components/SplashScreen';
import TimHortons from './src/components/TimHortons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <Router>
      <Scene key="root">
        {/* { <Scene key="SplashScreen"
          component={SplashScreen}
          animation='fade'
          hideNavBar={true}
          initial={true}
        />} */}

         <Scene key="TimHortons"
          component={TimHortons}
          animation='fade'
          hideNavBar={true}
        />
        
        </Scene>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
