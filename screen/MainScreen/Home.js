import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { store } from '../../store';
import { ClearToken } from '../../store/AuthSlice';
import { request } from '../../utils/request'

function Home() {
    const dispatch = useDispatch()
    return (
        <View>
            <Text>This is Home</Text>
            <Button 
            title= "Home"
            onPress={()=>dispatch(ClearToken())}
            />
        </View>
    )
}

export default Home
