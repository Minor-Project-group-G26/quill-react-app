import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import RootComponent from '../RootComponent';
import HText from '../../components/common/HText';
import RText from '../../components/common/RText';
import { TextInput } from 'react-native-gesture-handler';


function PersonalSetting(props) {
    
    const [PersonalInfo, setPersonalInfo] = useState({
        ...props.route.params.user,
        phone: '902323598'
    })

    const UpdatePersonalInfo = () => {
        console.log('Ok');
        console.log(PersonalInfo)
    }
    return (
        <View style={style.box1}>
            <View style={style.parentHeader}>
                <View style={style.leftDiv}>
                    <TouchableOpacity activeOpacity={1} style={{width:'30%'}}>
                    <RText style={style.headerText}>cancel</RText>
                    </TouchableOpacity>
                </View>
                <View style={style.rightDiv}>
                    <TouchableOpacity activeOpacity={1}>
                    <RText style={style.headerText}>save</RText>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.AvatarDiv}>
                <Image style={style.Avatar} source={require('../../assets/icons/instructor_img.png')} />                
            </View>
            <View style={style.rightDivCam}>
                <Image style={style.CameraIcon} source={require('../../assets/icons/camera_icon.png')} />
            </View>
            <View style={style.Form}>
                <View style={style.TextDiv}>
                    <RText style={style.Item1Text}>Username</RText>
                </View>
                <View style={style.Item1}>
                    <TextInput value={PersonalInfo.username} onChangeText={UpdatePersonalInfo} placeholder="type..." style={style.textField} />
                </View>
                <View style={style.TextDiv}>
                    <RText style={style.Item1Text}>Occupation / Profession</RText>
                </View>
                <View style={style.Item1}>
                    <TextInput value={PersonalInfo.occupation} placeholder="type..." style={style.textField} />
                </View>
                <View style={style.TextDiv}>
                    <RText style={style.Item1Text}>Date of Birth (dd-mm-yyyy)</RText>
                </View>
                <View style={style.Item1}>
                    <TextInput value={PersonalInfo.dob} placeholder="type..." style={style.textField} />
                </View>
                <View style={style.TextDiv}>
                    <RText style={style.Item1Text}>Phone</RText>
                </View>
                <View style={style.Item1}>
                    <TextInput value={PersonalInfo.phone} placeholder="type..." style={style.textField} />
                </View>
            </View>
        </View>
    )
}

export default RootComponent(PersonalSetting, false)

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
    headerText: {
        fontFamily: 'Roboto-Medium'
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
        marginTop: 30
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