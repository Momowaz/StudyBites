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

import { creatBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';

import { styles } from './styles';

export default class GulbergMenu extends Component {

    static navigationOptions = {
        title: 'Gulberg Menu',
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>


                    <View style={styles.body}>
                        <View style={styles.bodyContent}>


                        <View>
                                <Image style={styles.image}
                                    source={require('../images/gulberg.jpeg')}
                                />
                            </View>

                            <View style={styles.GBmenuBox}>
                                <Text onPress={() => this.props.navigation.navigate('Orders')} style={styles.GBfont}>Butter Chicken</Text>
                                <Text style={styles.desc}>Mild creamy tomatoe based boneless chicken curry</Text>
                                <Text style={styles.desc}>$8.50</Text>
                            </View>

                            <View style={styles.GBmenuBox}>
                                <Text onPress={() => this.props.navigation.navigate('Orders')} style={styles.GBfont}>Beef Nihari</Text>
                                <Text style={styles.desc}>Slow cooked spicy beef shank curry</Text>
                                <Text style={styles.desc}>$9.50</Text>
                            </View>

                            <View style={styles.GBmenuBox}>
                                <Text onPress={() => this.props.navigation.navigate('Orders')} style={styles.GBfont}>Chicken Karahi</Text>
                                <Text style={styles.desc}>Tomato based chicken Karahi with ginger, garlic and spices</Text>
                                <Text style={styles.desc}>$8.50</Text>
                            </View>

                            <View style={styles.GBmenuBox}>
                                <Text onPress={() => this.props.navigation.navigate('Orders')} style={styles.GBfont}>Beef Seekh Kabab</Text>
                                <Text style={styles.desc}>Skewer of minced beef prepared in the tandoor</Text>
                                <Text style={styles.desc}>$6.95</Text>
                            </View>

                            <View style={styles.GBmenuBox}>
                                <Text onPress={() => this.props.navigation.navigate('Orders')} style={styles.GBfont}>Mixed Grill Sizzler</Text>
                                <Text style={styles.desc}>A mixture of chicken tikka with 1 naan, rice and raita</Text>
                                <Text style={styles.desc}>$25.95</Text>
                            </View>

                            <View style={styles.GBmenuBox}>
                                <Text onPress={() => this.props.navigation.navigate('Orders')} style={styles.GBfont}>Chicken Donair Platter</Text>
                                <Text style={styles.desc}>Shredded donair chicken served with rice, salad and humus, garlic sauce</Text>
                                <Text style={styles.desc}>$8.50</Text>
                            </View>

                            <View style={styles.GBmenuBox}>
                                <Text style={styles.GBfont}>Contact Us</Text>
                                <Text style={styles.desc}>(604) 543-2080 </Text>
                                <Text style={styles.desc}>GBfont@kwantlenpizza.com</Text>
                                <Text style={styles.desc}>7181 126 St, Surrey</Text>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

