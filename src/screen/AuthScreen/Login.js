import React from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { incement } from '../../feature/SampleSlice';
import RootComponent from '../RootComponent'

function Login(props) {
    // console.log(props)
    const SampleDispatch = useDispatch();
    const sample = useSelector(state => state.sample)
    console.log(sample)
    return (
        <View>
            <Text>This is Login {sample.sample}</Text>
            <Button 
            title= "Home"
            onPress={()=> props.navigation.navigate('GetStarted')}
            />
            
            <Button 
            title= "increment"
            onPress={()=> SampleDispatch(incement())}
            />
            
        </View>
    )
}

export default RootComponent(Login) //(component, background(bool))
