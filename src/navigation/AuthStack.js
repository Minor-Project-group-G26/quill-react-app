import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import GetStarted from '../screen/AuthScreen/GetStarted'
import Login from '../screen/AuthScreen/Login'
import DOB from '../screen/AuthScreen/DOB'

const Stack = createStackNavigator()

function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen 
                options={{
                    headerShown:false
                }}
                name='GetStarted' 
                component={GetStarted} />
            <Stack.Screen 
                options={{
                    headerShown:false
                }}
                name='DOB' 
                component={DOB} />
            <Stack.Screen 
                name='Login' 
                component={Login} 
            />
       </Stack.Navigator>
    )
}

export default AuthStack
