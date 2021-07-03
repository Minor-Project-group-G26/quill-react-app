import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Image, Text, Dimensions, StyleSheet,FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import TitleText from './TitleText';
import AText from '../../../components/common/AText';


const HEIGHT = Dimensions.get("window").height
const WIDTH = Dimensions.get("window").width
function BookList(props) {
    const navigation = useNavigation()
    return (<SafeAreaView style={{ flex: 1}}  >
        <View style={{ flex: 1 ,alignItems:'center'}}>
            <FlatList
                style={{ flex:1,width:WIDTH*0.9}}
                data={props.data}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item,z) => "key"+z}
                renderItem={({ item }) => (
                    <View  style={{flexDirection:'row', marginTop:40}}>
                        {item.map((item,index) => {       
                                return (
                                    <TouchableOpacity key={index} style={styles.card}  onPress={()=>navigation.navigate('BooksDetails',{headerTitle: item.title, data: item})}>
                                        <Image source={item.image} style={styles.cardImage} />
                                        <View style={styles.cardTextContainer}>
                                            <TitleText data={item.title}/>
                                            <View style={styles.cardDetailView}>
                                                <View style={{ flexDirection: 'row',justifyContent:'space-between', alignItems:'center' }}>
                                                    <View style={{ flexDirection: 'row',}}>
                                                        <AText >
                                                            {item.Rating}
                                                        </AText>
                                                        <View style={{top:2,marginLeft:5 }}>
                                                            <Icon name="star" size={15} color="yellow" />
                                                        </View>
                                                    </View>
                                                    <View style={{marginRight:5}}>
                                                        <AText >
                                                            {item.Price}
                                                        </AText>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
        )
    })}
                    </View>
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
    card: {
        width:WIDTH*0.26,
        borderRadius: 11,
        marginHorizontal:9,
        marginBottom:HEIGHT*0.0124,
    },
    cardImage: {
        borderRadius: 13,
        height: HEIGHT*0.148,
        width:WIDTH*0.242,
        resizeMode: 'cover',
    },
    cardTextContainer: {
        width: '100%'
    },
    cardDetailView: { width: '100%', marginTop: 10},

})
