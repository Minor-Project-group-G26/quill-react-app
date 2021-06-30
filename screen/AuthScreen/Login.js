import { useHeaderHeight } from '@react-navigation/stack';
import React, { useState } from 'react'
import { Button, Dimensions, Text, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux';
import ArrowButton from '../../components/common/ArrowButton';
import AuthForm from '../../components/common/AuthForm';
import HText from '../../components/common/HText';

import RText from '../../components/common/RText';
import { loginUser } from '../../store/AuthSlice';
import { request } from '../../utils/request';

import RootComponent from '../RootComponent'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height




function Login({navigation, route}) {

    const dispatch = useDispatch();

    const [User, setUser] = useState({
        email: "",
        password: ""
    })
    const Form = [{
        label: 'Email',
        input_type: 'email-address', 
        // label_Style:{},
        // textInput_Style:{},
        textInput_Placeholder:"Type Email...",
        placeholder_Color:'#ededed',
        onChangeText: (e) => setUser({
            ...User,
            email: e.trim()
        }),
        value: User.email
    },{
        label: 'Password',
        // input_type: 'e', 
        // label_Style:,
        // textInput_Style:{},
        textInput_Placeholder:"Type Password...",
        secureTextEntry:true,
        placeholder_Color:'#ededed',
        onChangeText: (e) => setUser({
            ...User,
            password: e.trim()
        }),
        value: User.password
    
    }]


    const LoginHandler = ()=>{
        dispatch(loginUser(User))
    }

    return (
        <View style={{ flex: 1 }}>
            {/* form */}
            <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: HEIGHT * 0.55 }}>
               <AuthForm List={Form} />
            </View>
            {/* forget */}
            <View style={{alignItems:'center'}}>
                <View>
                    <RText style={{ fontSize: 20, fontFamily: 'Roboto-Medium', color: '#fff', marginVertical: 16 }}>Forget Password ?</RText>
                </View>
                <View style={{marginTop:16}}>
                    <ArrowButton onPress={LoginHandler}/>
                </View>
            </View>

            <View style={{height: HEIGHT*0.23,position:"relative", alignItems:'center'}}>
                <View style={{alignItems:'center', position:'absolute', bottom: 20}}>
                    <RText style={{fontSize:20,fontFamily: 'Roboto-Medium', color: '#fff', marginVertical: 10 }}>Don’t Have an Account</RText>
                    <HText style={{fontSize:20,fontFamily: 'Humnst777', color: '#C3073F', marginVertical: 8 }} onPress={()=> navigation.nav}>Create Account</HText>
                </View>
            </View>
        </View>
    )
}

export default RootComponent(Login) //(component, background(bool))
