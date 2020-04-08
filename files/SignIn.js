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

import { Actions, ActionConst } from 'react-native-router-flux';
import SignUpView from './SignUpView';
import * as firebase from "firebase";
var config = {
  apiKey: "*****************************",
  authDomain: "fblogin-with-react-native.firebaseapp.com",
  databaseURL: "https://fblogin-with-react-native.firebaseio.com",
  projectId: "fblogin-with-react-native",
  storageBucket: "fblogin-with-react-native.appspot.com",
  messagingSenderId: "************"
};



export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
    }
  }

  handleEmail = text => {
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };
  login = (email, pass) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(res => {
        alert(res.user.email);
      })
      .catch(error => {
        // Handle Errors here.
        console.log(error.message);
        
      });
};

  onClickListener = (viewId) => {
    Alert.alert("Please register to Sign In", +this.fullName);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.avatar}
          source={require('../src/img/logo.png')}
        />
        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
            placeholder="Email/Phone"
            keyboardType="email-address"
            autoCapitalize='none'
            underlineColorAndroid='transparent'
            onChangeText={this.handleEmail} />
        </View>

        <View style={styles.inputContainer}>
          
          <TextInput style={styles.inputs}
            placeholder="Password"
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={this.handlePassword} />
        </View>

        <TouchableOpacity onPress={() => { alert('Email has been sent to reset password!'); }}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableHighlight onPress={() => this.props.navigation.navigate('myAccount')} style={[styles.buttonContainer, styles.signupButton]}>
          <Text style={styles.signUpText}>Sign In</Text>
        </TouchableHighlight>

        <View>
          <Text style={styles.forgot}>Don't have account?</Text>
        </View>

        <Button
          onPress={() => this.props.navigation.navigate('SignUp')}
          title="Register"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27B998',
  },
  forgot: {
    color: "white",
    fontSize: 14,
    marginBottom: 10
  },

  avatar: {
    width: 150,
    height: 150,
    borderRadius: 900,
    borderWidth: 3,
    borderColor: "white",
    backgroundColor: 'white',
    marginBottom: 50,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: "#F9A143",
  },
  signUpText: {
    color: 'white',
  }
});
