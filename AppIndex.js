import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingSplash from './screens/OnBoardingSplash'
import OnBoardingBegin from './screens/OnBoardingBegin'
import OnBoardingConfirmPhone from './screens/OnBoardingConfirmPhone'
import OnBoardingName from './screens/OnBoardingName';
import OnBoardingDetails from './screens/OnBoardingDetails';
import OnBoardingContacts from './screens/OnBoardingContacts';
import OnBoardingThanks from './screens/OnBoardingThanks';
import MainMenu from './screens/MainMenu';
import OnBoardingNotifications from './screens/OnBoardingNotifications';

const Stack = createStackNavigator();
              
export default function AppIndex()  {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={OnBoardingSplash} />
        <Stack.Screen name="Begin" component={OnBoardingBegin} />
        <Stack.Screen name="Confirm" component={OnBoardingConfirmPhone} />
        <Stack.Screen name="Name" component={OnBoardingName} />
        <Stack.Screen name="Details" component={OnBoardingDetails} />
        <Stack.Screen name="Contacts" component={OnBoardingContacts} />
        <Stack.Screen name="Thanks" component={OnBoardingThanks} />
        <Stack.Screen name="Notifications" component={OnBoardingNotifications} /> 
        <Stack.Screen name="MainMenu" component={MainMenu} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
