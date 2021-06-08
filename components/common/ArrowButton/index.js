import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

function ArrowButton({onPress=null}) {
    return (
        <View style={{alignItems:'center', width:100, backgroundColor:'#950740', height:50, justifyContent:'center', borderRadius:20}}>
            <TouchableOpacity
            onPress={onPress}>
            <Image
            source={require('../../../assets/icons/rightArrow.png')}
                style={{width: 40, height:31}}
            />
            </TouchableOpacity>
        </View>
    )
}

export default ArrowButton
