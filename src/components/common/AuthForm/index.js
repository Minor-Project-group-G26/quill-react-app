import React from 'react'
import { Dimensions, TextInput, View } from 'react-native'
import RText from '../RText'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

function AuthForm({List}) {
    return (
        <View style={{ width: WIDTH * 0.8, padding: 16, backgroundColor: '#fff', borderRadius: 15 }}>
                    
        {List.map((item, index) => (
            
            <View key={index} style={{ marginVertical: 6 }}>
                <RText style={{ fontFamily: 'Roboto-Bold-Italic', fontSize: 24, marginBottom:8 }}>{item.label}</RText>
                <View style={{ backgroundColor: '#C4C4C4', padding: 8, borderRadius: 10 }}>
                    <TextInput
                        placeholder={item.textInput_Placeholder?item.textInput_Placeholder:"Type Email..."} 
                        placeholderTextColor={item.placeholder_Color?item.placeholder_Color:'#EDEDED'}
                        style={{ color: '#000', fontSize: 16, paddingHorizontal:8 }}
                        keyboardType={item.input_type? item.input_type: 'default'}
                        secureTextEntry={item.secureTextEntry?item.secureTextEntry:false}
                        onChangeText={item.onChangeText}
                        value={item.value}
                    />
                </View>
            </View>
            
        ))}

        <View style={{paddingVertical:16}}></View>
       
    </View>
    )
}

export default AuthForm
