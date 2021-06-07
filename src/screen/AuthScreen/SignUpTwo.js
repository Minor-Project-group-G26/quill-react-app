import React, { useState } from 'react'
import { Button, Dimensions, Image, Text, TextInput, View } from 'react-native'
import ArrowButton from '../../components/common/ArrowButton';
import AuthForm from '../../components/common/AuthForm';
import HText from '../../components/common/HText';

import RText from '../../components/common/RText';

import RootComponent from '../RootComponent'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height






function SignUpTwo({navigation, route}) {
    const [User, setUser] = useState({
        username:"",
        email:""
    })


    const Form = [{
        label: 'Username',
        // input_type: 'email-address', 
        // label_Style:{},
        // textInput_Style:{},
        textInput_Placeholder:"Type Username...",
        placeholder_Color:'#ededed',
        onChangeText: (e="")=>setUser({...User, username:e.trim()}),
        value:User.username
    
    },{
        label: 'Email',
        input_type: 'email-address', 
        // label_Style:,
        // textInput_Style:{},
        textInput_Placeholder:"Type Email...",
        placeholder_Color:'#ededed',
        onChangeText: (e="")=>setUser({...User, email:e.trim()}),
        value:User.email
    
    }]

    // console.log(route.params)

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
                    <ArrowButton onPress={() => navigation.navigate('SignUpThree',{data:{...route.params.data,  ...User}})} />
                </View>
            </View>

            <View style={{ height: HEIGHT * 0.23, position: "relative", alignItems: 'center' }}>
                <View style={{ alignItems: 'center', position: 'absolute', bottom: 20 }}>
                    <RText style={{ fontSize: 18, fontFamily: 'Roboto-Medium', color: '#fff', marginVertical: 10 }}>or continue with</RText>
                    {/* <HText style={{ fontSize: 20, fontFamily: 'Humnst777', color: '#C3073F', marginVertical: 8 }}>Login</HText> */}
                    <View style={{flexDirection:'row', width:WIDTH*0.8, justifyContent:'space-around'}}>
                      <Image
                        source={require('../../../assets/icons/social_google.png')}
                        style={{width:41, height:41}}
                      />
                      <Image
                        source={require('../../../assets/icons/social_facebook.png')}
                        style={{width:41, height:41}}
                      />
                      <Image
                        source={require('../../../assets/icons/social_twitter.png')}
                        style={{width:41, height:41}}
                      />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RootComponent(SignUpTwo)
