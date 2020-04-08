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
import Menus from './TimMenus';
import profile from '../SignIn';

import { creatBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';


import { styles } from './styles';

export default class Cafeteria extends Component {

  static navigationOptions = {
    title: 'Cafeteria',
  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>


          <View style={styles.body}>
            <View style={styles.bodyContent}>


            <View>
                <Image style={styles.image}
                  source={require('../images/kpuCaffee.png')}
                />
              </View>

              <View style={styles.KPUmenuBox}>
                <Text onPress={() => this.props.navigation.navigate('Orders')} style={styles.GBfont}>The ‘OB’ Original Burger</Text>
                <Text style={styles.desc}>1/4 pound hand-pressed burger with lettuce, tomato & garlic mayo</Text>
                <Text style={styles.desc}>$8.50</Text>
              </View>

              <View style={styles.KPUmenuBox}>
                <Text onPress={() => this.props.navigation.navigate('Orders')} style={styles.GBfont}>Beyond Meat Burger</Text>
                <Text style={styles.desc}>1/4 pound ‘Beyond Meat’ burger with pepper jack cheese lettuce,
tomato & garlic mayo</Text>
                <Text style={styles.desc}>$8.50</Text>
              </View>

              <View style={styles.KPUmenuBox}>
                <Text onPress={() => this.props.navigation.navigate('Orders')} style={styles.GBfont}>Crispy Cod Sandwich</Text>
                <Text style={styles.desc}>Crispy breaded cod filet with lettuce, tomato & tartar sauce</Text>
                <Text style={styles.desc}>$8.50</Text>
              </View>

              <View style={styles.KPUmenuBox}>
                <Text onPress={() => this.props.navigation.navigate('Orders')} style={styles.GBfont}>Fish & Chips</Text>
                <Text style={styles.desc}>Crispy breaded cod filet served with fries & coleslaw</Text>
                <Text style={styles.desc}>$8.50</Text>
              </View>

              <View style={styles.KPUmenuBox}>
                <Text onPress={() => this.props.navigation.navigate('Orders')} style={styles.GBfont}>Chicken Pizza</Text>
                <Text style={styles.desc}>Mild creamy tomatoe based boneless chicken curry</Text>
                <Text style={styles.desc}>$8.50</Text>
              </View>

              <View style={styles.KPUmenuBox}>
                <Text onPress={() => this.props.navigation.navigate('Orders')} style={styles.GBfont}>Chicken Tenders</Text>
                <Text style={styles.desc}>Breaded chicken tenders with fries & choice of dipping sauce </Text>
                <Text style={styles.desc}>$8.50</Text>
              </View>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}


