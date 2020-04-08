import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Account extends Component {

    render() {
      return (
        <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                  <Image style={styles.avatar}
                    source={{uri: 'https://img.icons8.com/officel/16/000000/under-construction.png'}}/>
  
                  <Text style={styles.name}>Under Construction...</Text>
                  <Text style={styles.userInfo}>Please come back </Text>
              </View>
            </View>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
    header:{
      backgroundColor: "#F9A143",
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
    },
    name:{
      fontSize:22,
      margin: 10,
      color:"#000000",
      fontWeight:'600',
    },
    userInfo:{
      fontSize:16,
      color:"#778899",
      fontWeight:'600',
    },
    info:{
      fontSize:18,
      marginTop:20,
      color: "#000000",
    }
  });
   