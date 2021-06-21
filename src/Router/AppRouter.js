import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator, createTabNavigator, TabNavigator, SafeAreaView, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../Screen/Auth/Login'
import { Dimensions, View, Image, Text, Platform, Alert } from 'react-native';

import Header from './Header'
import { FONTS } from '../Fonts/Fonts';


const HomeStack = createStackNavigator({

  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerShown: true,
        header:()=> <Header navigationProps={navigation} type={1} />
      };
    },
  },
  

});





const AppRouter = createSwitchNavigator(

  {

   
    "initial":HomeStack ,

    
  },
  {
    initialRouteName: 'initial',
  },

);

export default createAppContainer(AppRouter);
