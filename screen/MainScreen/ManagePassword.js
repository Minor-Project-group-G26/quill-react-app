import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import RootComponent from '../RootComponent';
import HText from '../../components/common/HText';
import RText from '../../components/common/RText';
import { TextInput } from 'react-native-gesture-handler';


function ManagePassword() {

    const [PersonalInfo, setPersonalInfo] = useState({
        username: 'John Doe',
        occupation: 'Add Your Occupation',
        dob:'31-09-1998',
        phone: '902323598'
    })

    const UpdatePersonalInfo = () => {
        console.log('Ok');
        setPersonalInfo.username
    }
    return (
        <View style={style.box1}>
            <View style={style.parentHeader}>
                <View style={style.leftDiv}>
                    <TouchableOpacity activeOpacity={1} style={{width:'30%'}}>
                    <RText style={{fontFamily: 'Roboto-Medium'}}>cancel</RText>
                    </TouchableOpacity>
                </View>
                <View style={style.rightDiv}>
                    <TouchableOpacity activeOpacity={1}>
                    <RText style={{fontFamily: 'Roboto-Medium', color:'#950740'}}>save</RText>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.Form}>
                <View style={style.TextDiv}>
                    <RText style={style.Item1Text}>Current Password</RText>
                </View>
                <View style={style.Item1}>
                    <TextInput value={PersonalInfo.username} onChangeText={UpdatePersonalInfo} placeholder="type..." style={style.textField} />
                </View>
                <View style={style.TextDiv}>
                    <RText style={style.Item1Text}>New Password</RText>
                </View>
                <View style={style.Item1}>
                    <TextInput value={PersonalInfo.occupation} placeholder="type..." style={style.textField} />
                </View>
                <View style={style.TextDiv}>
                    <RText style={style.Item1Text}>Confirm Password</RText>
                </View>
                <View style={style.Item1}>
                    <TextInput value={PersonalInfo.dob} placeholder="type..." style={style.textField} />
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