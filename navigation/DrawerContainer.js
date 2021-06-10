import React from 'react'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Avatar, Drawer } from 'react-native-paper'
import RText from '../components/common/RText'

function DrawerContainer(props) {
    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#E5E5E5'}}>
            <DrawerContentScrollView {...props} style={{paddingHorizontal:20}}>
                <View>
                    <View style={styles.top}>
                        <View><Image source={require('../assets/icons/arrow-back.png')} style={{width: 25, height:20}} /></View>
                        <View><Image source={require('../assets/icons/Setting.png')} style={{width: 20, height:20}} /></View>
                    </View>
                    <View style={{alignSelf:'center', justifyContent:'center',marginVertical:16}}>
                        <Avatar.Image size={74} style={{marginLeft: 16}} source={require('../assets/images/userSample.jpeg')}/>
                       <View style={{marginVertical: 16}}>
                            <RText style={{fontFamily:'Roboto', textAlign:'center'}}>Hello!</RText>
                            <RText style={{fontFamily:'Roboto-Bold',fontSize: 18}}>Gourav Singh</RText>
                       </View>
                    </View>
                </View>
            </DrawerContentScrollView>
            <View style={{height:1, backgroundColor:'#B2B2B2'}}></View>
            <View style={styles.bottom}>
                <View><Image source={require('../assets/icons/LogOut.png')} style={{width:16, height:16, marginRight:16}} /></View>
                <RText style={{fontFamily:'Roboto-Medium', flex:1, textAlign:'center'}}>Logout</RText>
            </View>
        </SafeAreaView>
    )
}

export default DrawerContainer


const styles = StyleSheet.create({
    bottom:{
        width:'100%',
        marginTop: 25,
        marginBottom:60,
        // borderTopWidth: 1,
        // borderTopColor:'#B2B2B2',
        // justifyContent:'center',
        // alignItems:'center',
        flexDirection:"row",
        paddingHorizontal:20
    },
    top:{
        marginTop:16,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})