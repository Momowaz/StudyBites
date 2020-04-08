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
import myAccount from './myAccount';
import underconstruction from './underconstruction';
import SignUp from './SignUpView';
import Map from './Map';
import Orders from './ordersList/Orders'

const screens = {
   Home: {
      screen: MainfrontPage
   },
   Cafeteria:{
      screen: Cafeteria
   },
   THMenus:{
      screen: THMenus
   },
   GRMenus:{
      screen: GRMenus
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
   myAccount: {
      screen: myAccount
   },
   SignIn:{
      screen: SignIn
   },
   underconstruction:{
      screen: underconstruction
   },
   SignUp:{
      screen: SignUp
   },
   Map:{
      screen: Map
   },
   Orders:{
      screen: Orders
   }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);