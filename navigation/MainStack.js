import React from 'react'
// import {Text, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screen/MainScreen/Home'

import BottomNav from './BottomNav'
import RText from '../components/common/RText'
import FilterCategory from '../screen/MainScreen/FilterCategory'
import CourseInfo from '../screen/MainScreen/CourseInfo'
import NotificationPage from '../screen/MainScreen/NotificationPage'


const Stack = createStackNavigator()

function MainStack() {
    return (
        <Stack.Navigator initialRouteName="Notification">
           <Stack.Screen name='BottomNav' component={BottomNav} 
                options={{
                    headerShown: false
                }}
           />
           <Stack.Screen name='FilterCategory' component={FilterCategory} />
           <Stack.Screen name='CourseInfo' component={CourseInfo} />
           <Stack.Screen name='Notification' component={NotificationPage} 
           options={{
               title: "Notification", 
               headerTitleStyle: {color: '#950740'}
           }}
           />
       </Stack.Navigator>
    )
}

export default MainStack
