import React from 'react'
import { Text, View, Image,TouchableOpacity,FlatList,SafeAreaView ,Dimensions,StyleSheet,Animated} from 'react-native'
import Superman from '../../../assets/images/superman.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';


const DATA = [
    {id:'1',name:"Albus",data:[{id:1,title:"Superman",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:2,title:"Spidermmmman",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:3,title:"Superman",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:4,title:"Superman",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:5,title:"Superman",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:6,title:"Superman",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:7,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:8,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:9,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:10,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:11,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:12,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'}]},
    {id:'2',name:"Harry",data:[{id:1,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:2,title:"Jeet2",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:3,title:"Jeet3",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:4,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:5,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:6,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:7,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:8,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:9,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:10,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:11,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:12,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'}]},
    {id:'3',name:"Ankur",data:[{id:1,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:2,title:"Jeet2",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:3,title:"Jeet3",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:4,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:5,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:6,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:7,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:8,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:9,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:10,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:11,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:12,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'}]},
    {id:'5',name:"Nisha",data:[{id:1,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:2,title:"Jeet2",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:3,title:"Jeet3",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:4,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:5,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:6,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:7,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:8,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:9,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:10,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:11,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:12,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'}]},
    {id:'8',name:"Pollard",data:[{id:1,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:2,title:"Jeet2",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:3,title:"Jeet3",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:4,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:5,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:6,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:7,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:8,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:9,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:10,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:11,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:12,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'}]},
    {id:'7',name:"Captain",data:[{id:1,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:2,title:"Jeet2",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:3,title:"Jeet3",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:4,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:5,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:6,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:7,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:8,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:9,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:10,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:11,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:12,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'}]},
    {id:'6',name:"Chennai Super Kings",data:[{id:1,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:2,title:"Jeet2",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:3,title:"Jeet3",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:4,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:5,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:6,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:7,title:"Jeet",image:Superman,Rating:'4.5',Price:'₹ 250'},{id:8,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:9,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:10,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:11,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'},{id:12,title:"Jeet",image:Superman,Rating:'4.5',Price:'250'}]}
]

function Books(props) {
 const HEIGHT = Dimensions.get("window").height
 const WIDTH = Dimensions.get("window").width

    // ================================================================== Logics ============================================================================= //

  // ===================================================================== Main Return =========================================================================== //
    return (
        <View style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'#c3073f'}}>
            <Text>This is Books</Text>
            <Animated.FlatList
            data={DATA}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => (item.id)}
            renderItem={({item})=>(
                <SafeAreaView style={{flex:1,justifyContent:'center', alignItems:'center',height:600, width:WIDTH, marginTop:'34 %'}}>
                            <View >
                            <Animated.FlatList
                            columnWrapperStyle={{justifyContent: (item%3 == 2)? 'flex-start' : 'flex-end', backgroundColor:'#e5e5e5'}}
                            data={item.data}
                            keyExtractor={(item) => (item.id)}
                            style={{height:HEIGHT,width:WIDTH}}
                            numColumns={3}
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
            )}
            //=== End==//
            />
        </View>
    )
}

export default Books;

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
