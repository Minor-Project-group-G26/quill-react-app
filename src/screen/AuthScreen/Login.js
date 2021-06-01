import React from 'react'
import { Button, Text, View } from 'react-native'
import RootComponent from '../RootComponent'

function Login(props) {
    // console.log(props)
    return (
        <View>
            <Text>This is Login</Text>
            <Button 
            title= "Home"
            onPress={()=> props.navigation.navigate('GetStarted')}
            />
        </View>
    )
}

export default RootComponent(Login)
