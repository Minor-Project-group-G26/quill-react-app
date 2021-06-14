import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'


const fetchFont = ()=>Font.loadAsync({
    'Arial-Regular': require('../../../assets/fonts/Arial/arial_regular.ttf'),
    'Arial-Narrow': require('../../../assets/fonts/Arial/arial_narrow.ttf'),
    'Arial-Bold': require('../../../assets/fonts/Arial/arial_bold.ttf'),
    'Arial-Bold-Italic': require('../../../assets/fonts/Arial/Arial-Bold-Italic.ttf'),

});

function AText({style, children="", onPress=null}) {
        const [fontLoaded, setFontLoaded] = useState(false)
 
        let styles = {
            fontSize:16,
            color: '#000',
            // fontWeight:'bold',
            ...style,
        }

      if (!fontLoaded) {
        return (<AppLoading
                startAsync={fetchFont}
                onError={()=>console.log("error loading font")}
                onFinish={()=>{
                    setFontLoaded(true);
                }}
            />);
      }
        return (
        <>
            <Text style={styles} onPress={onPress}>{children}</Text>
        </>
    )
}

export default AText