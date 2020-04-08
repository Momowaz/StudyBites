import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableOpacity, Image } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';
import { Actions } from 'react-native-router-flux'
 
export default class Menus extends Component {

    GetGridViewItem(item) {
        if (item == 'Tim Hortons') {
          //<TouchableOpacity onPress = {() => {onPress(Menus);}}  />
          Alert.alert('this is it!!')
          //HomeScreen(item)
         //<TouchableOpacity onPress={() =>this.props.navigation.navigate('Home')} />
    
        } else
          (Alert.alert(item))
    
    
      }

  render() {
    const items = [
      { name: 'Latte', price:'$1.86', code: '#1abc9c', image:"https://img.icons8.com/ios/50/000000/coffee-to-go.png"},
      { name: 'Cappuccino',  price:'$3.09', code: '#2ecc71', image:"https://img.icons8.com/ios/50/000000/cafe.png" },
      { name: 'Organic Tea',price:'$1.86', code: '#3498db', image:"https://img.icons8.com/ios/50/000000/tea.png" },
      { name: 'Sandwiches', price: '$3.79', code: '#8e44ad', image:"https://img.icons8.com/ios/50/000000/sandwich.png" },
      { name: 'Snacks', price:'$3.99', code: '#2c3e50', image:"https://img.icons8.com/ios/50/000000/wrap.png"},
      { name: 'Egg & Chees Sandwich', price: '$3.29', code: '#f1c40f', image:"https://img.icons8.com/ios/50/000000/sandwich-with-fried-egg.png" },
      { name: 'Yogurt Parfait', price: '$2.99', code: '#e67e22', image:"https://img.icons8.com/ios/50/000000/burger-dip.png"},
      { name: 'Catering Chili', price: '$17.89', code: '#e74c3c', image:"https://img.icons8.com/ios/50/000000/tableware.png"},
      { name: 'Hot Soup', price: '$13.89', code: '#d35400', image:"https://img.icons8.com/ios/50/000000/soup-plate.png"},
      { name: 'Chipotle Chicken Wrap', price: '$7.19', code: '#95a5a6',image:"https://img.icons8.com/color/50/000000/wrap.png"},
      { name: 'Ham & Swiss', price:'$6.49', code: '#f39c12',image:"https://img.icons8.com/ios/50/000000/hamburger.png"},
      { name: 'Bottled Water', price:'$1.79', code: '#d35400' , image:"https://img.icons8.com/ios/50/000000/plastic.png"},
      { name: 'Juice', price: '$1.99', code: '#c0392b', image:"https://img.icons8.com/ios/50/000000/kawaii-soda.png"},
      { name: 'Milk', price:'$1.69', code: '#bdc3c7',image:"https://img.icons8.com/cotton/50/000000/tetra-pak.png" },
      { name: 'Canada Dry', price:'$2.39', code: '#7f8c8d',image:"https://img.icons8.com/ios/50/000000/beer-can.png"},
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
            title: 'Organic coffee',
            data: items.slice(0, 3),
          },
          {
            title: 'Grab and Go',
            data: items.slice(3, 12),
          },
          {
            title: 'Drinks',
            data: items.slice(12, 14),
          }
        ]}
        style={styles.gridView}
        renderItem={({ item, section, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Image style={styles.cardImage} source={{uri:item.image}} />
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
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 15,
    height: 150,
  },
  cardImage:{
    height: 40,
    width: 40,
    marginBottom: 20,
  },
  itemName: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  itemPrice: {
    fontWeight: '600',
    fontSize: 10,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#F9A143',
    color: 'black',
    padding: 10,
  },
});