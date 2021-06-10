import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, View, Text, Image,Dimensions, TouchableOpacity ,StyleSheet,TextInput, ScrollView} from 'react-native'
import Rating from './Rating';

function BooksDetails() {
const wid = Dimensions.get('screen').width
    return(<SafeAreaView style={styles.safe}>
            {/* ================= top ========================= */}
            <View style={styles.vue1}>
                <Text style={{fontSize:24}}>The Hypocrite World</Text>
            </View>
                {/* ===================== card details ================  */}
            <View style={styles.vue2}>
                <Image
                source={require('../../../assets/images/superman.jpg')}
                style={styles.img}
                />
                <View style={styles.nestedvue1}>
                    <View style={styles.nestedvue12}>
                        <Text style={{fontSize: 14,fontWeight:'700',fontStyle: 'italic',lineHeight: 16,letterSpacing: 0.16,textAlign: 'left', marginTop:7 }}>
                        Written By -
                        </Text>
                        <Text style={{fontStyle:'normal', fontSize:14,marginTop:5 ,fontWeight:'700', color:'#950740'}}>
                        Josh Luios
                        </Text>
                        <View style={styles.nestedvue121}>
                            <Text >
                            Rating -
                            </Text>
                            <Text style={{height: 25,width: 30 , paddingLeft:10}}>
                            4.5
                            </Text>
                            <Icon name="star" size={15} color="yellow"  style={{marginTop:2}}/>
                        </View>
                        <View style={styles.nestedvue122}>
                                <Text>
                                Purchased -
                                </Text>
                                <Text style={{height: 25,width: 41, marginLeft:10}}>
                                286 
                                </Text>
                        </View>
                        <View style={{flexDirection:'row', marginTop:11,height: 25,width: 93,}}>
                                <Text>
                                    Price -
                                </Text>
                                <Text style={{height: 25,width: 41, marginLeft:10}}>
                                     ₹ 478
                                </Text>
                        </View>
                    </View>
                </View>

            </View>
                {/* ============================ final Text data =================  */}
            <View style={styles.vue3}>
                <View style={{height: 28,width: 119,marginLeft: 39,marginTop:20}}>
                    <Text
                    style={{
                    fontSize: 16,
                    fontStyle: 'italic',
                    fontWeight: '700',
                    lineHeight: 18,
                    letterSpacing: 0.16,
                    textAlign: 'left',

                    }}
                    >Description
                    </Text>
                    <Text style={{
                        marginTop:15,
                        height: 148,
                        width: 259,
                        fontSize: 14,
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 16,
                        letterSpacing: 0.16,
                        textAlign: 'left',
                    }}>
                    Want to instantly capture readers? No matter who you are or what genre your book falls into—nothing beats getting engrossed in a book description that leaves a reader wanting more. Short and long book descriptions both serve a purpose—to make you and your book look good. Before you start writing, here are a few things you need to know.
                    </Text>
                    <View style={{
                        height: 28,
                        width: 127,
                        marginTop:14
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontStyle: 'italic',
                            fontWeight: '700',
                            lineHeight: 18,
                            textAlign: 'left'
                        }}>Rate this eBook</Text>
                        <Text style={{
                            fontSize: 9,
                            fontStyle: 'italic',
                            fontWeight: '700',
                            lineHeight: 10,
                            textAlign: 'left',
                            
                        }}>Tell others what you think</Text>
                    </View>
                    <View style={{marginTop:10, marginBottom:10}}>
                   <Rating/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <TextInput
                style={{height: 76,width: 279,borderRadius: 6, backgroundColor:'white'}}
                    multiline={true}
                    numberOfLines={4}
                    placeholder={"Write Your View "}
                    />
                    <TouchableOpacity style={{backgroundColor:"#4EE278", justifyContent:'center',width: 30,height: 30,borderRadius:15, position:'absolute', left:240, top:40}}>
                    <Image style={{width: 9,height:9}} source={require('../../../assets/icons/Send(Fill) 1.jpg')}/>
                    </TouchableOpacity>
                    </View>


                    <View style={{height: 28,width: 127, marginTop:18}}>
                        <Text style={{fontSize: 16,fontStyle: 'italic',fontWeight: '700',lineHeight: 18,textAlign: 'left'}}>Reviews</Text>
                    </View>
                    <View
                style={{
                    position:'absolute',
                    height: 42,
                    width: 153,
                    borderRadius: 8,
                    backgroundColor:'#950740',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:8,
                    left:173,
                    top:375
                }}
                >
                    <Text style={{color:'white',fontSize: 18,fontStyle: 'normal',fontWeight: '700',lineHeight: 21,textAlign: 'center'}}>
                        Buy Now
                    </Text>
                </View>

                </View>
               
            </View>
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
    nestedvue1:{
    },
    nestedvue1:{
        marginLeft:27

    },
    vue3:{},
    txt1:{},
    img:{
        height:152,
        width:119,
        borderRadius:8
    },
    nestedvue121:{
    height: 25,
    width: 150,
    marginTop:11,
    flexDirection:'row'
    },
    nestedvue122:{
        height: 25,
        width: 93,
        marginTop:10,
        flexDirection:'row' 
    },
})