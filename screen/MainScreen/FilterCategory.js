import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import RootComponent from '../RootComponent';
import HText from '../../components/common/HText';
import RText from '../../components/common/RText';


const Category = [
    'Designing',
    'Data Science',
    'Personal Development',
    'Maths and Logics',
    'Information Technology',
    'Programming',
    'Language Learning',
    'Social Science',
]

function FilterCategory() {

    const [swapColor, setswapColor] = useState(-1)
    
    const ChangeStyle = (index) => {
        setswapColor(index === swapColor ? null : index)
    }

    const CategoryTemplate = Category.map((item,index) => (
    <View
        key={index}
        style={[style.capsuleBro, swapColor === index ?style.swap: {}]}
    >
        <TouchableOpacity onPress={() => ChangeStyle(index)} style={{borderRadius:50 , width: '100%', height:'100%', alignItems:'center',justifyContent:'center'}}>
            <RText onPress={() => ChangeStyle(index)} style={style.textColor}>{item}</RText>
        </TouchableOpacity>
    </View>
    ))

    return (
        <View style={style.box1}>
            <View style={style.box2}>
                <View style={{paddingVertical: 15}}></View>
                {CategoryTemplate}
                <View style={{paddingVertical: 15}}></View>
            </View>
            <View style={style.filterBox}>
                <View>
                    <Image style={style.filterIcon} source={require('../../assets/icons/cil_filter.png')} />
                </View>
                <HText style={style.filterText}>Filter</HText>
            </View>
        </View>
    )
}

export default RootComponent(FilterCategory, false)

const style = StyleSheet.create({
    box1:{
        flex: 1,
        backgroundColor:'#C3073F',
        alignItems: 'center'
    },
    box2: {
        marginTop: 50,
        backgroundColor: "#fff",
        width: '90%',
        height: '77%',
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',
    },
    capsuleBro: {
        marginVertical:5,
        width: '85%',
        height: '9%',
        backgroundColor: '#950740',
        borderRadius:50,
    },
    swap:{
        backgroundColor: '#717171', 
    },
    textColor: {
        color: '#fff',
        fontFamily: 'Roboto',
        textAlignVertical: 'center',
    },
    filterBox: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 35,
        width: '90%',
        height: '8%',
        backgroundColor: '#017DC2',
    },
    filterIcon: {
        height: 21,
        width: 23
    },
    filterText: {
        marginLeft: 5,
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Humnst777',
    }
})