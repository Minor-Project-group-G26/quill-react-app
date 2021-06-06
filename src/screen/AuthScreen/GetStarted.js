import React from 'react'
import { Button, SafeAreaView, Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {useFonts} from 'expo-font'
import HText from '../../components/common/HText';
import RootComponent from '../RootComponent';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function GetStarted({navigation}) {


    return (
      
               <View style={StyleSheet.absoluteFill}>
                    <View style={{height: HEIGHT*0.7, alignItems:'center', marginTop: HEIGHT*0.08}}>
                        <View>
                            <Image
                                source={require('../../../assets/images/Logo.png')}
                                style={{width:170, height:176}}
                            />
                        </View>
                        <View style={{marginVertical: 20}}>
                            <HText style={{
                                fontSize:42,  
                                color:'#C9C9C9', 
                                fontFamily:'Humnst777-Italic' 
                            }}>Quill Learning</HText>
                            <View style={{paddingVertical: 1, backgroundColor:'#6F2232', marginTop:4, elevation:2}}></View>
                        </View>
                                            
                    </View>

                    <View style={{alignItems:'center',}}>
                        <View style={{alignItems:'center', width:100, backgroundColor:'#950740', height:50, justifyContent:'center', borderRadius:20}}>
                           <TouchableOpacity
                           onPress={()=>navigation.navigate('SignUpOne')}>
                           <Image
                            source={require('../../../assets/icons/rightArrow.png')}
                                style={{width: 40, height:31}}
                            />
                           </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{position:'relative', flex:1,alignItems:'center'}}>
                            <View style={{position:'absolute', bottom: 16}}>
                                <HText style={{fontFamily:'Humnst777-Italic', color: '#fff', fontSize:18}}>
                                    A Journey to Excellence
                                </HText>
                            </View>
                    </View>
               </View>


    )
}

export default RootComponent(GetStarted)
