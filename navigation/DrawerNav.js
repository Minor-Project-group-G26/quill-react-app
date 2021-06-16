import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import DrawerContainer from './DrawerContainer'
import MainStack from './MainStack'


const DrawerStack = createDrawerNavigator()

function DrawerNav() {
    return (
        <DrawerStack.Navigator drawerStyle={{width:'65%'}} drawerContent={props => <DrawerContainer {...props} />}>
            <DrawerStack.Screen name='MainStack' component={MainStack} />
        </DrawerStack.Navigator>
    )
}

export default DrawerNav
