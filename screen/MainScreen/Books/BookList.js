import React from 'react'
import {Animated,SafeAreaView,View,TouchableOpacity,Image,Text,Dimensions,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
function BookList(props) {
    const HEIGHT = Dimensions.get("window").height
    const WIDTH = Dimensions.get("window").width
    return (<SafeAreaView style={{flex:1,justifyContent:'center', alignItems:'center',height:HEIGHT*0.75, width:WIDTH}}>
                        <View >
                        <Animated.FlatList
                        columnWrapperStyle={{justifyContent: (props.data%3 == 2)? 'flex-start' :'flex-end', backgroundColor:'#e5e5e5'}}
                        data={props.data}
                        keyExtractor={(item) => (item.id)}
                        style={{height:HEIGHT,width:WIDTH}}
                        numColumns={3}
                        showsVerticalScrollIndicator={false}
                        bounces={true}
                        renderItem={({item})=>(
                            <TouchableOpacity style={styles.card} >
                                   <Image source={item.image} style={styles.cardImage} />
                                   <View style={styles.cardTextContainer}>
                                   <View style={{top:'20%'}} >
                                    <Text style={styles.cardTitle}>
                                    {item.title}
                                    </Text>
                                    </View>
                                    <View style={styles.cardDetailView}>
                                        <View style={{flexDirection:'row'}}>
                                                <View style={{flexDirection:'row',marginHorizontal:13,left:-12}}>
                                                    <Text >
                                                        {item.Rating}
                                                    </Text>
                                                    <View style={{top:2,marginLeft:5}}>
                                                    <Icon name="star" size={15} color="yellow" />
                                                </View>
                                                </View>
                                                <View style={{marginHorizontal:-2}}>
                                                        <Text >
                                                            {item.Price}
                                                        </Text>
                                                </View>
                                        </View>
                                    </View>

                                    </View>
                            </TouchableOpacity>
                                                )
                                    }
                        //====End ===//
                        />
                        </View>
            </SafeAreaView>
        )
}

export default BookList


const styles = StyleSheet.create({
    card:{
        position:'relative',
        width:'25%',
        height:275,
        borderRadius:13,
        left:'-7%',
        marginHorizontal:10,
        right:5,
        marginTop:40 ,
    },
    cardImage:{
        borderRadius:13,
        height:'60%',
        width:'100%',
        top:0,
        resizeMode:'cover',
        position:'absolute',
    },
    cardTextContainer:{
        top:'46%',
        flex:1,
        height:'31%',
        width:'80%'
    },
    cardTitle:{
        left:0,
        fontSize:16},
    cardDetailView:{width:'100%',top:'37%', position:'absolute'},

})
