import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import RootComponent from '../RootComponent';
import HText from '../../components/common/HText';
import RText from '../../components/common/RText';
import Icon from 'react-native-vector-icons/FontAwesome';

const h = Dimensions.get('window').height
const w = Dimensions.get('window').width

function CourseHomePage() {
    return (
        <View style={{flex:1}}>
            <View style={style.header}>
                <View style={style.headerSetting}>
                    <View style={style.headerContent}>
                        <View style={style.AvatarDiv}>
                            <Image style={style.Avatar} source={require('../../assets/icons/instructor_img.png')} />
                        </View>
                        <View style={{ width:'40%', justifyContent:'center'}}>
                            <RText style={{fontFamily: 'Roboto', color:'#fff', fontSize:14 }}>Robert Dw Junior</RText>
                        </View>
                        <View style={{marginLeft:10, justifyContent: 'center', width:'30%', alignItems:'flex-end'}}>
                            <RText style={{color: '#fff',fontFamily: 'Roboto',fontSize:14}}>Rating: 4.5</RText>
                        </View>
                        <View style={{justifyContent:'center', paddingLeft:2}}>
                        <Image style={{width:14, height:14,}} source={require('../../assets/icons/rating_star.png')} />
                        </View>
                    </View>                    
                </View>
            </View>
            <View style={style.box2}>
                <ScrollView>
                    <View>
                        <View style={style.Descrp}>
                            <RText style={{fontFamily:'Roboto-Medium-Italic'}}>Description:</RText>
                        </View>
                        <View style={style.DescrpText}>
                            <RText style={{fontFamily: 'Roboto',fontSize:14}}>
                                ENGL 309. Verse Writing (3-3)
                                Intensive practice in writing poetry. Analysis and criticism of students’ work, as well as some critical study of published verse. May be repeated once for credit.

                                LING 590A-Z. Selected Topics in Linguistics/TESL (3-3)
                                Topics will change from semester to semester and be restricted in scope and aimed at gaining depth on a particular issue in Linguistics/TESL. Critical writing and reading required. Up to two different courses in the series may be taken for credit.

                                ART 519A-Z. Selected Topics in Art History (3-3-3)
                                Research in depth on specific topics within art history. Topics vary per semester. May be taken three times for credit.</RText>
                        </View>
                        <View style={style.Rupee}>
                            <RText style={{fontFamily: 'Roboto',fontSize:20}}>₹ 378</RText>
                        </View>
                        <View style={{paddingHorizontal:20, paddingBottom:10}}>
                            <RText style={{fontFamily:'Roboto-Medium-Italic'}}>This course includes:</RText>
                        </View>
                        <View style={{paddingHorizontal:20}}>
                            <View style={{flexDirection:'row'}}>
                                <Icon name="circle" size={7} color="#000" style={{alignSelf:'center'}}/>
                                <RText style={{fontFamily: 'Roboto',fontSize:14, paddingLeft:5}}>
                                    11.5 hours on-demand video
                                </RText>
                            </View>

                            <View style={{flexDirection:'row'}}>
                                <Icon name="circle" size={7} color="#000" style={{alignSelf:'center'}}/>
                                <RText style={{fontFamily: 'Roboto',fontSize:14, paddingLeft:5}}>
                                    17 articles
                                </RText>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Icon name="circle" size={7} color="#000" style={{alignSelf:'center'}}/>
                                <RText style={{fontFamily: 'Roboto',fontSize:14, paddingLeft:5}}>
                                    10 downloadable resources
                                </RText>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Icon name="circle" size={7} color="#000" style={{alignSelf:'center'}}/>    
                                <RText style={{fontFamily: 'Roboto',fontSize:14, paddingLeft:5}}>
                                    Full Lifetime access
                                </RText>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Icon name="circle" size={7} color="#000" style={{alignSelf:'center'}}/>
                                <RText style={{fontFamily: 'Roboto',fontSize:14, paddingLeft:5}}>
                                    Access on mobile and TV
                                </RText>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Icon name="circle" size={7} color="#000" style={{alignSelf:'center'}}/>
                                <RText style={{fontFamily: 'Roboto',fontSize:14, paddingLeft:5}}>
                                    Assignments
                                </RText>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <Icon name="circle" size={7} color="#000" style={{alignSelf:'center'}}/>
                                <RText style={{fontFamily: 'Roboto',fontSize:14, paddingLeft:5}}>
                                    Certificate of completion
                                </RText>
                            </View>                            
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={style.Bottom}>
                    <View style={style.BottomComponent}>
                        <View style={{ width:'30%', justifyContent:'center', alignItems:'center', paddingRight:20}}>
                            <RText style={{fontFamily:'Roboto-Medium', fontSize:20}}>₹ 378</RText>
                        </View>
                        <View style={style.BuyNowDiv}>
                            <RText style={{fontFamily:'Roboto-Medium', fontSize:20, color:'#fff'}}>Buy Now</RText>
                        </View>
                    </View>
            </View>
        </View>
        
    )
}

export default RootComponent(CourseHomePage, true)

const style = StyleSheet.create({
    header: {
        // backgroundColor: 'blue',
        paddingVertical: 20,
        alignItems: 'center'
    },
    headerContent: {
        flexDirection: 'row'
    },
    AvatarDiv:{
        // backgroundColor:'yellow',
        width: '20%',
        justifyContent:'center',
        alignItems: 'flex-end',
        paddingRight:10
    },
    Avatar: {
        width: 40,
        height: 40
    },
    headerSetting: {
        // backgroundColor: 'brown',
        width: '85%'
    },
    box2:{
        flex:1,
        backgroundColor: '#C4C4C4',
        borderTopLeftRadius:20,
        borderTopRightRadius: 20
    },
    Descrp: {
        marginVertical:20,
        marginLeft:20,
        // backgroundColor: 'orange'
    },
    DescrpText: {
        marginHorizontal:20
    },
    Rupee: {
        marginVertical: 20,
        marginHorizontal:20
    },
    Bottom: {
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        height: 60,
        paddingVertical:15,
        elevation:30,
        // position: 'absolute',
        // bottom: 0,
        backgroundColor:'#fff',
    },
    BottomComponent: {
        width: '85%',
        flexDirection:'row',
        // backgroundColor:'gray'
    },
    BuyNowDiv: {
        borderRadius:8,
        paddingVertical:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#950740',
        width: '70%'
    }
})
