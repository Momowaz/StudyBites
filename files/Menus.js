import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';
import { Actions } from 'react-native-router-flux'
 
export default class Menus extends Component {
  render() {
    const items = [
      { name: 'Coffee', price:'$1.86', code: '#1abc9c' },
      { name: 'Latte',  price:'$3.09', code: '#2ecc71' },
      { name: 'Steeped Tea',price:'$1.86', code: '#3498db' },
      { name: 'Mocha Latte',price:'$3.39', code: '#9b59b6' },
      { name: 'French Vanilla',price:'$2.29', code: '#34495e' },
      { name: 'Hot Chocolate',price:'$1.99', code: '#16a085' },
      { name: 'Coffee Mocha', price:'$1.99', code: '#27ae60' },
      { name: 'Vanilla Chai',price:'$2.39', code: '#2980b9' },
      { name: 'Breakfast Sandwiches', price: '$3.79', code: '#8e44ad' },
      { name: 'Wraps Platter', price:'$3.99', code: '#2c3e50' },
      { name: 'Egg & Chees Sandwich', price: '$3.29', code: '#f1c40f' },
      { name: 'Yogurt Parfait', price: '$2.99', code: '#e67e22' },
      { name: 'Catering Chili', price: '$17.89', code: '#e74c3c' },
      { name: 'Catering Soup', price: '$13.89', code: '#d35400' },
      { name: 'Chipotle Chicken Wrap', price: '$7.19', code: '#95a5a6' },
      { name: 'Ham & Swiss', price:'$6.49', code: '#f39c12' },
      { name: 'Bottled Water', price:'$1.79', code: '#d35400' },
      { name: 'Juice', price: '$1.99', code: '#c0392b' },
      { name: 'Milk', price:'$1.69', code: '#bdc3c7' },
      { name: 'Canada Dry', price:'$2.39', code: '#7f8c8d' },
    ];
 
      // const goToHome = () => {
      //   Actions.Homepage()
      // }

    return (

      //<TouchableOpacity onPress ={goToHome}>
      <SectionGrid
        itemDimension={90}
        // staticDimension={300}
        // fixed
        // spacing={20}
        sections={[
          {
            title: 'HOT BEVERAGES',
            data: items.slice(0, 8),
          },
          {
            title: 'BREAKFAST PLATTERS',
            data: items.slice(8, 12),
          },
          {
            title: 'LUNCH PLATTERS',
            data: items.slice(12, 16),
          },
          {
            title: 'COLD BEVERAGES',
            data: items.slice(16, 20),
          },
        ]}
        style={styles.gridView}
        renderItem={({ item, section, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
      />
     // </TouchableOpacity>
    );
  }
}
 
const styles = StyleSheet.create({
  gridView: {
    marginTop: 70,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  itemPrice: {
    fontWeight: '600',
    fontSize: 13,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#67baf6',
    color: 'black',
    padding: 10,
  },
});