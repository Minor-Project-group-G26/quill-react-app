import React from 'react'
// import {Text, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

import BottomNav from './BottomNav'
import RText from '../components/common/RText'
import FilterCategory from '../screen/MainScreen/FilterCategory'
import CourseInfo from '../screen/MainScreen/CourseInfo'
import CourseHome from '../screen/MainScreen/CourseHome'
import CourseData from '../screen/MainScreen/CourseData'
import { Text,View,Image,TouchableOpacity } from 'react-native'


const Stack = createStackNavigator()

function MainStack() {
    return (
        <Stack.Navigator initialRouteName="BottomNav">
           <Stack.Screen name='BottomNav' component={BottomNav} 
                options={{
                    headerShown: false,
                }}
           />
           <Stack.Screen name='FilterCategory' component={FilterCategory} options={{
               title:'Filter Category',
               
           }}/>
           <Stack.Screen name='CourseInfo' component={CourseInfo} />
           <Stack.Screen 
                name='CourseHome' 
                component={CourseHome} 
                options={({route, navigation})=>({
                    title:"",
                    headerLeft:()=> (
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:8}}>
                            <TouchableOpacity onPress={()=>navigation.goBack()} style={{justifyContent:'center'}}>
                                <Image source={require('../assets/icons/arrow-back.png')} style={{width:27, height:27}} />
                            </TouchableOpacity>
                            <View style={{marginHorizontal:16}}>
                                <RText style={{color:'#1A1A1A', fontFamily:'Roboto-Bold', fontSize:17}}>Design for Human Mind {'&'} AI</RText>
                                <RText style={{color:'#1A1A1A', fontFamily:'Roboto-Light-Italic', fontSize:12}}>by Riverside Design Studio</RText>
                            </View>
                        </View>
                    ),
                    headerRight:()=>(
                        
                        <View style={{borderRadius:30, backgroundColor:'#FFB103', marginHorizontal:16}}>
                            <Image source={require('../assets/icons/trophy.png')} style={{width:20, height:20, margin:8}} />
                        </View>
                    )  
                })}

           />
           <Stack.Screen 
                name='CourseData' 
                component={CourseData} 
                options={({route})=>({
                    title: route.params.headerTitle
                })}
            />
           
       </Stack.Navigator>
    )
}

export default MainStack
