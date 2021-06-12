import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, View, Text, Image,Dimensions, TouchableOpacity ,StyleSheet,TextInput, ScrollView} from 'react-native'
import Rating from './Rating';
import RText from '../../../components/common/RText'
function BooksDetails() {
const wid = Dimensions.get('screen').width
const h = Dimensions.get("screen").height 
    return(<SafeAreaView style={styles.safe}>
            

            <ScrollView style={{width:wid, height:h}}>

                             {/* View 1  */}
            <View style={styles.vue1}>

                <Text style={{fontSize:24,fontWeight:'700'}}>The Hypocrite World</Text>
            </View>
                                {/* View 2 */}
            <View style={styles.vue2}>
                <Image
                source={require('../../../assets/images/superman.jpg')}
                style={styles.img}
                />
                <View style={styles.nestedvue1}>
                    <View style={styles.nestedvue12}>
                        <Text style={{fontSize: 18,fontWeight:'700',fontStyle: 'italic',lineHeight: 18,letterSpacing: 0.16,textAlign: 'left', marginTop:20 }}>
                        Written By -
                        </Text>
                        <Text style={{fontStyle:'normal', fontSize:18,marginTop:12 ,fontWeight:'700', color:'#950740'}}>
                        Josh Luios
                        </Text>
                        <View style={styles.nestedvue121}>
                            <Text style={{fontSize: 18,fontWeight:'700',fontStyle: 'italic',lineHeight: 18,textAlign: 'left', marginTop:7}} >
                            Rating -
                            </Text>
                            <Text style={{height: 25,width: 30 , paddingLeft:6,fontSize: 16,fontWeight:'700', marginTop:4,color:'#950740'}}>
                            4.5
                            </Text>
                            <Icon name="star" size={15} color="#FFF500" style={{marginTop:6, marginLeft:4}}/>
                        </View>
                        <View style={styles.nestedvue122}>
                                <Text style={{fontSize: 18,fontWeight:'700',fontStyle: 'italic',lineHeight: 21,textAlign: 'left', marginTop:7}}>
                                Purchased -
                                </Text>
                                <Text style={{height: 25,width: 41,fontSize: 16,fontWeight:'700', marginLeft:10, marginTop:5,color:'#950740'}}>
                                286 
                                </Text>
                        </View>
                        <View style={{flexDirection:'row', marginTop:20,height: 25,width: 93,}}>
                                <Text style={{fontSize: 18,fontWeight:'700',fontStyle: 'italic',lineHeight: 18,textAlign: 'left', marginTop:7}}>
                                    Price -
                                </Text>
                                <Text style={{height: 25,width: 41,marginTop:5,fontSize: 16,fontWeight:'700', marginLeft:10, color:'#950740'}}>
                                     ₹ 478
                                </Text>
                        </View>
                    </View>
                </View>
            </View>

                                    {/* View 3 */}

            <View style={{marginTop:20,marginLeft: 39,}}>

            <Text
    style={{
        marginTop:18,
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '700',
    lineHeight: 20,
    textAlign: 'left',
    }}
    >Description
    </Text>
    <Text style={{
        marginTop:15,
        height: 160,
        width: 259,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 16,
        textAlign: 'left',
    }}>
    Want to instantly capture readers? No matter who you are or what genre your book falls into—nothing beats getting engrossed in a book description that leaves a reader wanting more. Short and long book descriptions both serve a purpose—to make you and your book look good. Before you start writing, here are a few things you need to know.
    </Text>
    <View style={{
        height: 28,
        width: 127,
        marginTop:10,
        marginBottom:10,
    }}>
        <Text style={{
            fontSize: 18,
            fontStyle: 'italic',
            fontWeight: '700',
            lineHeight: 24,
            textAlign: 'left'
        }}>Rate this eBook</Text>
        <Text style={{
            fontSize: 9,
            color: '#4E4E50',
            fontStyle: 'italic',
            fontWeight: '700',
            lineHeight: 15,
            textAlign: 'left',
            
        }}>Tell others what you think</Text>
    </View>
    <View style={{marginTop:10,marginLeft:-22, marginBottom:10}}>
   <Rating/>
    </View>
    <View style={{flexDirection:'row',}}>
    <TextInput
style={{height: 95,width: 313,borderRadius: 6 ,backgroundColor:'white',textAlignVertical:'top', padding: 10}}
    multiline={true}
    // numberOfLines={4}
    placeholder={"Write Your View "}
    />
    <TouchableOpacity style={{backgroundColor:"#4EE278", justifyContent:'center',width: 30,height: 30,borderRadius:15, position:'absolute', left:270, top:58}}>
        <Image
        source={require('../../../assets/icons/Send.png')}
        style={{
            height:20,
            width:20,
            marginLeft:7
        }}
        />
    </TouchableOpacity>
    </View>
    <View style={{height: 28,width: 127, marginTop:24, marginBottom:10}}>
        <Text style={{fontSize: 20,fontStyle: 'italic',fontWeight: '700',lineHeight: 20,textAlign: 'left'}}>Reviews</Text>
    </View>
    <View style={{height:150,width:392, marginBottom:45}}>
        <View style={{flexDirection:'row', marginBottom:6}}>
            <Text style={{fontSize: 14, marginLeft:5}}>Jhon Doe</Text>
            <Text style={{marginLeft:170}}>23-04-2019</Text>
        </View>
        <View style={{width:"100%",height: 100,width: 313, backgroundColor:'white',paddingLeft:12,paddingRight:12,paddingTop:20,borderRadius:6}}>
            <Text style={{fontSize: 13,fontStyle: 'normal',fontWeight: '400',lineHeight: 16,textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</Text>
        </View>
    </View>
        </View>
            </ScrollView>
            {/* Button Type */}


        <TouchableOpacity
                style={{
                    position:'absolute',
                    height: 55,
                    width: 153,
                    borderRadius: 8,
                    backgroundColor:'#950740',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:8,
                    bottom:5,
                    left:210
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
        backgroundColor:'#E5E5E5'
    },
    vue1:{
    height: 45,
    width: 163,
    marginLeft: 39,
    marginTop: 40,
    },
    vue2:{
        flexDirection:'row',
        marginTop:30,
        marginLeft: 39,

    },
    nestedvue12:{
        marginLeft:27

    },
    img:{
        height:215,
        width:150,
        borderRadius:8
    },
    nestedvue121:{
    height: 25,
    width: 150,
    marginTop:20,
    flexDirection:'row'
    },
    nestedvue122:{
        height: 25,
        width: 96,
        marginTop:20,
        flexDirection:'row' 
    },
})