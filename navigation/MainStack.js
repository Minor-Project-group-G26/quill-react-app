import React from 'react'
// import {Text, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

import BottomNav from './BottomNav'
import RText from '../components/common/RText'
import FilterCategory from '../screen/MainScreen/FilterCategory'
import CourseInfo from '../screen/MainScreen/CourseInfo'
import CourseHome from '../screen/MainScreen/CourseHome'


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
           <Stack.Screen name='CourseHome' component={CourseHome} />
       </Stack.Navigator>
    )
}

export default MainStack
