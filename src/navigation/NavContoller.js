import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './AuthStack'
import MainStack from './MainStack'
import { useSelector } from 'react-redux'

function NavContoller() {
    return (
        <NavigationContainer>
            {/* <AuthStack /> */}
            <MainStack />
    </NavigationContainer>
    )
}

export default NavContoller
