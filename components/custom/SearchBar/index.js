import React from 'react'
import {View, Image} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

function SearchBar({style={}}) {
    return (
        <View style={{justifyContent:'center', alignItems:"center", marginTop:20}}>
            <View style={{backgroundColor: '#C4C4C4', width: "100%", borderRadius: 20, justifyContent:'space-between', flexDirection:'row',alignItems:'center', ...style}}>
                <TextInput style={{marginVertical:8,marginHorizontal:16, fontSize: 14, flex:1}} placeholder='Search...' placeholderTextColor='#1A1A1D'   />
                <View>
                    <Image source={require('../../../assets/icons/Search2.png')} style={{width:25, height: 25, marginHorizontal: 16}} />
                </View>
            </View>
        </View>
    )
}

export default SearchBar
