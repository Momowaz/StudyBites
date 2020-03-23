import React, { Component } from 'react';
import { Platform, FlatList, Alert, StyleSheet, View, Text, TouchableOpacity, Image, Navigator } from 'react-native';

import { creatBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';

import Menus from './Menus/TimMenus';
import profile from './SignIn';
//import SignIn from './SignIn';

import 'react-native-gesture-handler';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from 'react-navigation-stack';

import { Actions } from 'react-native-router-flux';
//import { Icon } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';


// function Home({navigation}) {

//   const pressHandler = () => {
//     navigation.navigate('Menus');
//   }

// }


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GridListItems: [
        { key: '1', name: "Tim Hortons", code: '#d35400' },
        { key: '2', name: "Grassroots", code: '#2ecc71' },
        { key: '3', name: "Cafeteria", code: '#3498db' },
        { key: '4', name: "Kwantlen Pizza", code: '#7f8c8d' },
        { key: '5', name: "Gulberg", code: '#16a085' },
        { key: '6', name: "Great Pizza", code: '#d35400' },
      ]
    };
  }
  GetGridViewItem(item) {
    if (item == 'Tim Hortons') {
      //<TouchableOpacity onPress = {() => {onPress(Menus);}}  />
      //Alert.alert('this is it!!')
      //HomeScreen(item)
     <TouchableOpacity onPress={() =>this.props.navigation.navigate('Home')} />

    } else
      (Alert.alert(item))


  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.GridListItems}
          renderItem={({ item }) =>
            <View style={[styles.GridViewContainer, { backgroundColor: item.code }]}>
              <Text style={styles.GridViewTextLayout} onPress={this.GetGridViewItem.bind(this, item.name)} > {item.name} </Text>

            </View>}
          numColumns={2}
        />


      </View>
    );
  }

}

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Homepage: {
      screen: Homepage,
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
  container: {
    flex: 1,
    marginTop: 90,
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  GridViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    margin: 8,
    backgroundColor: '#7B1FA2'
  },
  GridViewTextLayout: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: '#fff',
    padding: 10,
  }
});
