import React, { useState } from 'react'
import { Dimensions, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Video } from 'expo-av';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const VideoPlayer = (props) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [PlayedOnce, setPlayedOnce] = useState(false)
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={props.video}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            {
                PlayedOnce
                    ? null
                    : (

                        <TouchableOpacity
                            style={styles.buttons}
                            onPress={() => {
                                video.current.playAsync()
                                setPlayedOnce(true)
                            }}>
                            <Image source={require('../../../assets/icons/Polygon1.png')} style={{ width: 28, height: 32, tintColor: '#fff' }} />
                        </TouchableOpacity>
                    )
            }
        </View>

    )
}

export default VideoPlayer



const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        position: 'relative'
    },
    video: {
        alignSelf: 'center',
        width: "100%",
        height: "100%"
    },
    buttons: {
        position: 'absolute',
        width: "100%",
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: '#000',
        opacity: 0.7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
