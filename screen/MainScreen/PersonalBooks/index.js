import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import PersonalCard from './PersonalCard';

const DATA1 = [
{ id: '1', title: 'Superman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
    { id: '2', title: 'Amazing SpiderMan', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
    { id: '3', title: 'Hulk', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
    
{ id: '4', title: 'Spiderman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
    { id: '5', title: 'Hulk', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
    { id: '6', title: 'Superman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
    
{ id: '7', title: 'Superman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
    { id: '8', title: 'Amazing SpiderMan', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
    { id: '9', title: 'Hulk', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
    
{ id: '10', title: 'Superman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
    { id: '11', title: 'Amazing SpiderMan', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
    { id: '12', title: 'Hulk', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
    
  ];
  

export default function PersonalBooks(props) {
    return (
        <View>
            <PersonalCard data={DATA1}/>
            {/* <Text>Hello WOrld</Text> */}
        </View>
    )
}

