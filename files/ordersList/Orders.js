import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  Platform,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableHighlight
} from 'react-native';

export default class Orders extends Component {

  constructor(props){
    super(props);
    this.state = {
      rate: 8.50,
      GST: 0,
      PST: 0,
      qty: 0,
      subTotal: 0,
      totalAmt: 0,

    };
  }

  calculation = () => {
    var total = (this.state.rate * this.state.qty)
    total = total.toFixed(2);
    var pstAmt = total * 0.07
    pstAmt = pstAmt.toFixed(2);
    var gstAmt = total * 0.05
    gstAmt = gstAmt.toFixed(2);

    

    this.setState({
      GST: gstAmt,
      PST: pstAmt,
     subTotal: total,

     totalAmt:  +pstAmt + +gstAmt + +total
    
    })
  }
  render() {
    return (
<KeyboardAvoidingView behavior={Platform.Os == "ios" ? "padding" : "height"} style={styles.container}>

          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={require('../images/placeOrderNow.png')}/>
        
            </View>
          </View>

<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.xContainer}>
                <TextInput
                value={this.state.qty}
                onChangeText={(qty) => this.setState({qty})}
                placeholder='Quantity'
                placeholderTextColor='#303030'
                style={{
                padding: 20,
                borderWidth: 1,
                }}/>

            <TextInput
                placeholder='Comments!'
                placeholderTextColor='#303030'
                style={{
                padding: 40,
                borderWidth: 1,
                }}/>

              
 <Text style={{ textAlign: 'center', flex: 1, padding: 20 }}>Sub Total:$ {this.state.subTotal}</Text>
 <Text style={{ textAlign: 'center', flex: 1, padding: 20 }}>GST (5%): {this.state.GST}</Text>
 <Text style={{ textAlign: 'center', flex: 1, padding: 20 }}>PST (7%): {this.state.PST}</Text>

 <Text style={{ textAlign: 'center', flex: 1, padding: 20 }}>----------------</Text>
 <Text style={{ textAlign: 'center', flex: 1, padding: 20 }}>Total Amount: {this.state.totalAmt}</Text>
              
 <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={this.calculation}>
            <Text style={styles.signUpText}>Submit Order</Text>
            </TouchableHighlight>

        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#27B998",
    alignContent: 'center',
    alignItems:'center'
  },
  xContainer:
  {
    paddingTop: 10,
    alignContent: 'center',
    alignItems: 'center'
    
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
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
  avatar: {
    width: 250,
    height: 250,
    borderRadius: 63,
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    alignContent: 'center'
  },
  textInfo:{
    fontSize:18,
    marginTop:40,
    color: "#000000",
  }
});
 