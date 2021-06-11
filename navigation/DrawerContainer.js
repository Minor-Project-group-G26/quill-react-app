import React from 'react'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Avatar, Drawer } from 'react-native-paper'
import RText from '../components/common/RText'


const DrawerOptionList = [
    {
     name: 'Courses',
     icon: require('../assets/icons/Courses.png'),
     style:{width: 22, height:15}, 
     route: 'Courses'
    },
    {
     name: 'My Courses',
     icon: require('../assets/icons/MyCourses.png'),
     style: {width: 19, height:22},
     route: 'MyCourse'
    },
    {
     name: 'Books',
     icon: require('../assets/icons/Books.png'),
     style: {width: 23, height:19},
     route: 'Books'
    },
    {
     name: 'Downloads',
     icon: require('../assets/icons/Downloads.png'),
     style: {width: 14, height:16},
     route:'Downloads'
    },
    {
     name: 'About Us',
     icon: require('../assets/icons/AboutUs.png'),
     style: {width: 16, height:16},
     route:'AboutUs'
    },
    {
     name: 'Wishlist',
     icon: require('../assets/icons/Wishlist.png'),
     style: {width: 16, height:16},
     route: 'Wishlish'
    },

]


function DrawerContainer(props) {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#CACACA'}}>
            <DrawerContentScrollView {...props} >
                <View style={{paddingHorizontal:20}}>
                    <View style={styles.top}>
                        <View><Image source={require('../assets/icons/arrow-back.png')} style={{width: 25, height:20}} /></View>
                        <View><Image source={require('../assets/icons/Setting.png')} style={{width: 21, height:20}} /></View>
                    </View>
                    <View style={{alignSelf:'center', justifyContent:'center',marginVertical:8, marginTop:16
                }}>
                        <Avatar.Image size={74} style={{marginLeft: 16, elevation:15}} source={require('../assets/images/userSample.jpeg')}/>
                       <View style={{marginVertical: 10}}>
                            <RText style={{fontFamily:'Roboto', textAlign:'center'}}>Hello!</RText>
                            <RText style={{fontFamily:'Roboto-Bold',fontSize: 18}}>Gourav Singh</RText>
                       </View>
                    </View>
                    <View style={{margin:8, flexDirection:'row', justifyContent:'space-between'}}>
                        <View style={{alignItems:'center'}}>
                            <RText style={{fontFamily:'Roboto-Medium', fontSize:12}}>10</RText>
                            <RText style={{fontFamily:'Roboto-Light', fontSize:12, color:'#717171'}}>Ongoing</RText>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <RText style={{fontFamily:'Roboto-Medium', fontSize:12}}>10</RText>
                            <RText style={{fontFamily:'Roboto-Light', fontSize:12, color:'#717171'}}>Completed</RText>
                        </View>
                    </View>
                </View>
                <View style={{height:1, backgroundColor:'#B2B2B2', marginBottom: 16}}></View>
        
                    {DrawerOptionList.map((item, index)=>(
                        <View key={index} style={{borderTopWidth:0, borderColor: '#B2B2B2', backgroundColor: index === 0?'#C3073F': "transperent", paddingVertical:16, flexDirection:'row', alignItems:'center'}}>
                            <View style={{marginHorizontal:32, width:25}}>
                                <Image source={item.icon} style={item.style} />
                            </View>
                            <RText style={{color: index === 0?'#fff':'#000'}}>{item.name}</RText>
                        </View>
                    ))}

            </DrawerContentScrollView>
            <View style={{height:1, backgroundColor:'#B2B2B2'}}></View>
            <View style={styles.bottom}>
                <View style={{width:25, marginHorizontal:32}}><Image source={require('../assets/icons/LogOut.png')} style={{width:16, height:16}} /></View>
                <RText style={{fontFamily:'Roboto-Medium'}}>Logout</RText>
            </View>
        </SafeAreaView>
    )
}

export default DrawerContainer


const styles = StyleSheet.create({
    bottom:{
        width:'100%',
        marginTop: 25,
        marginBottom:30,        
        flexDirection:"row",
        alignItems:'center'
    },
    top:{
        marginTop:16,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})