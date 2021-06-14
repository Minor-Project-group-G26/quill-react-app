import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, View, Text, Image,Dimensions, TouchableOpacity ,StyleSheet,TextInput, ScrollView} from 'react-native'
import Rating from './Rating';
import RText from '../../../components/common/RText'
function BooksDetails() {
const wid = Dimensions.get('window').width
const h = Dimensions.get("window").height 
    return(<SafeAreaView style={styles.safe}>
            <ScrollView style={{width:wid,height:h}}>
                <View style={styles.box1}>
                    <View style={styles.header}>
                        <View style={{width: 163,height: 45}}>
                            <RText style={{fontFamily:'Roboto-Bold',lineHeight: 24, fontSize:24}}>The Hypocrite World</RText>
                        </View>
                    </View>
                    <View style={styles.parent}>
                        <View style={styles.leftDiv}>
                            <Image
                                source={require('../../../assets/images/superman.jpg')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.rightDiv}>
                            <Text style={styles.leftText}>Written By -</Text>
                            <Text style={styles.leftText2}>Josh Luios</Text>
                            <View style={styles.ratingparent}>
                                    <Text style={styles.leftText} >Rating - <Text style={{color:'#950740'}}>4.5</Text></Text>
                                    <Icon name="star" size={15} color="#FFF500" style={{marginTop:8, marginLeft:4}}/>
                            </View>
                            <View style={styles.ratingparent}>
                                    <Text style={styles.leftText} >Purchased -<Text style={{color:'#950740'}}>256</Text></Text>
                            </View>
                            <View style={styles.ratingparent}>
                                    <Text style={styles.leftText} >Price -<Text style={{color:'#950740'}} > ₹ 478</Text></Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.discrption}>
                        <Text style={styles.DesText}>Discription</Text>
                        <Text style={styles.TextData}> Want to instantly capture readers? No matter who you are or what genre your book falls into—nothing beats getting engrossed in a book description that leaves a reader wanting more. Short and long book descriptions both serve a purpose—to make you and your book look good. Before you start writing, here are a few things you need to know.</Text>
                    </View>
                    <View style={styles.RatingDiv}>
                        <Text style={styles.DesText}>Rate This Ebook</Text>
                        <Text style={styles.Tell}> Tell Others what you think</Text>
                    </View>
                    <View style={styles.ReviewBox}>
                        <View style={{marginLeft:10, marginBottom:10}}>
                            <Rating/>
                        </View>
                        <View style={{position:'relative', height:95, width:290,marginHorizontal:45}}>
                                <TextInput
                                style={{borderRadius: 6,width:'100%',height:'100%' ,backgroundColor:'white',textAlignVertical:'top', padding: 10}}
                                multiline={true}
                                // numberOfLines={4}
                                placeholder={"Write Your View "}  
                                />
                                <TouchableOpacity style={styles.SendCircle}>
                                <Image
                                source={require('../../../assets/icons/Send.png')}
                                style={{
                                    height:15,
                                    width:15,
                                    marginLeft:10
                                }}
                                />
                                </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{width: 127,height: 28,fontStyle: 'italic',fontWeight:'bold',fontSize: 18,lineHeight: 18,color: '#1A1A1D',marginLeft:42}}>Reviews</Text>
                    <View style={styles.ReviewBox2}>
                        <View style={{flexDirection:'row',marginTop:10,marginBottom:5}}>
                            <Text style={{marginLeft:50,fontSize: 14,lineHeight:16}}>Jhon Doe</Text>
                            <Text style={{marginRight:40, marginLeft:140,fontSize: 14,lineHeight:16}}>23-04-2019</Text>
                        </View>
                        <View style={{position:'relative', height:105, width:290,marginHorizontal:45, backgroundColor:'white', borderRadius:15,paddingVertical:15,paddingHorizontal:10}}>
                                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={{
                    position:'absolute',
                    borderRadius: 8,
                    height:52,
                    width:153,
                    backgroundColor:'#950740',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:8,
                    bottom:5,
                    right:30,
                    bottom:20,
                }}
                >
                    <Text style={{color:'white',fontSize: 18,fontStyle: 'normal',fontWeight: '700',lineHeight: 21,textAlign: 'center'}}>
                        Buy Now
                    </Text>
                </TouchableOpacity>
        </SafeAreaView>
)
}

export default BooksDetails



const styles = StyleSheet.create({
    safe:{
        flex:1,
        // backgroundColor:'#E5E5E5'
    },
    img:{
        height:"95%",
        width:'80%',
        marginTop:5,
        marginHorizontal:35,
        borderRadius:10,
    },
    box1: {
        backgroundColor: '#C4C4C4',
        height :'100%',
        paddingBottom:101
    },
    header: {
        // backgroundColor: 'blue',
        paddingVertical:22,
        paddingHorizontal:39,
        
    },
    parent:{
        flexDirection:'row',
        height:250,
    },
    leftDiv: {
        width: '55%',
        // backgroundColor: 'green'
    },
    rightDiv: {
        width: '45%',
        // backgroundColor: 'lime',
        paddingHorizontal:17,
        paddingVertical:12
    },
    ratingparent:{
        flexDirection:'row',
        marginTop:25,
    },
    discrption: {
        // backgroundColor: 'pink',
        marginTop:15,
    },
    ReviewBox: {
        // backgroundColor:'cyan',
        paddingVertical:20,
    },
    ReviewBox2: {
        // backgroundColor:'cyan',
        paddingVertical:10,
    },
    RatingDiv: {
        // backgroundColor: 'brown',
        marginTop:15,
    },
    leftText:{
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: '700',
        lineHeight: 20,
        textAlign: 'left',
        marginTop:10,
    },
    leftText2:{
        color:'#950740',
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: '700',
        lineHeight: 20,
        textAlign: 'left',
        marginTop:10,
    },
    DesText:{
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 22,
    color:'#1A1A1D',
    marginLeft:39
    },
    SendCircle:{
        backgroundColor:"#4EE278", justifyContent:'center',width: 30,height: 30,borderRadius:15, position:'absolute',bottom:5,right:10
    },
    Tell:{
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: '#4E4E50',
    marginLeft:39
    },
    TextData:{
        width: 259,
        height: 148,
        left: 39,
        marginTop:10,
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 16,
        color: '#000000',
    }
})























