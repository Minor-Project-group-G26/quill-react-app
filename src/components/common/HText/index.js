import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'


const fetchFont = ()=>Font.loadAsync({
    'Humnst777': require('../../../../assets/fonts/humnst777_blk_bt/HUM777K.ttf'),
    'Humnst777-Italic': require('../../../../assets/fonts/humnst777_blk_bt/HUM777KI.ttf'),

    
    
});

function HText({style, children="", onPress=()=>{}}) {
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

export default HText

