 
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
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

                <Text style={styles.name}>Mohib Waziri </Text>
                <Text style={styles.userInfo}>mohib.waziri@gmail.com </Text>
                <Text style={styles.userInfo}>(604) 700 2121 </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios/50/000000/card-security.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text onPress={() =>this.props.navigation.navigate('underconstruction')} style={styles.info}>Payment Profile</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/ios/50/000000/address.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text onPress={() =>this.props.navigation.navigate('underconstruction')} style={styles.info}>Frequent Address</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: "https://img.icons8.com/ios/50/000000/alarm.png"}}/>
              </View>
              <View style={styles.infoContent}>
                <Text onPress={() =>this.props.navigation.navigate('underconstruction')} style={styles.info}>Notifications</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: "https://img.icons8.com/ios/50/000000/online-support.png"}}/>
              </View>
              <View style={styles.infoContent}>
                <Text onPress={() =>this.props.navigation.navigate('underconstruction')} style={styles.info}>Support</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: "https://img.icons8.com/ios/50/000000/privacy.png"}}/>
              </View>
              <View style={styles.infoContent}>
                <Text onPress={() =>this.props.navigation.navigate('underconstruction')} style={styles.info}>Privacy</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: "https://img.icons8.com/ios/50/000000/export.png"}}/>
              </View>
              <View style={styles.infoContent}>
                <Text onPress={() =>this.props.navigation.navigate('SignIn')} style={styles.info}>Log Out</Text>
              </View>
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
  body:{
    backgroundColor: "#CCFFFF",
    height:500
  },
  item:{
    flexDirection : 'row',
    alignItems: 'flex-start'
  },
  infoContent:{
    flex:1,
    alignItems: 'flex-start',
    paddingLeft:10,
    marginLeft: -200
  },
  iconContent:{
    flex:1,
    alignItems: 'flex-start',
    paddingRight:5
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
    marginLeft: 40
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#000000",
  }
});
 