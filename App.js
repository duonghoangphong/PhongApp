import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';
import SplashScreen from './src/screen/SplashScreen';
import LoginScreen from './src/screen/LoginScreen';
import Main from './src/router/Main';

import MenuCustom from './src/components/MenuCustom'
import Modal_AddNhanVien from './src/screen/Modal/Modal_AddNhanVien';
import ModalTest from './src/test/ModalTest'

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          headerMode={'none'}
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: 'transparent' },
            // cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange: [0, 0.25, 0.7, 1],
                }),
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.2],
                  extrapolate: 'clamp',
                }),
              },
            }),
          }}
          mode="modal">
          <Stack.Screen name="Splash" component={SplashScreen}></Stack.Screen>
          <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
          <Stack.Screen name="Main" component={Main}></Stack.Screen>

          <Stack.Screen name="MemnuCustom" component={MenuCustom}></Stack.Screen>

          <Stack.Screen name="Modal_AddNhanVien" component={Modal_AddNhanVien}></Stack.Screen>
          <Stack.Screen name="Modal_Test" component={ModalTest}></Stack.Screen>
        </Stack.Navigator>
        <FlashMessage
          position="top"
          style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
        />
      </NavigationContainer>
    );
  }
}
