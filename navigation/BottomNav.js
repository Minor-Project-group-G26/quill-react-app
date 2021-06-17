import React from 'react'
import {BottomTabBar, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screen/MainScreen/Home'
import { Image, Text, View } from 'react-native'
import RText from '../components/common/RText'
import Search from '../screen/MainScreen/Search'
import { useSelector } from 'react-redux'
import Books from '../screen/MainScreen/Books'
import Profile from '../screen/MainScreen/Profile'
import { BooksHomeStack, ProfileStack } from './CustomStack'

const TapStack = createBottomTabNavigator();



export const Quiz = () => <View><Text>Quiz</Text></View>



function BottomNav() {
    
    const swapStore = useSelector(state => state.swapStore)


    const BottomTabList = [
        {
        name:'Home',
        title:'Home',
        imgStyle:{width: 24, height:21},
        image:require('../assets/icons/home.png'),
        component: swapStore.store==='Books'? BooksHomeStack:Home
        },
        {
        name:'Search',
        title:'Search',
        imgStyle:{width: 24, height:24},
        image:require('../assets/icons/search.png'),
        component:Search
        },
        {
        name:'Quiz',
        title:'Quiz',
        imgStyle:{width: 24, height:24},
        image:require('../assets/icons/quiz.png'),
        component:Quiz
        },
        {
        name:'Profile',
        title:'Profile',
        imgStyle:{width: 20, height:24},
        image:require('../assets/icons/profile.png'),
        component:ProfileStack
        },
    ]



    return (
        <TapStack.Navigator  tabBarOptions={{
            // tabStyle:{backgroundColor:'#4E4E50', paddingTop: 8, paddingBottom: 8, justifyContent:'space-around'},
            style:{height: 55, backgroundColor:'#4E4E50', paddingBottom:0 },
            showLabel:false,
        }} >
            {BottomTabList.map((item, index)=>(

                <TapStack.Screen key={index}
                name={item.name} 
                component={item.component} 
                options={{
                    title:item.title,
                    tabBarIcon: ({focused})=>(
                        <View style={{alignItems:'center'}}>
                            {/* {console.log(focused)} */}
                            <Image source={item.image} style={[item.imgStyle, {tintColor:focused?'#C3073F':'#ffff'}]} />
                            <RText style={{fontSize: 10, fontFamily:'Roboto-Medium', color:'#fff'}}>{item.title}</RText>
                        </View>
                    )
                }}
                />
            ))}
            {/* <TapStack.Screen 
            name="Search" 
            component={Search}
            options={{
                title:"",
                tabBarIcon: ({focused})=>(
                    <View>
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
                        <Image source={require('../assets/icons/profile.png')} style={{width: 20, height:24, tintColor:focused?'#C3073F':'#ffff'}} />
                        <RText style={{fontSize: 10, fontFamily:'Roboto-Medium', color:'#fff',}}>Profile</RText>
                    </View>
                )
            }} 
            /> */}
        </TapStack.Navigator>
    )
}

export default BottomNav


