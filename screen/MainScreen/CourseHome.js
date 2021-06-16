import React, { useState } from 'react'
import { Dimensions, StyleSheet, View, Button, TouchableOpacity, Image, FlatList } from 'react-native'
import RText from '../../components/common/RText'
import RootComponent from '../RootComponent'
import AText from '../../components/common/AText';
import VideoPlayer from '../../components/custom/VideoPlayer';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Weeks = [
    'Week 1',
    'Week 2',
    'Week 3',
    'Week 4',
    'Info',
    'Form'
]


const WeeklyData= [
    {
        title:"Introduction",
        type: 'video'
        
    },
    {
        title:"Introduction",
        type: 'video'
    },
    {
        title:"Introduction",
        type: 'video'
    },
    {
        title:"Introduction",
        type: 'assignment'
    },
    {
        title:"Introduction",
        type: 'video'
    },
    {
        title:"Introduction",
        type: 'video'
    },
    {
        title:"Introduction",
        type: 'video'
    },
    {
        title:"Introduction",
        type: 'assignment'
    },
]


function CourseHome(props) {
    const [selectedOption, setSelectedOption] = useState(0)

    const HeaderOptionHandler = (item, index)=>{
        switch (item) {
            case 'Info':
                props.navigation.navigate('CourseInfo')
                break;
            case 'Form':
                
                break;
        
            default:
                setSelectedOption(index);
                break;
        }
    }


    return (
        <View style={{flex:1, backgroundColor:'#C4C4C4'}}>
            <View style={{width:WIDTH, height:220, backgroundColor:'#000'}}>
                <VideoPlayer 
                // video={require('../../assets/videos/Need-for-Speed-Heat-Official.mp4')} 
                />
            </View>
            <View style={{padding:16}}>
                <FlatList 
                    data={Weeks}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    renderItem={({item, index})=>(
                        <AText 
                            onPress={()=> HeaderOptionHandler(item, index)} 
                            style={{fontFamily: 'Arial-Bold', color:selectedOption===index?'#0000FF':"#4E4E50", fontSize: 14, marginHorizontal:16}}>{item}</AText>
                    )}
                    keyExtractor={(item, index)=>"fadsfadsfa"+ index}
                />
            </View>
            <View style={{ width:WIDTH, flex:1}}>
                <FlatList
                    data={WeeklyData}
                    ItemSeparatorComponent={()=>(<View style={{height:1, backgroundColor:'#B2B2B2'}}></View>)}
                    renderItem={({item, index})=>(
                        <TouchableOpacity 
                        onPress={()=> props.navigation.navigate('CourseData', {headerTitle: item.title})}
                        style={{flexDirection:'row', alignItems:'center', marginVertical:16}}>
                            <AText style={{marginHorizontal:16,fontFamily: 'Arial-Bold'}}>{index+1}.</AText>
                            <View style={{marginHorizontal:8, backgroundColor:'#fff', borderRadius:30, overflow:'hidden', alignItems:'center'}}>
                                <Image 
                                    source={item.type === 'video'?require("../../assets/icons/Polygon1.png"):require("../../assets/icons/assignment.png")} 
                                    style={[item.type === 'video'?{width:14, height:17}: {width:14, height:17},{margin:9}]}
                                    />        
                            </View>
                            <RText style={{fontFamily: 'Roboto', marginHorizontal: 16}}>{item.title}</RText>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index)=>"fsdfafafa"+index+item.title}
                />
            </View>
        </View>
    )
}

export default RootComponent(CourseHome, false)



// const VideoPlayer = (props) => {
//     const video = React.useRef(null);
//     const [status, setStatus] = React.useState({});
//     const [PlayedOnce, setPlayedOnce] = useState(false)
//     return (
//         <View style={styles.container}>
//             <Video
//                 ref={video}
//                 style={styles.video}
//                 source={require('../../assets/videos/Need-for-Speed-Heat-Official.mp4')}
//                 useNativeControls
//                 resizeMode="contain"
//                 isLooping
//                 onPlaybackStatusUpdate={status => setStatus(() => status)}
//             />
//             {
//                 PlayedOnce
//                     ? null
//                     : (

//                         <TouchableOpacity
//                             style={styles.buttons}
//                             onPress={() => {
//                                 video.current.playAsync()
//                                 setPlayedOnce(true)
//                             }}>
//                             <Image source={require('../../assets/icons/Polygon1.png')} style={{ width: 28, height: 32, tintColor: '#fff' }} />
//                         </TouchableOpacity>
//                     )
//             }
//         </View>

//     )
// }


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
