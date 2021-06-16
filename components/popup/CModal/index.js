import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import Animated from 'react-native-reanimated'
import AText from '../../common/AText'
import RText from '../../common/RText'


const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

function CModal({ConfirmHandler, CancelHandler, text, Visible, ChangeVisible}) {

    return (
        <Modal
        transparent={true}
        visible={Visible}
        style={{flex: 1}}
        >
            <TouchableOpacity style={styles.fullcontainer} onPress={ChangeVisible}>
                    <TouchableOpacity activeOpacity={1} onPress={()=>{}} style={styles.container}>
                        <View style={{justifyContent:'center', alignItems:'center', overflow:'hidden', flex:1}}>
                            <AText style={{...styles.text,backgroundColor:'transparent', flex:1, textAlignVertical:'center'}}>{text}</AText>
                        </View>
                        <View style={{ width:'100%',justifyContent:'center', alignItems:'center',flexDirection:'row'}}>
                            <AText onPress={()=>{
                                ConfirmHandler();
                                ChangeVisible();
                                }} style={{...styles.text, backgroundColor:'#4E4E50'}}>Yes</AText>
                            <AText onPress={()=>{
                                CancelHandler()
                                ChangeVisible()
                                }} style={styles.text}>No</AText>
                        </View>
                    </TouchableOpacity>

            </TouchableOpacity>
        </Modal>
    )
}

export default CModal


const styles = StyleSheet.create({
    fullcontainer:{
        flex: 1, 
        backgroundColor:'rgba(255,255,255,0.7)',
        // opacity: 0.7,
        justifyContent:'center', 
        alignItems:'center'
    },
    container:{
        backgroundColor:'#92073f', 
        width:WIDTH*0.75, 
        minHeight: HEIGHT*0.2,
        maxHeight: HEIGHT*0.75 
    },
    text:{
        flexBasis:'50%', 
        textAlign:'center',
        paddingVertical:16, 
        color:'#fff', 
        fontFamily:'Arial-Bold',
        backgroundColor:'#B2B2B2'

    }

})