import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import RootComponent from '../RootComponent';
import HText from '../../components/common/HText';
import RText from '../../components/common/RText';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

function AddCourse() {


    const [isSelected1, setSelection1] = useState(true)
    const [isSelected2, setSelection2] = useState(true)
    const [isSelected3, setSelection3] = useState(true)
    const [isSelected4, setSelection4] = useState(true)
    const [isSelected5, setSelection5] = useState(true)
    const [isSelected6, setSelection6] = useState(true)
    const [isSelected7, setSelection7] = useState(true)
    const [isSelected8, setSelection8] = useState(true)

    return (
        <View style={style.box1}>
            <View style={style.modal1}>
                <ScrollView>
                    <View>
                        <RText style={{fontFamily:'Roboto-Bold'}}>Title</RText>
                    </View>
                    <View>
                        <TextInput placeholder="type..." style={style.textField} />
                    </View>
                    <View style={{marginTop:15}}>
                        <RText style={{fontFamily:'Roboto-Bold'}}>Description</RText>
                    </View>
                    <View style={style.DescBox}>
                        <TextInput multiline={true} placeholder="type..." style={style.descInput} />
                    </View>
                    <View style={{marginTop:15}}>
                        <RText style={{fontFamily:'Roboto-Bold'}}>Category</RText>
                    </View>

                    <View style={style.CategoryDiv}>
                        <View style={style.CatLeft}>
                            <View style={style.Tick}>
                                <CheckBox 
                                    disabled={false}
                                    value={!isSelected1}
                                    onChange={()=>setSelection1(!isSelected1)}
                                    tintColors={{ true: '#950740', false: 'black' }}
                                />
                            </View>
                            <View style={style.Cat}>
                                <RText style={{fontFamily:'Roboto'}}>Designing</RText>
                            </View>
                        </View>
                        <View style={style.CatRight}>
                            <View style={style.Tick}>
                                <CheckBox 
                                    disabled={false}
                                    value={!isSelected2}
                                    onChange={()=>setSelection2(!isSelected2)}
                                    tintColors={{ true: '#950740', false: 'black' }}
                                />
                            </View>
                            <View style={style.Cat}>
                                <RText style={{fontFamily:'Roboto'}}>Information Technology</RText>
                            </View>
                        </View>
                    </View>
                    <View style={style.CategoryDiv}>
                        <View style={style.CatLeft}>
                            <View style={style.Tick}>
                                <CheckBox 
                                    disabled={false}
                                    value={!isSelected3}
                                    onChange={()=>setSelection3(!isSelected3)}
                                    tintColors={{ true: '#950740', false: 'black' }}
                                />
                            </View>
                            <View style={style.Cat}>
                                <RText style={{fontFamily:'Roboto'}}>Data Science</RText>
                            </View>
                        </View>
                        <View style={style.CatRight}>
                            <View style={style.Tick}>
                                <CheckBox 
                                    disabled={false}
                                    value={!isSelected4}
                                    onChange={()=>setSelection4(!isSelected4)}
                                    tintColors={{ true: '#950740', false: 'black' }}
                                />
                            </View>
                            <View style={style.Cat}>
                                <RText style={{fontFamily:'Roboto'}}>Personal Development</RText>
                            </View>
                        </View>
                    </View>
                    <View style={style.CategoryDiv}>
                        <View style={style.CatLeft}>
                            <View style={style.Tick}>
                                <CheckBox 
                                    disabled={false}
                                    value={!isSelected5}
                                    onChange={()=>setSelection5(!isSelected5)}
                                    tintColors={{ true: '#950740', false: 'black' }}
                                />
                            </View>
                            <View style={style.Cat}>
                                <RText style={{fontFamily:'Roboto'}}>Maths and Logics</RText>
                            </View>
                        </View>
                        <View style={style.CatRight}>
                            <View style={style.Tick}>
                                <CheckBox 
                                    disabled={false}
                                    value={!isSelected6}
                                    onChange={()=>setSelection6(!isSelected6)}
                                    tintColors={{ true: '#950740', false: 'black' }}
                                />
                            </View>
                            <View style={style.Cat}>
                                <RText style={{fontFamily:'Roboto'}}>Programming</RText>
                            </View>
                        </View>
                    </View>
                    <View style={style.CategoryDiv}>
                        <View style={style.CatLeft}>
                            <View style={style.Tick}>
                                <CheckBox 
                                    disabled={false}
                                    value={!isSelected7}
                                    onChange={()=>setSelection7(!isSelected7)}
                                    tintColors={{ true: '#950740', false: 'black' }}
                                />
                            </View>
                            <View style={style.Cat}>
                                <RText style={{fontFamily:'Roboto'}}>Language Learning</RText>
                            </View>
                        </View>
                        <View style={style.CatRight}>
                            <View style={style.Tick}>
                                <CheckBox 
                                    disabled={false}
                                    value={!isSelected8}
                                    onChange={()=>setSelection8(!isSelected8)}
                                    tintColors={{ true: '#950740', false: 'black' }}
                                />
                            </View>
                            <View style={style.Cat}>
                                <RText style={{fontFamily:'Roboto'}}>Social Science</RText>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop:15}}>
                        <RText style={{fontFamily:'Roboto-Bold'}}>Price (in ₹)</RText>
                    </View>
                    <View>
                        <TextInput placeholder="type..." style={style.textField} />
                    </View>
                    <View style={{marginTop:15}}>
                        <RText style={{fontFamily:'Roboto-Bold'}}>Cover Image</RText>
                    </View>
                    <View style={style.uploadButton}>
                        <RText style={{fontFamily:'Roboto-Medium', color:'#fff'}}>Upload Image</RText>
                    </View>
                    <View style={{marginTop:15}}>
                        <RText style={{fontFamily:'Roboto-Bold'}}>Tags</RText>
                    </View>
                    <View>
                        <TextInput placeholder="type..." style={style.textField} />
                    </View>
                    <View style={style.Create}>
                        <RText style={{fontFamily:'Roboto-Medium', color: '#fff'}}>Create</RText>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default RootComponent(AddCourse, false)

const style = StyleSheet.create({
    box1: {
        flex:1,
        backgroundColor:'#1A1A1D',
        alignItems: 'center',
    },
    modal1: {
        backgroundColor:'#C4C4C4',
        width: '88%',
        marginVertical:35,
        paddingVertical:15,
        paddingHorizontal:20,
        flex: 1,
        
    },
    textField: {
        // marginBottom:20,
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    DescBox: {
        backgroundColor:'#fff',
        borderWidth:1,
        minHeight:90,
        maxHeight:90,
        padding:10,
        marginTop:10
    },
    CategoryDiv: {
        flexDirection:'row',
        marginTop:10,
        // backgroundColor:'yellow'
    },
    CatLeft: {
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        // backgroundColor:'pink',
        width:'50%'
    },
    CatRight: {
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        // backgroundColor:'brown',
        width:'50%'
    },
    Tick: {
        // backgroundColor:'blue',
        width:'20%',
    },
    Cat: {
        paddingHorizontal:3,
        // backgroundColor:'orange',
        width:'80%',
    },
    uploadButton: {
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        marginTop:15,
        height: 40,
        backgroundColor:'#950740'
    },
    Create: {
        marginTop:60,
        backgroundColor:'#1A1A1D',
        height: 40,
        justifyContent:'center',
        alignItems:'center'
    }
})