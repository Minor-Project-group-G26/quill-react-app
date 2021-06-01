import React from 'react'
import { SafeAreaView, View } from 'react-native'
import LinearBackgound from '../components/common/LinearBackgound/index'

function RootComponent(Component, Background=true) {
    return (props)=> {
        // console.log(props)
        return (
            <SafeAreaView style={{flex:1}}>
                {Background===true?(
                    <LinearBackgound>
                        <Component {...props} />
                    </LinearBackgound>
                ):(
                    <Component {...props} />
                )}
            </SafeAreaView>
        )
    }
    
}

export default RootComponent
