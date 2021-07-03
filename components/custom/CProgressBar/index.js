import React, { useEffect, useRef, useState } from 'react'
import { Animated, View, Text } from 'react-native'

function CProgressBar({backgroundColor='#E5E5E5', loaderColor='#4EE278', Percentage=0}) {

    const [Width, setWidth] = useState(0)
    const animatedLoader = useRef(new Animated.Value(-10000)).current;
    const animateTo = useRef(new Animated.Value(-10000)).current;

    const LoadAnimate = ()=>{
        Animated.timing(animatedLoader,{
            toValue: animateTo,
            duration:400,
            useNativeDriver:true 
        }).start()
    }

    useEffect(()=>{
        animateTo.setValue(-Width+Width*Percentage/100)
        LoadAnimate()
    })

    return (
        <View
        onLayout={e=> setWidth(e.nativeEvent.layout.width)}
        style={{
            backgroundColor:backgroundColor,
            height:6, 
            borderRadius:60, 
            position:'relative', 
            overflow:'hidden', }}>
            <Animated.View
            style={{
                backgroundColor: loaderColor,
                transform:[{translateX: animatedLoader}],
                width:'100%',
                height:'100%',
                position:'absolute'
            }}
            >

            </Animated.View>
        </View>
    )
    // return (
    //     <Text>Hello</Text>
    // )
}

export default CProgressBar
