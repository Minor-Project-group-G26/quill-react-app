import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screen/MainScreen/Home'
import { Image, Text, View } from 'react-native'
import RText from '../components/common/RText'
const TapStack = createBottomTabNavigator()

function BottomNav() {
    return (
        <TapStack.Navigator  tabBarOptions={{
            // tabStyle:{backgroundColor:'#4E4E50', paddingTop: 8, paddingBottom: 8, justifyContent:'space-around'},
            style:{height: 55, borderTopLeftRadius:30, backgroundColor:'#4E4E50',borderTopRightRadius:30, paddingBottom:0},
            showLabel:false
            

        }} >
            <TapStack.Screen 
            name="Home" 
            component={Home} 
            options={{
                title:"",
                tabBarIcon: ({focused})=>(
                    <View>
                        {/* {console.log(focused)} */}
                        <Image source={require('../assets/icons/home.png')} style={{width: 24, height:21, tintColor:focused?'#C3073F':'#ffff'}} />
                        <RText style={{fontSize: 10, fontFamily:'Roboto-Medium', color:'#fff'}}>Home</RText>
                    </View>
                )
            }}
            />
            <TapStack.Screen 
            name="Search" 
            component={Search}
            options={{
                title:"",
                tabBarIcon: ({focused})=>(
                    <View>
                        {/* {console.log(focused)} */}
                        <Image source={require('../assets/icons/search.png')} style={{width: 24, height:24, tintColor:focused?'#C3073F':'#ffff'}} />
                        <RText style={{fontSize: 10, fontFamily:'Roboto-Medium', color:'#fff'}}>Search</RText>
                    </View>
                )
            }} 
            />
            <TapStack.Screen 
            name="Quiz" 
            component={Quiz} 
            options={{
                title:"",
                tabBarIcon: ({focused})=>(
                    <View>
                        {/* {console.log(focused)} */}
                        <Image source={require('../assets/icons/quiz.png')} style={{width: 24, height:24, tintColor:focused?'#C3073F':'#ffff'}} />
                        <RText style={{fontSize: 10, fontFamily:'Roboto-Medium', color:'#fff'}}>Quiz</RText>
                    </View>
                )
            }}
            />
            <TapStack.Screen 
            name="Profile" 
            component={Profile}
            options={{
                title:"",
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems:'center'}}>
                        {/* {console.log(focused)} */}
                        <Image source={require('../assets/icons/profile.png')} style={{width: 20, height:24, tintColor:focused?'#C3073F':'#ffff'}} />
                        <RText style={{fontSize: 10, fontFamily:'Roboto-Medium', color:'#fff',}}>Profile</RText>
                    </View>
                )
            }} 
            />
        </TapStack.Navigator>
    )
}

export default BottomNav


const Search = () => <View><Text>Search</Text></View>
const Quiz = () => <View><Text>Quiz</Text></View>
const Profile = () => <View><Text>Profile</Text></View>
