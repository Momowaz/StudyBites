import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SignIn from './SignIn'
import MainfrontPage from './MainfrontPage';
import THMenus from './Menus/TimMenus'
import GRMenus from './Menus/GrassRootsMenus';
import Cafeteria from './Menus/Cafeteria';
import KwantlenPizza from './Menus/KwantlenPizza';
import GulbergMenu from './Menus/GulberbMenu';
import Royalcurry from './Menus/Royalcurry';

const screens = {
   Home: {
      screen: MainfrontPage
   },
   THMenus:{
      screen: THMenus
   },
   GRMenus:{
      screen: GRMenus
   },
   Cafeteria:{
      screen: Cafeteria
   },
   KwantlenPizza:{
      screen: KwantlenPizza
   },
   GulbergMenu:{
      screen: GulbergMenu
   },
   Royalcurry:{
      screen: Royalcurry
   },
   SignIn:{
      screen: SignIn
   }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);