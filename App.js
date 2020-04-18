import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingSplash from './screens/OnBoardingSplash'
import OnBoardingBegin from './screens/OnBoardingBegin'
import OnBoardingConfirmPhone from './screens/OnBoardingConfirmPhone'
import AppIndex from './AppIndex'
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
              
export default function App() {

    return (
      <Provider store={store}>
        <AppIndex/>
      </Provider>
        
    );
}

