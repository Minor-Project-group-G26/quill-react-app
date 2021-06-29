import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import RootComponent from '../RootComponent';
import RText from '../../components/common/RText';
import AText from '../../components/common/AText';
import { useSelector } from 'react-redux';


function Profile({navigation}) {

    const [Invisible, setInvisible] = useState(-1)
    const user = useSelector(state => state.user)
    const [ThemeColor, setThemeColor] = useState({
        backgroundColor:'#C3073F',
        textColor: '#000',
        crateColor:'#4E4E50',
        lol:'Hi'
    })

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
            onPress: () => navigation.navigate('PersonalSetting')
        },
        {
            name:"Manage Password",
            onPress: null
        },
        {
            name:"My Courses",
            onPress: null
        },
        {
            name:"My Library",
            onPress: null
        },
        {
            name:"Notification",
            onPress: null
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
            onPress: null
        },
        {
            name:"About Us",
            onPress: null
        },
        {
            name:"Log out",
            onPress: null
        },
    ]

    ShowAlertWithDelay=()=>{
        
    }

    const [swapColor, setswapColor] = useState(-1)

    const ChangeColor = (index) => {
        setswapColor(index)
        setInvisible(index)
        setTimeout(function(){
            setInvisible(-1) 
        }, 2000);
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
                        <Image style={style.Avatar} source={require('../../assets/icons/instructor_img.png')} />
                    </View>
                    <View style={style.headerRight}>
                        <AText style={{...style.headerText, color:ThemeColor.textColor}}>{ThemeColor.lol}, John Doe</AText>
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
        height: 65
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
