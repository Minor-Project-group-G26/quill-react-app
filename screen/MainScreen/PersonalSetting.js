import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import RootComponent from '../RootComponent';
import HText from '../../components/common/HText';
import RText from '../../components/common/RText';
import { TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker'
import { PickSingleImage } from '../../utils/ImagePick';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUser, UpdateUserProfile } from '../../store/AuthSlice';
import { baseUrl } from '../../utils/config';

function PersonalSetting(props) {
    const UserDetails = useSelector(state=>state.auth.user)
    const [PersonalInfo, setPersonalInfo] = useState({
        name: UserDetails.name,
        occupation: UserDetails.occupation,
        dob: UserDetails.dob,
        phone: UserDetails.phone
    })
    const [Refresh, setRefresh] = useState(0)
    const dispatch = useDispatch();
    const UpdatePersonalInfo = (option, text) => {
        console.log('Ok');
        console.log(PersonalInfo)
        switch (option) {
            case "occupation":
                setPersonalInfo({
                    ...PersonalInfo,
                    occupation:text
                });
                break;
        
            case "name":
                setPersonalInfo({
                    ...PersonalInfo,
                    name:text
                });
                break;
        
            case "phone":
                setPersonalInfo({
                    ...PersonalInfo,
                    phone:text
                });
                break;
        
            case "dob":
                setPersonalInfo({
                    ...PersonalInfo,
                    dob:text
                });
                break;
        
            default:
                break;
        }
    }

    const ResetPersonalInfoHandler = () =>{
       setRefresh(Refresh+1)
    }
    useEffect(() => {
        console.log("UserDetails",UserDetails)
        setPersonalInfo({
            ...PersonalInfo,
            name: UserDetails.name,
            occupation: UserDetails.occupation,
            dob: UserDetails.dob,
            phone: UserDetails.phone
        })
    },[Refresh])

    const ProfileInfoUpdateHandler = async()=>{
        console.log(PersonalInfo.dob.split('-').length)
        if(PersonalInfo.name.trim() === "") return console.log("Please Check Name");
        if(PersonalInfo.phone.length !== 10) return console.log("Please Check Phone");
        if(PersonalInfo.occupation.trim() === "") return console.log("Please Check Occupation");
        if(PersonalInfo.dob.split('-').length !== 3 ) return console.log("Please Check Date of Birth");
        dispatch(UpdateUser(PersonalInfo));
        // console.log("UserInfo", UserDetails)
        
    }

    const pickImage = async () => {
        let result = await PickSingleImage()
        console.log(result);
        if(result===null)
        return console.log("Fail to get Image")
        let localUri = result.uri;
        let filename = localUri.split('/').pop();
        console.log("local",localUri)
        console.log("file",filename)
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        let formData = new FormData();
        formData.append('image', { uri: localUri, name: filename, type });
        dispatch(UpdateUserProfile(formData))
        ResetPersonalInfoHandler();
    }


    return (
        <View style={style.box1}>
            <View style={style.parentHeader}>
                <View style={style.leftDiv}>
                    <TouchableOpacity activeOpacity={1} style={{width:'30%'}}>
                    <RText style={{fontFamily: 'Roboto-Medium'}} onPress={ResetPersonalInfoHandler}>cancel</RText>
                    </TouchableOpacity>
                </View>
                <View style={style.rightDiv}>
                    <TouchableOpacity activeOpacity={1}>
                    <RText style={{fontFamily: 'Roboto-Medium', color:'#950740'}} onPress={UpdateUserProfile}>save</RText>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.AvatarDiv}>
                <Image style={style.Avatar} source={UserDetails.profile==null?require('../../assets/images/userSample.jpeg'):{uri: baseUrl+'file/img/user/'+UserDetails.profile }} />                
            </View>
            <TouchableOpacity onPress={pickImage} style={style.rightDivCam}>
                <Image style={style.CameraIcon} source={require('../../assets/icons/camera_icon.png')} />
            </TouchableOpacity>
            <View style={style.Form}>
                <View style={style.TextDiv}>
                    <RText style={style.Item1Text}>Name</RText>
                </View>
                <View style={style.Item1}>
                    <TextInput value={PersonalInfo.name} onChangeText={(e)=>UpdatePersonalInfo('name', e)} placeholder="type..." style={style.textField} />
                </View>
                <View style={style.TextDiv}>
                    <RText style={style.Item1Text}>Occupation / Profession</RText>
                </View>
                <View style={style.Item1}>
                    <TextInput value={PersonalInfo.occupation} onChangeText={(e)=>UpdatePersonalInfo('occupation', e)} placeholder="type..." style={style.textField} />
                </View>
                <View style={style.TextDiv}>
                    <RText style={style.Item1Text}>Date of Birth (dd-mm-yyyy)</RText>
                </View>
                <View style={style.Item1}>
                    <TextInput value={PersonalInfo.dob} onChangeText={(e)=>UpdatePersonalInfo('dob', e)} placeholder="type..." style={style.textField} />
                </View>
                <View style={style.TextDiv}>
                    <RText style={style.Item1Text}>Phone</RText>
                </View>
                <View style={style.Item1}>
                    <TextInput value={PersonalInfo.phone} onChangeText={(e)=>UpdatePersonalInfo('phone', e)} placeholder="type..." style={style.textField} />
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
    AvatarDiv: {
        alignItems:'center',
        // backgroundColor: 'tomato',
        paddingTop: 20,
    },
    Avatar: {
        position: 'relative',
        width: 86,
        height: 86,
        borderRadius: 86/2,
    },
    rightDivCam: {
        position: 'absolute',
        top: 97,
        // backgroundColor: 'brown',
        width: '60%',
        zIndex:10,
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