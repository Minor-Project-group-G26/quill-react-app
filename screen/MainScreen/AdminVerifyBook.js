import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import RootComponent from '../RootComponent';
import HText from '../../components/common/HText';
import RText from '../../components/common/RText';


function AdminVerifyBook() {

    const userData = [
        'Aniket',
        'Gourav',
        'Ankur',
        'Aniket',
        'Gourav',
        'Ankur',
        'Aniket',
        'Gourav',
        'Ankur',
        'Aniket',
        'Gourav',
        'Ankur',
        'Aniket',
        'Gourav',
        'Ankur',
        'Aniket',
        'Gourav',
        'Illuminati',
        
    ]

    
    const renderUser = userData.map((item, index) => (
        <View key={index} style={[style.rectangle, index %2 != 0?style.color2:{}]}>
            <View style={style.leftBox}>
                <RText style={{fontFamily:'Roboto-Bold', color:'#fff', fontSize:15}}>{item}</RText>
            </View>
            <View style={style.rightBox}>
                <TouchableOpacity style={style.Tick}>
                    <Image style={{height:17,width:17}} source={require('../../assets/icons/tick.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={style.Close}>
                    <Image style={{height:17,width:17}} source={require('../../assets/icons/Cross.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={style.Delete}>
                    <Image style={{height:17,width:17}} source={require('../../assets/icons/Block.png')} />
                </TouchableOpacity>   
            </View>
        </View>
    ))
    return (
        <View style={style.box1}>
            <View style={style.header}>
                <RText style={{fontFamily:'Roboto-Bold', fontSize:18}}>Books</RText>
            </View>
            
            <View style={style.table}>
                <ScrollView>
                    {renderUser}
                </ScrollView>
            </View>
            
        </View>
    )
}

export default RootComponent(AdminVerifyBook, false)

const style = StyleSheet.create({
    box1: {
        backgroundColor:'#C4C4C4',
        flex: 1
    },
    header: {
        marginVertical:25,
        marginHorizontal:30
    },
    table:{
        flex:1,
        marginHorizontal:30,
        // backgroundColor:'red',
        marginBottom:40
    },
    rectangle:{
        flexDirection:'row',
        padding:10,
        backgroundColor:'#4E4E50'
    },
    leftBox:{
        width: '60%',
        paddingRight:10,
        // backgroundColor:'lime'
    },
    rightBox:{
        flexDirection:'row',
        width: '40%',
        // backgroundColor:'yellow'
    },
    Tick:{
        // backgroundColor:'blue',
        marginRight:30.5,
        justifyContent:'center'
    },
    Delete: {
        // backgroundColor:'orange',
        justifyContent:'center'
    },
    Close: {
        // backgroundColor:'gray',
        marginRight:30.5,
        justifyContent:'center'
    },
    color1:{
        backgroundColor:'#4E4E50'
    },
    color2:{
        backgroundColor:'#017DC2'
    }
})