import React from 'react'
// import {Text, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screen/MainScreen/Home'
import Books from '../screen/MainScreen/Books'

const Stack = createStackNavigator()

function MainStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
           {/* <Stack.Screen name='Home' component={Home} /> */}
           <Stack.Screen name='Books' component={Books} />
       </Stack.Navigator>
    )
}

export default MainStack
