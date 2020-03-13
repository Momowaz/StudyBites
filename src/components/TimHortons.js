//This is an example code to understand WebView//
import React, { Component } from 'react';
//import react in our code.
import { WebView } from 'react-native';
//import all the components we are going to use.
export default class TimHortons extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'http://timhortons.com' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}