import React from 'react'
// import {Text, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screen/MainScreen/Home'
import BottomNav from './BottomNav'
import RText from '../components/common/RText'

const Stack = createStackNavigator()

function MainStack() {
    return (
        <Stack.Navigator initialRouteName="BottomNav">
           <Stack.Screen name='BottomNav' component={BottomNav} 
                options={{
                    headerShown: false
                }}
           />
       </Stack.Navigator>
    )
}

export default MainStack
