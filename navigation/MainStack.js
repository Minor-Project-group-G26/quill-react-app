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
import CourseHomePage from '../screen/MainScreen/CourseHomePage';
import ManagePassword from '../screen/MainScreen/ManagePassword';
import AdminVerifyUser from '../screen/MainScreen/AdminVerifyUser';
import AdminVerifyInstructor from '../screen/MainScreen/AdminVerifyInstructor';
import AdminVerifyBook from '../screen/MainScreen/AdminVerifyBook';
import AdminVerifyCourse from '../screen/MainScreen/AdminVerifyCourse';
import AddCourse from '../screen/MainScreen/AddCourse';



const Stack = createStackNavigator()

function MainStack() {

    const swapStore = useSelector(state => state.swapStore)

    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <Stack.Navigator initialRouteName="BottomNav">
            <Stack.Screen 
                name='CourseHomePage'
                component={CourseHomePage}
                options={{
                    title: '',
                    headerLeft: () => (
                        <View style={{ flexDirection: 'row'}}>
                            <TouchableOpacity activeOpacity={1} style={{paddingLeft: 10, justifyContent:'center'}}>
                                <Image style={{width:27, height:27}} source={require('../assets/icons/arrow-back.png')} />
                            </TouchableOpacity>
                            <View style={{paddingLeft:30}}>
                                <RText style={{fontFamily: 'Roboto-Black'}}>Design for Human Mind & AI</RText>
                                <RText style={{fontFamily: 'Roboto-Italic', fontSize:12}}>by Riverside Design Studio</RText>
                            </View>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{elevation:15,marginRight: 15,backgroundColor:'#fff', height: 36, width: 36, justifyContent: 'center', alignItems:'center', borderRadius:50 }}>
                        <Image style={{width:22, height:22}} source={require('../assets/icons/wishlist.png')} />
                        </View>
                    )
                }}

            />
            <Stack.Screen name='BottomNav' component={BottomNav} 
                options={{
                    headerShown:false,
                }}
           />
           <Stack.Screen 
                name='ManagePassword' 
                component={ManagePassword}
                options={{
                    title: 'Manage Password',
                    headerTintColor: '#950740'
                }}
           />
           <Stack.Screen
                name='AdminVerifyUser'
                component={AdminVerifyUser}
                options={{
                    title:'User Action',
                    headerStyle: {
                        backgroundColor:'#C3073F',
                    },
                    headerTintColor:'#fff'
                }}
            />
           <Stack.Screen
                name='AdminVerifyInstructor'
                component={AdminVerifyInstructor}
                options={{
                    title:'Instructor Action',
                    headerStyle: {
                        backgroundColor:'#C3073F',
                    },
                    headerTintColor:'#fff'
                }}
            />
           <Stack.Screen
                name='AdminVerifyBook'
                component={AdminVerifyBook}
                options={{
                    title:'Book Action',
                    headerStyle: {
                        backgroundColor:'#C3073F',
                    },
                    headerTintColor:'#fff'
                }}
            />
           <Stack.Screen
                name='AdminVerifyCourse'
                component={AdminVerifyCourse}
                options={{
                    title:'Course Action',
                    headerStyle: {
                        backgroundColor:'#C3073F',
                    },
                    headerTintColor:'#fff'
                }}
            />
            <Stack.Screen 
                name='AddCourse'
                component={AddCourse}
                options={{
                    title:'Add Course',
                }}
            />
           {/*<Stack.Screen name='FilterCategory' component={FilterCategory} options={{
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
                        <Image source={require('../assets/icons/wishlist.png')} style={{height:30,width:30, margin:5}}/>
                    </TouchableOpacity>
                ),
                headerTitle:()=>(<RText style={{fontFamily:'Roboto-Bold',fontSize:24}}>{route.params.headerTitle}</RText>)})}/> */}
           {/* <Stack.Screen name='Books' component={Books} /> */}
           {/* <Stack.Screen name="Wishlist" component={Wishlist}/> */}

           {/* <Stack.Screen 
                name='Profile'
                component={Profile}
                options={{
                    title: 'Profile',
                    headerRight: () => (
                        <View style={{alignItems: 'center',marginRight:10, flexDirection: 'row'}}>
                            <View style={{paddingRight: 5}}>
                                <RText style={{fontFamily:'Roboto-Medium'}}>Instructor Mode</RText>
                            </View>
                            <View>
                            <Switch 
                                trackColor={{ false: "#B2B2B2", true: "#B2B2B2" }}
                                thumbColor={isEnabled ? "#ffffff" : "#1A1A1D"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            </View>
                        </View>
                        
                    )
                }}
            /> */}

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
