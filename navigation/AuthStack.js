import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import GetStarted from '../screen/AuthScreen/GetStarted'
import Login from '../screen/AuthScreen/Login'
import SignUpOne from '../screen/AuthScreen/SignUpOne'
import SignUpTwo from '../screen/AuthScreen/SignUpTwo'
import SignUpThree from '../screen/AuthScreen/SignUpThree'

const Stack = createStackNavigator()

function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="GetStarted">
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
                name='SignUpOne' 
                component={SignUpOne} />
            <Stack.Screen 
                options={{
                    title:"Create Account",
                    headerTitleStyle:{fontSize:26},
                    headerStyle:{elevation:16}
                }}
                name='SignUpTwo' 
                component={SignUpTwo} />
            <Stack.Screen 
                options={{
                    title:"Create Account",
                    headerTitleStyle:{fontSize:26},
                    headerStyle:{elevation:16}
                }}
                name='SignUpThree' 
                component={SignUpThree} />
            <Stack.Screen 
                options={{
                    title:"Login",
                    headerTitleStyle:{fontSize:26},
                    headerStyle:{elevation:16}
                }}
                name='Login' 
                component={Login} 
            />
       </Stack.Navigator>
    )
}

export default AuthStack
