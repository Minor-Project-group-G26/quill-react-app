import React from 'react'
import { Text, View ,Button} from 'react-native'

function Home(props) {
    return (
        <View>
            <Text>This is Home</Text>
            <Button 
            title= "Home"
            onPress={()=>props.navigation.navigate('Books')}
            />
        </View>
    )
}

export default Home
