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

import {styles} from './styles';

import { creatBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';

 export default class KwantlenPizza extends Component {

    static navigationOptions = {
        title: 'KwantlenPizza',
    }
    
  render() {

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>

        <View style={styles.bodyContent}>

<View>
  <Image style={styles.body}
    source={require('../images/logo.png')}
  />
</View>

<View style={styles.KPmenuBox}>
  <Text onPress={() => this.props.navigation.navigate('Orders')} style={styles.info}>Greek Special</Text>
  <Text style={styles.desc}>Onions, Tomatoes, Feta Cheese, Green Peppers and Olives</Text>
  <Text style={styles.desc}>Small: $18.99 | Med: $22.99 | Large: $26.99</Text>
</View>

<View style={styles.KPmenuBox}>
  <Text onPress={() => this.props.navigation.navigate('Orders')} style={styles.info}>Cheese Pizza</Text>
  <Text style={styles.desc}>Onions, Tomatoes, Feta Cheese, Green Peppers and Olives</Text>
  <Text style={styles.desc}>Small: $18.99 | Med: $22.99 | Large: $26.99</Text>
</View>

<View style={styles.KPmenuBox}>
  <Text onPress={() => this.props.navigation.navigate('Orders')}style={styles.info}>Spinch Pizza</Text>
  <Text style={styles.desc}>Onions, Tomatoes, Feta Cheese, Green Peppers and Olives</Text>
  <Text style={styles.desc}>Small: $18.99 | Med: $22.99 | Large: $26.99</Text>
</View>

<View style={styles.KPmenuBox}>
  <Text onPress={() => this.props.navigation.navigate('Orders')}style={styles.info}>Bacon Double Cheese Burger</Text>
  <Text style={styles.desc}>Onions, Tomatoes, Feta Cheese, Green Peppers and Olives</Text>
  <Text style={styles.desc}>Small: $18.99 | Med: $22.99 | Large: $26.99</Text>
</View>

<View style={styles.KPmenuBox}>
  <Text onPress={() => this.props.navigation.navigate('Orders')}style={styles.info}>Papperoni Pizza</Text>
  <Text style={styles.desc}>Onions, Tomatoes, Feta Cheese, Green Peppers and Olives</Text>
  <Text style={styles.desc}>Small: $18.99 | Med: $22.99 | Large: $26.99</Text>
</View>

<View style={styles.KPmenuBox}>
  <Text onPress={() => this.props.navigation.navigate('Orders')}style={styles.info}>Chicken Pizza</Text>
  <Text style={styles.desc}>Onions, Tomatoes, Feta Cheese, Green Peppers and Olives</Text>
  <Text style={styles.desc}>Small: $18.99 | Med: $22.99 | Large: $26.99</Text>
</View>

<View style={styles.KPmenuBox}>
  <Text onPress={() => this.props.navigation.navigate('Orders')}style={styles.info}>Meat Lovers Pizza</Text>
  <Text style={styles.desc}>Onions, Tomatoes, Feta Cheese, Green Peppers and Olives</Text>
  <Text style={styles.desc}>Small: $18.99 | Med: $22.99 | Large: $26.99</Text>
</View>

<View style={styles.KPmenuBox}>
    <Text style={styles.info}>Contact Us</Text>
    <Text style={styles.desc}>(604) 543-7600 </Text>
    <Text style={styles.desc}>info@kwantlenpizza.com</Text>
    <Text style={styles.desc}>12578 72nd Ave., Surrey</Text>
</View>


</View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}



  