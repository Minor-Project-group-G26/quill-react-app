import React from 'react'
import { View,Text,StyleSheet,SafeAreaView,TouchableOpacity,FlatList,Image } from 'react-native'
import RText from '../../../components/common/RText'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Wishlist(props) {
const im1 = require('../../../assets/images/superman.jpg')
const im2 = require('../../../assets/images/Spiderman.jpg')
    const books = [{id:'1',desc:"The Hypocrite World",img:im1},{id:'2',desc:"The Hypocrite World",img:im1},{id:'3',desc:"The Hypocrite World",img:im1},{id:'4',desc:"The Hypocrite World",img:im1},{id:'5',desc:"The Hypocrite World",img:im1},{id:'6',desc:"The Hypocrite World",img:im1}]
    const course = [{id:'1',desc:"Design for Human Mind & AI",img:im2},{id:'2',desc:"Design for Human Mind & AI",img:im2},{id:'3',desc:"Design for Human Mind & AI",img:im2},{id:'4',desc:"Design for Human Mind & AI",img:im2},{id:'5',desc:"Design for Human Mind & AI",img:im2},{id:'6',desc:"Design for Human Mind & AI",img:im2},{id:'11',desc:"Design for Human Mind & AI",img:im2},{id:'7',desc:"Design for Human Mind & AI",img:im2},{id:'8',desc:"Design for Human Mind & AI",img:im2},{id:'9',desc:"Design for Human Mind & AI",img:im2},{id:'10',desc:"Design for Human Mind & AI",img:im2}]



    return (
        <SafeAreaView style={styles.total}>
                <RText style={styles.header}>Your Courses</RText>
                <View  style={{height:'40%',width:'100%'}}>
                        <FlatList
                        data={course}
                        keyExtractor={(item)=>(item.id)}
                        renderItem={({item})=>{
                            return( <View>
                                        <TouchableOpacity style={styles.courseBox}>
                                            <Image style={styles.courseImg} source={item.img} />
                                            <View style={styles.courseDataBox}>
                                                <RText style={styles.corseData1} >{item.desc}</RText>
                                                <RText style={styles.corseData2}>by Riverside Design Studio</RText>
                                                <RText style={styles.corseData3}>₹ 199</RText>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{backgroundColor:'red',position:'absolute',elevation:20, left:360,justifyContent:'center', height:20,width:20, borderRadius:10,marginTop:5}} onPress={()=>console.warn("Cross")}>
                                            <Icon name="close" size={15} color="white" style={{alignSelf:'center'}}/>
                                        </TouchableOpacity>
                                    </View>
                            )
                        }}
                        />
                </View>
                <RText style={styles.header}>Your Books</RText>
                <View style={{height:'40%',width:'100%'}}>
                        <FlatList
                        data={books}
                        horizontal={true}
                        keyExtractor={(item)=>(item.id)}
                        renderItem={({item})=>{
                            return(<View style={{marginTop:30}}>
                                        <TouchableOpacity style={styles.booksBox}>
                                            <Image style={styles.booksImg} source={item.img}/>
                                            <RText style={styles.booksData}>{item.desc}</RText>
                                            <RText style={{alignSelf:'flex-start',fontFamily:'Roboto-Bold',marginTop:5}}>₹ 478</RText>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{backgroundColor:'red',position:'absolute',justifyContent:'center',left:120,top:-5, height:20,width:20, borderRadius:10}} onPress={()=>console.warn("Cross")}>
                                        <Icon name="close" size={15} color="white" style={{alignSelf:'center'}}/>
                                        </TouchableOpacity>
                                   </View>
                            )
                        }}

                        />
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    total:{
        flex:1,
        backgroundColor:'white',
    },
    header:{
        // backgroundColor:'cyan',
        justifyContent:'center',
        paddingLeft:25,
        paddingTop:22,
        paddingBottom:10,
        fontSize: 24,
        lineHeight: 25,
        fontFamily:'Roboto-Bold'
    },
    courseBox:{
        flexDirection:'row',
        elevation:10,
        width: 350,
        height: 93,
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:6,
        marginTop:10,
        marginLeft:20,
        position:'relative',
        borderWidth:1,
        borderColor:'#B2B2B2'
    },
    courseImg:{
        width: 116,
        height: 84,
        borderRadius:8,
        // backgroundColor:'red',
        marginLeft:12,
    },
    courseDataBox:{
        // backgroundColor:'pink',
        height:'100%',
        paddingVertical:25,
    },
    corseData1:{
    fontSize: 14,
    fontFamily:'Roboto-Bold',
    lineHeight: 15,
    marginLeft:12,
    marginBottom:5,
    },
    corseData2:{
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontSize: 11,
    lineHeight: 13,
    color:'#B2B2B2',
    marginLeft:12,
    marginBottom:10,
    },
    corseData3:{
        fontSize: 11,
        lineHeight: 13,
        fontFamily:'Roboto-Bold',
        textAlign: 'center',
        color: '#000000',
        alignSelf:'flex-start',
        marginLeft:12,
    },
    booksHeader:{
        backgroundColor:'yellow'
    },
    booksBox:{
        width: 106,
        marginLeft:22,
        alignItems:'center',
        // backgroundColor:'cyan'
    },
    booksImg:{
        width: 116,
        height: 176,
        borderRadius:6,
    },
    booksData:{
        marginTop:20,
        fontFamily:'Roboto'
        // backgroundColor:'green'
    },
})