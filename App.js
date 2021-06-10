import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import NavContoller from './navigation/NavContoller';
import store from './store';
import AuthStack from './navigation/AuthStack'
import MainStack from './navigation/MainStack'
export default function App() {
  const token = store.getState().auth.token
  const sample = store.getState().sample.sample
  // const token = null;
  // console.log(token, sample)
  return (
    <Provider store={store}>
      <NavigationContainer>
         <NavContoller />
      </NavigationContainer>
      </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
