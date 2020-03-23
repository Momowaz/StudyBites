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

import { creatBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';

import { styles } from './styles';

export default class Royalcurry extends Component {

  static navigationOptions = {
    title: 'Royal Curry Resturant Surrey',
  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>


          <View>
            <Image style={styles.image}
              source={require('../images/royalcurryLogo.png')}
            />
          </View>

          <View style={styles.bodyContent}>

            <View style={styles.RCmenuBox}>
              <Text onPress={() => this.props.navigation.navigate('THMenus')} style={styles.info}>Tawa Chicken </Text>
              <Text style={styles.desc}>$12.99</Text>
            </View>

            <View style={styles.RCmenuBox}>
              <Text onPress={() => this.props.navigation.navigate('GRMenus')} style={styles.info}>Chicken Tikka</Text>
              <Text style={styles.desc}>$13.99</Text>
            </View>

            <View style={styles.RCmenuBox}>
              <Text style={styles.info}>Tandoori Fish</Text>
              <Text style={styles.desc}>$13.99</Text>
            </View>

            <View style={styles.RCmenuBox}>
              <Text style={styles.info}>Fish | Chicken Pakora</Text>
              <Text style={styles.desc}>$11.99</Text>
            </View>

            <View style={styles.RCmenuBox}>
              <Text style={styles.info}>Hot Wings (10 pieces)</Text>
              <Text style={styles.desc}>$7.99</Text>
            </View>

            <View style={styles.RCmenuBox}>
              <Text style={styles.info}>Chicken Burger</Text>
              <Text style={styles.desc}>$6.99</Text>
            </View>

            <View style={styles.RCmenuBox}>
              <Text style={styles.info}>Viggie Burger</Text>
              <Text style={styles.desc}>$4.99</Text>
            </View>

            <View style={styles.RCmenuBox}>
              <Text style={styles.info}>Noodle Burger</Text>
              <Text style={styles.desc}>$5.99</Text>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

