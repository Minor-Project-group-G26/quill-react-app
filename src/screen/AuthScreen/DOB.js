import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {useFonts} from 'expo-font'
import HText from '../../components/common/HText';
import RootComponent from '../RootComponent';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function DOB({navigation}) {

    // const [loaded] = useFonts({
    //     Humanist777CondensedBT: require('../../../assets/fonts/humnst777_cn_bt/Humanist777CondensedBT.ttf'),
    //   });
      
    //   if (!loaded) {
    //     return null;
    //   }

    return (
      
               <View style={StyleSheet.absoluteFill}>
                   
               </View>


    )
}

export default RootComponent(DOB)
