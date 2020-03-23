import {StyleSheet } from 'react-native'

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
    textInfo:{
      fontSize:18,
      marginTop:20,
      color: "#ffffff",
    },
    bodyContent:{
      flexDirection: 'row',
      flexWrap: 'wrap'
    },

    GBmenuBox:{
      backgroundColor: "#5F0038",
      width: 330,
      padding: 30,
      margin:10,
      shadowColor: 'black',
      shadowOpacity: .2,
      shadowOffset: {
        height:2,
        width:-2
      },
    },

    KPmenuBox:{
      backgroundColor: "#FC6266",
      width: 330,
      padding: 30,
      margin:10,
      shadowColor: 'black',
      shadowOpacity: .2,
      shadowOffset: {
        height:2,
        width:-2
      },
    },
    RCmenuBox:{
      backgroundColor: "#dcba60",
      width: 330,
      padding: 12,
      margin:10,
      shadowColor: 'black',
      shadowOpacity: .2,
      shadowOffset: {
        height:2,
        width:-2
      },
    },

    KPUmenuBox:{
      backgroundColor: "#862633",
      width: 330,
      padding: 30,
      margin:10,
      shadowColor: 'black',
      shadowOpacity: .2,
      shadowOffset: {
        height:2,
        width:-2
      },
    },
    icon: {
      width:40,
      height:40,
    },
    desc:{
      fontSize:14,
      color: "#FFFFFF",
    },
    info:{
      fontSize:19,
      color: "#000000",
    },
    image:{
      height: 100,
      opacity:.5,
      alignContent: 'center',
      alignItems: "center"  
    },
    GBfont:{
      fontSize:19,
      color: "#FFFFFF",
    }
  });

  export {styles};