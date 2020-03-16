//This is an example code to understand WebView//
import React, { Component } from 'react';
import { View, Image } from 'react-native';
//import react in our code.
//import { WebView } from 'react-native-webview';
//import all the components we are going to use.


export default class TimHortons extends Component {
  render() {
    return (
      // <WebView
      //   source={{ uri: 'http://kpu.ca' }}
      //   style={{ marginTop: 20 }}
      // />
      <View>
      <Image
        source={require('../img/logo.png')}
      />
    </View>
    );
  }
}
