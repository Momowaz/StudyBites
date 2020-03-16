import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image} from 'react-native';
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
      <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native</Text>
      <Text style={styles.welcome}>Welcome to React Native</Text>
      <Text style={styles.welcome}>Welcome to React Native</Text>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 2,
    margin: 20,
    backgroundColor: 'orange',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 70,
  }
});