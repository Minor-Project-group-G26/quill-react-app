import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
function TitleText(props) {
if (props.data.length > 19) {
    const res = props.data.slice(16);
    const res2 = props.data.replace(res, "...");

    return (
        <View style={{marginTop:'20%'}}>
            <Text style={styles.cardTitle}>
                {res2}
            </Text>
        </View>
    )
    
} else {
    return (
        <View style={{marginTop:'20%'}}>
            <Text style={styles.cardTitle}>
                {props.data}
            </Text>
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
    },
})
