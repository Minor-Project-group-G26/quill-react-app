import React from 'react'
// import {Text, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screen/MainScreen/Home'
import FilterCategory from '../screen/MainScreen/FilterCategory'
import CourseInfo from '../screen/MainScreen/CourseInfo'

const Stack = createStackNavigator()

function MainStack() {
    return (
        <Stack.Navigator initialRouteName="FilterCategory">
           {/* <Stack.Screen name='Home' component={Home} /> */}
           {/* <Stack.Screen name='Filter Category' component={FilterCategory} /> */}
           <Stack.Screen name='CourseInfo' component={CourseInfo} />
       </Stack.Navigator>
    )
}

export default MainStack
