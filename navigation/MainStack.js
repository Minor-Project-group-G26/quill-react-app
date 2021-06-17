import React, { useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import BottomNav from './BottomNav'
import RText from '../components/common/RText'
import FilterCategory from '../screen/MainScreen/FilterCategory'
import CourseInfo from '../screen/MainScreen/CourseInfo'

import Profile from '../screen/MainScreen/Profile'
import PersonalSetting from '../screen/MainScreen/PersonalSetting';

import CourseHome from '../screen/MainScreen/CourseHome'
import CourseData from '../screen/MainScreen/CourseData'
import { Text,View,Image,TouchableOpacity, Switch } from 'react-native'
// import Books from '../screen/MainScreen/Books'
import BooksDetails from '../screen/MainScreen/BooksDetails'
import Wishlist from '../screen/MainScreen/Wishlist'
import { useSelector } from 'react-redux'
import MyCourses from '../screen/MainScreen/MyCourses'



const Stack = createStackNavigator()

function MainStack() {

    const swapStore = useSelector(state => state.swapStore)

    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <Stack.Navigator initialRouteName="BottomNav">
           <Stack.Screen name='BottomNav' component={BottomNav} 
                options={{
                    headerShown:false,
                }}
           />
           <Stack.Screen name='FilterCategory' component={FilterCategory} options={{
               title:'Filter Category',
               
           }}/>
           <Stack.Screen name='CourseInfo' component={CourseInfo}  options={{title:'Course Info'}}/>
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
           
           <Stack.Screen name='BooksDetails' component={BooksDetails}  options={({route})=>({
               headerRight:()=>(
                    <TouchableOpacity style={{borderRadius:30,marginRight:30, elevation:10, backgroundColor:'#fff'}}>
                        <Image source={require('../assets/icons/Wishlist2.png')} style={{height:25,width:25, margin:5}}/>
                    </TouchableOpacity>
                ),
                headerTitle:()=>(<RText style={{fontFamily:'Roboto-Bold',fontSize:24}}>{route.params.headerTitle}</RText>)})}/>
           {/* <Stack.Screen name='Books' component={Books} /> */}
           <Stack.Screen name="Wishlist" component={Wishlist}/>
           <Stack.Screen name="MyCourses"  component={MyCourses} options={{
               headerTitleStyle:{color:'#950740'}
           }}/>
            <Stack.Screen 
                name="PersonalSetting"
                component={PersonalSetting}
                options={{
                    title: 'Personal Setting',
                    headerTintColor: '#950740'
                }}
            />

       </Stack.Navigator>
    )
}

export default MainStack
