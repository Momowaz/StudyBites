import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import SplashScreen from './src/components/SplashScreen';
import ProfileIconsView from './files/MainfrontPage'

import Myroutes from './files/Homestack';
import * as firebase from "firebase";
var config = {
  apiKey: "*****************************",
  authDomain: "fblogin-with-react-native.firebaseapp.com",
  databaseURL: "https://fblogin-with-react-native.firebaseio.com",
  projectId: "fblogin-with-react-native",
  storageBucket: "fblogin-with-react-native.appspot.com",
  messagingSenderId: "************"
};
export default class App extends Component {
  render() {
    return (
      <Myroutes />
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
