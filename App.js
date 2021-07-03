import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { BackHandler, StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import NavContoller from './navigation/NavContoller';
import store from './store';
import AuthStack from './navigation/AuthStack'
import MainStack from './navigation/MainStack'
import * as Permissions from 'expo-permissions'
import {requestCameraPermissionsAsync, requestMediaLibraryPermissionsAsync} from 'expo-image-picker'
// import from 'expo-file-system'
export default function App() {
 
  const token = store.getState().auth.token
  const sample = store.getState().swapStore
  // const token = null;
  console.log(token, sample)
  const GetCameraPermission = async()=>{
    const {status, granted}= await requestCameraPermissionsAsync()
    // console.log('permission', permission)
    if(!status==='granted' || !granted){
      BackHandler.exitApp()
    }
    // if (status === 'granted') {
      return console.log("Camera Permission Grented")
    // } else {
    //   throw new Error('Location permission not granted');
    // }
  }
  const GetMediaLibraryPermission = async()=>{
    const { status, granted } = await requestMediaLibraryPermissionsAsync();
    if(!status==='granted' || !granted){
      return BackHandler.exitApp()
    }
    return console.log("Media Library Permission Grented")
  }
  useEffect(() => {
    // GetCameraPermission()
    GetMediaLibraryPermission()
  }, [])

  return (
    <Provider store={store}>
      <StatusBar backgroundColor='#000' style={'light'} />
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
