import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Homepage from './Homepage.js';
import Menus from './Menus.js';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation-drawer';

const Routes = {
   Home: {
      screen: Home
   },
   Menus:{
      screen: Menus
   }
}

const HomeStack = createStackNavigator(Routes);
export default createAppContainer(HomeStack);