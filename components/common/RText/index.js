import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'


const fetchFont = ()=>Font.loadAsync({
    'Roboto': require('../../../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Black': require('../../../assets/fonts/Roboto/Roboto-Black.ttf'),
    'Roboto-Black-Italic': require('../../../assets/fonts/Roboto/Roboto-BlackItalic.ttf'),
    'Roboto-Bold': require('../../../assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-Bold-Italic': require('../../../assets/fonts/Roboto/Roboto-BoldItalic.ttf'),
    'Roboto-Italic': require('../../../assets/fonts/Roboto/Roboto-Italic.ttf'),
    'Roboto-Light': require('../../../assets/fonts/Roboto/Roboto-Light.ttf'),
    'Roboto-Light-Italic': require('../../../assets/fonts/Roboto/Roboto-LightItalic.ttf'),
    'Roboto-Medium-Italic': require('../../../assets/fonts/Roboto/Roboto-MediumItalic.ttf'),
    'Roboto-Medium': require('../../../assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Thin': require('../../../assets/fonts/Roboto/Roboto-Thin.ttf'),
    'Roboto-Thin-Italic': require('../../../assets/fonts/Roboto/Roboto-ThinItalic.ttf'),
    
    
});

function RText({style, children="", onPress=()=>{}}) {
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

export default RText

