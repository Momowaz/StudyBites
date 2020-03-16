import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import ProfileScreen from "./ProfileScreen";
import SearchScreen from "./SearchScreen";

//Add navigators with screens in this file
export const HomeNavigator = createStackNavigator({
    Home: { screen: HomeScreen }
});

export const SettingsNavigator = createStackNavigator({
    Settings: { screen: SettingsScreen }
});

export const ProfileNavigator = createStackNavigator({
    Profile: { screen: ProfileScreen }
});

export const SearchNavigator = createStackNavigator({
    Search: { screen: SearchScreen }
});