import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './AuthStack'
import MainStack from './MainStack'
import { useSelector } from 'react-redux'

function NavContoller() {
    const token = useSelector(state => state.auth.token);
    // const token = null;
    console.log(token)
    return (
        <NavigationContainer>
            {token === null
            ?(
                <AuthStack />                
            ):(
                <MainStack /> 
            )}
        </NavigationContainer>
    )
}

export default NavContoller
