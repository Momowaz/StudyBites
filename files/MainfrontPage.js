import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Alert
} from 'react-native';
import Menus from './Menus/TimMenus';
import profile from './SignIn';

import { creatBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';

 class ProfileIconsView extends Component {

    // static navigationOptions = {
    //     title: 'Home',
    // }
    
  render() {

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                 source={require('../src/img/logo.png')}
               />
                <Text style={styles.name} onPress={() =>this.props.navigation.navigate('SignIn')}>
                  Become a courier today!
                </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>

              <View style={styles.menuBox}>
                <Image  style={styles.icon} source={require('./images/timhortons.png')}/>
                <Text  onPress={() =>this.props.navigation.navigate('THMenus')} style={styles.info}>Tim Hortons</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={require('./images/kpuGrassRootsLogo.png')}/>
                <Text onPress={() =>this.props.navigation.navigate('GRMenus')} style={styles.info}>Cafe & Lounge</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={require('./images/kpuCaffee.png')}/>
                <Text onPress={() =>this.props.navigation.navigate('Cafeteria')} style={styles.info}>Cafeteria</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={require('./images/logo.png')}/>
                <Text onPress={() =>this.props.navigation.navigate('KwantlenPizza')} style={styles.info}>Kwantlen Pizza</Text>
              </View>

              <View style={styles.menuBox}>
                <Image style={styles.icon} source={require('./images/gulberg.png')}/>
                <Text onPress={() =>this.props.navigation.navigate('GulbergMenu')} style={styles.info}>Gulberg</Text>
              </View>
              
              <View style={styles.menuBox}>
                <Image style={styles.icon} source={require('./images/royalcurryLogo.png')}/>
                <Text onPress={() =>this.props.navigation.navigate('Royalcurry')} style={styles.info}>Royal Curry</Text>
              </View>


            </View>
        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}


const TabNavigator = createMaterialBottomTabNavigator(
    {
        ProfileIconsView: {
        screen: ProfileIconsView,
        navigationOptions: {
          tabBarLabel: 'Home',
          activeColor: '#ff0000',
          inactiveColor: '#000000',
          barStyle: { backgroundColor: '#67baf6' },
          tabBarIcon: () => (
            <View>
              <Icon name={'home'} size={25} style={{ color: '#ff0000' }} />
            </View>
          )
        }
      },
      Menus: {
        screen: Menus,
        navigationOptions: {
          tabBarLabel: 'Orders',
          activeColor: '#ff0000',
          inactiveColor: '#000000',
          barStyle: { backgroundColor: '#67baf6' },
          tabBarIcon: () => (
            <View>
              <Icon name={'add-shopping-cart'} size={25} style={{ color: '#ff0000' }} />
            </View>
          )
        }
      },
  
      profile: {
        screen: profile,
        navigationOptions: {
          tabBarLabel: 'Account',
          activeColor: '#ff0000',
          inactiveColor: '#000000',
          barStyle: { backgroundColor: '#67baf6' },
          tabBarIcon: () => (
            <View>
              <Icon name={'person'} size={25} style={{ color: '#ff0000' }} />
            </View>
          )
        }
      }
    }
  );
  
  export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
  },
  headerContent:{
    padding:25,
    marginTop: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: 'white',
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },

//   bodyContent: {
//     flex: 1,
//     alignItems: 'center',
//     padding:30,
//   },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  bodyContent:{
    paddingTop:10,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft:30
  },
  menuBox:{
    backgroundColor: "#00BFFF",
    width:120,
    height:120,
    alignItems: 'center',
    justifyContent: 'center',
    margin:15,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
  },
  icon: {
    width:100,
    height:60,
  },
  info:{
    fontSize:13,
    color: "#696969",
  }
});
  