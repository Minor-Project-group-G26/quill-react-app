import React from 'react';
import {TouchableOpacity,View,Text,Image, StyleSheet,FlatList,Dimensions} from 'react-native'
import AText from '../../../components/common/AText';
import Icon from 'react-native-vector-icons/FontAwesome';
import PersonalTitle from './PersonalTitle';


const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

function PersonalCard(props) {
    return (
        <FlatList
        data={props.data}
        columnWrapperStyle={props.data%3==1?{justifyContent:'flex-start'}:{justifyContent:'space-evenly'}}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
                            <TouchableOpacity key={item.id} style={styles.card}  onPress={()=>console.log('Done')}>
                                <Image source={item.image} style={styles.cardImage} />
                                <View style={styles.cardTextContainer}>
                                    <PersonalTitle data={item.title}/>
                                    <View style={styles.cardDetailView}>
                                        <View style={{ flexDirection: 'row',justifyContent:'space-between', alignItems:'center' }}>
                                            <View style={{ flexDirection: 'row'}}>
                                                <AText >
                                                    {item.Rating}
                                                </AText>
                                                <View style={{top:2,marginLeft:5 }}>
                                                    <Icon name="star" size={15} color="yellow" />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
)
}    //====End ===//
    />
    )
}

export default PersonalCard;

const styles = StyleSheet.create({
    card: {
        width:WIDTH*0.26,
        borderRadius: 11,
        marginBottom:HEIGHT*0.0124,
        marginTop:20,
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
    cardDetailView: { width: '100%'},

})
