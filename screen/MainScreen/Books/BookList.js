import React, { useRef } from 'react'
import { Animated, SafeAreaView, View, TouchableOpacity, Image, Text, Dimensions, StyleSheet,FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


// const DATA2 = [[{ id: '1', title: 'Superman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
// { id: '2', title: 'Amazing SpiderMan', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
// { id: '3', title: 'Hulk', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },],
// [{ id: '4', title: 'Spiderman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
// { id: '5', title: 'Hulk', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
// { id: '6', title: 'Superman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },],
// [{ id: '7', title: 'Amazing Spiderman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
// { id: '8', title: 'Hulk', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
// { id: '9', title: 'Superman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },],
// [{ id: '10', title: 'Amazing Spiderman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
// { id: '11', title: 'Hulk', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
// { id: '12', title: 'Superman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },],
// ];



function BookList(props) {
    const HEIGHT = Dimensions.get("window").height
    const WIDTH = Dimensions.get("window").width
    const scrollY = useRef(new Animated.Value(0)).current

    let translateY = scrollY.interpolate({
        inputRange: [0, 180],
        outputRange: [0, -180],
        extrapolate: 'clamp',
    })

    const CardTemp = (item,index) => {
        
        return (
            <TouchableOpacity key={item.id} style={styles.card} >
                <Image source={item.image} style={styles.cardImage} />
                <View style={styles.cardTextContainer}>
                    <View style={{ marginTop: '20%' }} >
                        <Text style={styles.cardTitle}>
                            {item.title}
                        </Text>
                    </View>
                    <View style={styles.cardDetailView}>
                        <View style={{ flexDirection: 'row',justifyContent:'space-between', alignItems:'center' }}>
                            <View style={{ flexDirection: 'row',}}>
                                <Text >
                                    {item.Rating}
                                </Text>
                                <View style={{top:2,marginLeft:5 }}>
                                    <Icon name="star" size={15} color="yellow" />
                                </View>
                            </View>
                            <View >
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

    return (<SafeAreaView style={{ flex: 1}}  >
        <View style={{ flex: 1 ,alignItems:'center'}}>
            <FlatList
            style={{ flex:1,width:WIDTH*0.9}}
                data={props.data}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => (item.id)}
                renderItem={({ item }) => (
                    <View style={{flexDirection:'row', marginTop:40}}>
                        {item.map(CardTemp)}
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
        width:102,
        borderRadius: 11,
        marginHorizontal:9,
        marginBottom:10,
    },
    cardImage: {
        borderRadius: 13,
        height: 120,
        width:95,
        resizeMode: 'cover',
    },
    cardTextContainer: {
        width: '100%'
    },
    cardTitle: {
        minHeight:50,
        maxHeight: 50,
        fontSize: 16,
        overflow:'hidden',
    },
    cardDetailView: { width: '100%', marginTop: 10},

})
