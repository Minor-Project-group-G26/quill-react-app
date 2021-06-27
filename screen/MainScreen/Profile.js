import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import RootComponent from '../RootComponent';
import RText from '../../components/common/RText';
import AText from '../../components/common/AText';



function Profile({navigation}) {

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
            onPress: ()=> navigation.navigate('MyCourses')
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

    const [swapColor, setswapColor] = useState(-1)

    const ChangeColor = (index) => {
        setswapColor(index)
    }

    const renderOptions = options.map((item, index) => (
        <TouchableOpacity 
            onPress={() => {
                ChangeColor(index)
                item.onPress()
            }}
            key={index} 
            style={[style.crate, swapColor === index? style.swap: {}]}
        >
            <RText style={style.crateText}>{item.name}</RText>
        </TouchableOpacity>
    ))

    return (
        <View style={style.box1}>
            <ScrollView>
                <View style={style.header}>
                    <View style={style.headerLeft}>
                        <Image style={style.Avatar} source={require('../../assets/icons/instructor_img.png')} />
                    </View>
                    <View style={style.headerRight}>
                        <AText style={style.headerText}>Hi, John Doe</AText>
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
        fontSize: 19
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
        paddingLeft: 25
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
    swap: {
        backgroundColor: '#4E4E50'
    },
    line: {
        height: 0.4,
        backgroundColor: '#B2B2B2'
    }
})
