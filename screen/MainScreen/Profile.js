import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import RootComponent from '../RootComponent';
import RText from '../../components/common/RText';
import AText from '../../components/common/AText';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../../utils/config';
import { ClearToken } from '../../store/AuthSlice';


function Profile({navigation}) {

    const [Invisible, setInvisible] = useState(-1)
    const {user, auth} = useSelector(state => state)
    const UserDetail = auth.user
    const [ThemeColor, setThemeColor] = useState({
        backgroundColor:'#C3073F',
        textColor: '#000',
        crateColor:'#4E4E50',
        lol:'Hi'
    })
    const dispatch = useDispatch()

    useEffect(() => {
        if(user.instructorMode){
            setThemeColor({
                ...ThemeColor,
                backgroundColor: '#1A1A1D',
                textColor: '#fff',
                crateColor:'#C3073F',
                lol:'Instructor'
            })
        }
        else{
            setThemeColor({
                ...ThemeColor,
                backgroundColor: '#C3073F',
                textColor: '#000',
                crateColor: '#4E4E50',
                lol:'Hi'
            })
        }
        
    },[user])

    const options = [
        {
            name:"Personal Setting",
            onPress: () => navigation.navigate('PersonalSetting', {user: UserDetail})
        },
        {
            name:"Manage Password",
            onPress: () => navigation.navigate('ManagePassword')
        },
        {
            name:"My Courses",
            onPress: ()=> navigation.navigate('MyCourses')
        },
        {
            name:"My Library",
            onPress: ()=>navigation.navigate('MyLibrary')
        },
        {
            name:"Notification",
            onPress: ()=>navigation.navigate('Notification')
        },
        {
            name:"Achievements",
            onPress: null
        },
        {
            name:"Downloads",
            onPress: null
        },
        {
            name:"Wishlist",
            onPress: ()=>navigation.navigate('Wishlist')
        },
        {
            name:"About Us",
            onPress: () => navigation.navigate('AdminVerifyCourse')
        },
        {
            name:"Apply for Instructor",
            onPress: () => navigation.navigate('AdminVerifyUser')
        },
        {
            name:"Log out",
            onPress:()=>dispatch(ClearToken())
        },
    ]

    const [swapColor, setswapColor] = useState(-1)

    const ChangeColor = (index) => {
        setswapColor(index)
        setInvisible(index)
        setTimeout(function(){
            setInvisible(-1) 
        }, 2000);
    }

    const ShowAlertWithDelay = ()=>{

    }


    const renderOptions = options.map((item, index) => (
        <TouchableOpacity 
            onPress={() => {
                ChangeColor(index)
                item.onPress()
            }}
            key={index} 
            style={[style.crate, (swapColor === index)&& (Invisible === index)? {backgroundColor:ThemeColor.crateColor}: {}]}
        >
            <RText style={style.crateText}>{item.name}</RText>
        </TouchableOpacity>
    ))

    return (
        <View style={{...style.box1, backgroundColor:ThemeColor.backgroundColor}}>
            <ScrollView>
                <View style={style.header}>
                    <View style={style.headerLeft}>
                        <Image style={style.Avatar} source={UserDetail.profile==null?require('../../assets/images/userSample.jpeg'):{uri: baseUrl+'file/img/user/'+auth.user.profile }} />
                    </View>
                    <View style={style.headerRight}>
                        <AText style={{...style.headerText, color:ThemeColor.textColor}}>{ThemeColor.lol}, {UserDetail.name}</AText>
                    </View>
                </View>
                <View style={style.line}></View>
                <View style={style.box2}>
                    {renderOptions}
                </View>
            </ScrollView>
        </View>
    )
}

export default RootComponent(Profile, false)

const style = StyleSheet.create({
    box1: {
        flex: 1,
        backgroundColor: '#C3073F'
    },
    Avatar: {
        width: 65,
        height: 65,
        borderRadius: 65/2
    },
    header: {
        // backgroundColor: '#fff',
        marginVertical: 10,
        height: 90,
        flexDirection: 'row',
    },
    headerText: {
        fontFamily: 'Arial-Bold-Italic',
        fontSize: 19,
    },
    headerLeft: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '30%',
        // backgroundColor: 'green',
    },
    headerRight: {

        width: '70%',
        // backgroundColor: 'pink',
        justifyContent: 'center',
        paddingHorizontal: 25
    },
    box2: {
        marginTop: 12,
    },
    crate: {
        // backgroundColor: 'yellow',
        paddingVertical: 13,
        paddingLeft: 40,
    },
    crateText: {
        fontFamily: 'Roboto-Medium',
        color: '#fff'
    },
    line: {
        height: 0.4,
        backgroundColor: '#B2B2B2'
    }
})
