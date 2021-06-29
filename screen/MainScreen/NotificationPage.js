import React from 'react'
import {View, TouchableOpacity, Button, StyleSheet, ScrollView} from 'react-native'
import HText from '../../components/common/HText';
import RText from '../../components/common/RText';

const Notify = [
    {
        notice: 'You have Successfully Created Account. Best Wishes from Team QUILL',
        date: '20-06-2021',
        option: 'Delete'
    },
    {
        notice: 'You have successfully Enrolled in HTML Beginners. Good Luck.',
        date: '20-06-2021',
        option: 'Delete'
    },
    {
        notice: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '20-06-2021',
        option: 'Delete'
    },
    {
        notice: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '20-06-2021',
        option: 'Delete'
    },
    {
        notice: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '20-06-2021',
        option: 'Delete'
    }
] 

function NotificationPage(){
    const notification = Notify.map((item,index)=>{
        return(
            <View key={index} style={style.container}>
                <View style ={{flexDirection: 'row',marginTop:16,  marginLeft: 33,marginRight: 27, justifyContent:'space-between'}}>
                    <RText> {item.date} </RText>
                    <TouchableOpacity activeOpacity={1}>
                <HText style={style.buttonText}> {item.option} </HText>
            </TouchableOpacity>
                </View>
                <View style={style.text1}>
                    <RText style={style.text2}>
                        {item.notice}
                    </RText>
                </View>
            </View>
        )
    })

    return (
        <ScrollView style={{flex:1}}>
        <View style={style.box1}>
            <TouchableOpacity activeOpacity={1} style={style.buttonBox}>
                <HText style={style.buttonText}>Clear All</HText>
            </TouchableOpacity>
            <View>
                <View style={{paddingVertical: 15}}></View>
                {notification}
                <View style={{paddingVertical: 15}}></View>
            </View>
        </View>
        </ScrollView>
    )
}

export default NotificationPage;

const style = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical: 16,
    },
    box1:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center'
    },
    buttonBox: {
        flexDirection: 'row-reverse',
        alignItems:'flex-end',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: -35,
        marginRight: 278,
        width: '23%',
        height: '2%',
        backgroundColor: "#C4C4C4",
    },
    buttonText: {
        marginLeft: 3,
        marginBottom: 5,
        fontSize: 14,
        color: '#1A1A1D',
        fontFamily: 'Humnst777',
    },
    text1: {
            flex: 1,
            backgroundColor: '#C3073F',
            alignItems: 'center', 
            marginLeft: 25,
            marginRight: 27,
    },
    text2: {
        fontSize: 16,
        marginLeft: 28,
        marginRight: 34,
        marginTop: 10,
        marginBottom: 10,
    }
});