import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { store } from '../../store/store';
import { request } from '../../utils/request'

function Home() {
    const get = () => {
        const res = request('get', '');
        console.log(res.data);
        // console.log(store.getState().auth)
    }
    return (
        <View>
            <Text>This is Home</Text>
            <Button 
            title= "Home"
            onPress={get}
            />
        </View>
    )
}

export default Home
