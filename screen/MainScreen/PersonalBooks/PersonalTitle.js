import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import RText from '../../../components/common/RText'
function TitleText(props) {
if (props.data.length > 19) {
    const res = props.data.slice(16);
    const res2 = props.data.replace(res, "...");

    return (
        <View style={{marginTop:'20%'}}>
            <RText style={styles.cardTitle}>
                {res2}
            </RText>
        </View>
    )
    
} else {
    return (
        <View style={{marginTop:'20%'}}>
            <RText style={styles.cardTitle}>
                {props.data}
            </RText>
        </View>
    )
}
    
}

export default TitleText

const styles = StyleSheet.create({
    cardTitle: {
        minHeight:50,
        maxHeight: 50,
        fontSize: 16,
        overflow:'hidden',
        fontFamily:'Roboto-Bold',
    },
})
