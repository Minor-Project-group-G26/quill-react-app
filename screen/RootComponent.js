import React from 'react'
import { Dimensions, SafeAreaView, View } from 'react-native'
import LinearBackgound from '../components/common/LinearBackgound/index'
const HIGHT = Dimensions.get('screen').height
function RootComponent(Component, Background=true) {
    return (props)=> {
        // console.log(props)
        return (
            <SafeAreaView style={{flex:1}}>
                {Background===true?(
                    <LinearBackgound style={{height:HIGHT}}>
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
