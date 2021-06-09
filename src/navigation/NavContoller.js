import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './AuthStack'
import MainStack from './MainStack'

function NavContoller() {
    return (
        <NavigationContainer>
            {/* <AuthStack /> */}
            <MainStack />
        </NavigationContainer>
    )
}

export default NavContoller
