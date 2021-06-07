import React, { useState } from 'react'
import { Button, Dimensions, Text, TextInput, View } from 'react-native'
import ArrowButton from '../../components/common/ArrowButton';
import AuthForm from '../../components/common/AuthForm';
import HText from '../../components/common/HText';

import RText from '../../components/common/RText';

import RootComponent from '../RootComponent'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height





function SignUpOne({navigation, route}) {

    const [User, setUser] = useState({
        name:"",
        dob:""
    })


    
    const Form = [{
        label: 'Name',
        // input_type: 'email-address', 
        // label_Style:{},
        // textInput_Style:{},
        textInput_Placeholder:"Type Name...",
        placeholder_Color:'#ededed',
        onChangeText: (e="")=>setUser({...User, name:e.trim()}),
        value:User.name

    },{
        label: 'Date Of Birth',
        // input_type: 'email-address', 
        // label_Style:,
        // textInput_Style:{},
        textInput_Placeholder:"yyyy-mm-dd",
        placeholder_Color:'#ededed',
        onChangeText: (e="")=>setUser({...User, dob:e.trim()}),
        value:User.dob


    }]



    return (
        <View style={{ flex: 1 ,marginTop:83}}>
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
                    <ArrowButton onPress={() => navigation.navigate('SignUpTwo',{data:User})} />
                </View>
            </View>

            <View style={{ height: HEIGHT * 0.23, position: "relative", alignItems: 'center' }}>
                <View style={{ alignItems: 'center', position: 'absolute', bottom: 20 }}>
                    <RText style={{ fontSize: 20, fontFamily: 'Roboto-Medium', color: '#fff', marginVertical: 10 }}>Don’t Have an Account</RText>
                    <HText style={{ fontSize: 20, fontFamily: 'Humnst777', color: '#C3073F', marginVertical: 8 }} onPress={()=>navigation.navigate('Login', {data:User})}>Login</HText>
                </View>
            </View>
        </View>
    )
}

export default RootComponent(SignUpOne)
