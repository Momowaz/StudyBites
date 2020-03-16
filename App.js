import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

//import Drawer from './files/drawer-navigator';
import SplashScreen from './src/components/SplashScreen';
import TimHortons from './src/components/TimHortons';
import Homepage from './files/Homepage';
import Menus from './files/Menus';

export default class App extends Component {
  render() {
    return (
      <Homepage />

    //   <Router>
        
    //   <Scene key = "root">
    //    {/* <Scene key = "SplashScreen" component = {SplashScreen}  /> */}

       
    //      <Scene key = "Homepage" component = {Homepage} title = "Homepage"  />
    //      <Scene key = "Menus" component = {Menus} title = "Menus" />
       
    //   </Scene>
    //  </Router>

      /*

      <Router>
      <Scene key="root">
        {/* { <Scene key="SplashScreen"
          component={SplashScreen}
          animation='fade'
          hideNavBar={true}
          initial={true}
        />} }
        

         <Scene key="TimHortons"
          component={Homepage}
          animation='fade'
          hideNavBar={true}
        />
        <Scene key="TimHortons"
         component={Menus}
         animation='fade'
         hideNavBar={true}
       />
        
        </Scene>
        </Router>
        */
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
