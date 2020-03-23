import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

import {Actions, ActionConst} from 'react-native-router-flux';
import SignUpView from './SignUpView';



export default class SignIn extends Component {

  // constructor(props) {
  //   super(props);
  //   state = {
  //     email   : '',
  //     password: '',
  //   }
  // }




onClickListener = (viewId) => {
    Alert.alert("Please register to Sign In", +this.fullName);
  }

  render() {
    
    return (
      <View style={styles.container}>


        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize='none'
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
          <Text style={styles.signUpText}>Sign In</Text>
        </TouchableHighlight>
       
        <View>
          <Text>Don't have account?</Text>
        </View>

        <Button 
                          onPress={this.props.onPressSignUp}
                          title="Register"
                      />

        {/* <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPessSignUp}>
            <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#FF4DFF",
  },
  signUpText: {
    color: 'white',
  }
});
 