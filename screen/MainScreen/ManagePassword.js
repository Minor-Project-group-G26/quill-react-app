import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import RootComponent from '../RootComponent';
import HText from '../../components/common/HText';
import RText from '../../components/common/RText';
import { TextInput } from 'react-native-gesture-handler';
import { request } from '../../utils/request';


function ManagePassword() {

    const [PersonalInfo, setPersonalInfo] = useState({
        password:"",
        npassword:"",
        cpasword:""
    })
    const UpdatePersonalInfo = (option, text) => {
        console.log('Ok');
        // console.log(PersonalInfo)
        switch (option) {
            case "password":
                setPersonalInfo({
                    ...PersonalInfo,
                    password:text
                });
                break;
        
            case "npassword":
                setPersonalInfo({
                    ...PersonalInfo,
                    npassword:text
                });
                break;
        
            case "cpassword":
                setPersonalInfo({
                    ...PersonalInfo,
                    cpasword:text
                });
                break;
        
        
            default:
                break;
        }
    }

    const UpdatePasswordHandler = async()=>{
        if(PersonalInfo.password==='' || PersonalInfo.npassword==='')
        return console.log("Please Fill the Fields")
        console.log("sending")
        if(PersonalInfo.cpasword !== PersonalInfo.npassword)
        return console.log("New and Confirm Password doesn't match")
        const response = request('put', 'user/password_reset', PersonalInfo)
        if(response)
        console.log(response.data)
        else
        console.log("fail to change")
        ResetInfoHandler()
        
    }

    const ResetInfoHandler = ()=>{
        setPersonalInfo({
            ...PersonalInfo,
            password:"",
            npassword:'',
            cpasword:''
        })
    }
    

    return (
        <View style={style.box1}>
            <View style={style.parentHeader}>
                <View style={style.leftDiv}>
                    <TouchableOpacity style={{width:'30%'}} onPress={ResetInfoHandler}>
                    <RText style={{fontFamily: 'Roboto-Medium'}} >cancel</RText>
                    </TouchableOpacity>
                </View>
                <View style={style.rightDiv}>
                    <TouchableOpacity onPress={UpdatePasswordHandler}>
                    <RText style={{fontFamily: 'Roboto-Medium', color:'#950740'}} >save</RText>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.Form}>
                <View style={style.TextDiv}>
                    <RText style={style.Item1Text}>Current Password</RText>
                </View>
                <View style={style.Item1}>
                    <TextInput secureTextEntry onChangeText={(e)=>UpdatePersonalInfo('password', e)} value={PersonalInfo.password} placeholder="Current Password" style={style.textField} />
                </View>
                <View style={style.TextDiv}>
                    <RText style={style.Item1Text}>New Password</RText>
                </View>
                <View style={style.Item1}>
                    <TextInput secureTextEntry onChangeText={(e)=>UpdatePersonalInfo('npassword', e)} value={PersonalInfo.npassword} placeholder="New Password" style={style.textField} />
                </View>
                <View style={style.TextDiv}>
                    <RText style={style.Item1Text}>Confirm Password</RText>
                </View>
                <View style={style.Item1}>
                    <TextInput secureTextEntry onChangeText={(e)=>UpdatePersonalInfo('cpassword', e)} value={PersonalInfo.cpasword} placeholder="Confirm Password" style={style.textField} />
                </View>
            </View>
        </View>
    )
}

export default RootComponent(ManagePassword, false)

const style = StyleSheet.create({
    box1: {
        flex: 1,
        backgroundColor: '#fff'
    },
    parentHeader: {
        paddingVertical: 25,
        paddingHorizontal: 20,
        flexDirection: 'row',
        // backgroundColor: 'pink',
    },
    leftDiv: {
        width: '50%',
        // backgroundColor: 'green',
    },
    rightDiv: {
        width: '50%',
        // backgroundColor: 'lime',
        alignItems: 'flex-end'
    },
    AvatarDiv: {
        alignItems:'center',
        // backgroundColor: 'tomato',
        paddingTop: 20,
    },
    Avatar: {
        position: 'relative',
        width: 86,
        height: 86,
        zIndex: 1,
    },
    rightDivCam: {
        position: 'absolute',
        top: 97,
        // backgroundColor: 'brown',
        width: '60%',
        alignItems: 'flex-end',
    },
    CameraIcon:{
        width: 16,
        height: 14,
        zIndex: 2,
    },
    Form: {
        // backgroundColor: 'lime',
        marginTop: 130
    },
    Item1: {
        alignItems: 'center'
    },
    Item1Text: {
        // backgroundColor: 'yellow',
        width: '85%',
        fontFamily: 'Roboto-Bold',
        fontSize: 13,
    },
    textField: {
        marginBottom:20,
        marginTop: 3,
        // backgroundColor: 'red',
        width: '85%',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    TextDiv: {
        // backgroundColor: 'pink',
        alignItems: 'center'
    }
})