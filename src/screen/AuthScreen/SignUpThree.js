import React from 'react'
import { Button, Dimensions, Image, Text, TextInput, View } from 'react-native'
import ArrowButton from '../../components/common/ArrowButton';
import AuthForm from '../../components/common/AuthForm';
import HText from '../../components/common/HText';

import RText from '../../components/common/RText';

import RootComponent from '../RootComponent'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height


const Form = [{
    label: 'Password',
    // input_type: 'email-address', 
    // label_Style:{},
    // textInput_Style:{},
    textInput_Placeholder:"Type Password...",
    placeholder_Color:'#ededed',
    secureTextEntry:true,


},{
    label: 'Confirm Password',
    // input_type: 'email-address', 
    // label_Style:,
    // textInput_Style:{},
    textInput_Placeholder:"Type Confirm Password...",
    placeholder_Color:'#ededed'

}]



function SignUpThree({navigation, route}) {
    return (
        <View style={{ flex: 1 }}>
            {/* form */}
            <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: HEIGHT * 0.55 }}>
                <AuthForm List={Form} />
            </View>
            {/* forget */}
            <View style={{ alignItems: 'center' }}>
                <View>
                    <RText style={{ fontSize: 20, fontFamily: 'Roboto-Medium', color: '#fff', marginVertical: 16 }}> </RText>
                </View>
                <View style={{ marginTop: 16 }}>
                    <ArrowButton onPress={() => navigation.navigate('Login')} />
                </View>
            </View>

            <View style={{ height: HEIGHT * 0.23, position: "relative", alignItems: 'center' }}>
                <View style={{ alignItems: 'center', position: 'absolute', bottom: 20 }}>
                    {/* <HText style={{ fontSize: 20, fontFamily: 'Humnst777', color: '#C3073F', marginVertical: 8 }}>Login</HText> */}
                    <RText style={{ fontSize: 18, fontFamily: 'Roboto-Medium', color: '#fff', marginVertical: 10 }}>Agree our Term & Condition</RText>
                    
                </View>
            </View>
        </View>
    )
}

export default RootComponent(SignUpThree)
