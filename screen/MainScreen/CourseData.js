import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Dimensions, View, Image, ScrollView } from 'react-native'
import { Switch } from 'react-native-gesture-handler'
import RText from '../../components/common/RText'
import VideoPlayer from '../../components/custom/VideoPlayer'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function CourseData(props) {
   const [onCC, setOnCC] = useState(false)
    return (
        <View style={{flex:1, backgroundColor:'#C4C4C4'}}>
             <View style={{width:WIDTH, height:220, backgroundColor:'#000'}}>
                {/* <VideoPlayer video={require('../../assets/videos/Assassins-Creed-Official-Trailer.mp4')} /> */}
            </View>
            <ScrollView>
            <View style={{paddingHorizontal: 16, flex:1, marginTop: 16}}>
                <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                    <Image source={require('../../assets/icons/badge-cc-fill.png')} style={{width: 30, height:23, tintColor:onCC?"#fff":'#1A1A1A'}} />
                    <Switch 
                        style={{marginLeft:16}}
                        trackColor={{ false: "#767577", true: "#fff" }}
                        thumbColor={"#017DC2"}
                        ios_backgroundColor="#767577"
                        onValueChange={()=> setOnCC(!onCC)}
                        value={onCC}
                    />
                </View>
                <View style={{flex:1, padding:16}}>
                    <RText style={{fontSize: 16, alignSelf:'stretch'}}>
                        The first MOOCs emerged from the open educational resources (OER) movement, which was sparked by MIT OpenCourseWare project. The OER movement was motivated from work by researchers who pointed out that class size and learning outcomes had no established connection, with Daniel Barwick's work being the most often-cited example.
                        Within the OER movement, the Wikiversity was founded in 2006 and the first open course on the platform was organised in 2007. Ten-week course with more than 70 students was used to test the idea of making Wikiversity an open and free platform for education in the tradition of Scandinavian free adult education, Folk High School and the free school movement.
                    </RText>

                </View>
            </View>
            </ScrollView>
            <View style={{backgroundColor:'#fff', elevation:10, flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                <View style={{flexDirection:'row', margin:16, flex:1, justifyContent:'center', marginRight:8}}>
                        <View style={{marginRight:8}}><Image source={require('../../assets/icons/previous.png')} style={{width:24, height:24}} /></View>
                        <RText style={{color:'#717171', fontSize:16}}>Previous</RText>
                </View>
                <View style={{flexDirection:'row', margin:16, flex:1, justifyContent:'center'}}>
                <RText style={{color:'#1A1A1A', fontSize:16, marginRight:8}}>Next</RText>
                        <View><Image source={require('../../assets/icons/next.png')} style={{width:24, height:24}} /></View>
                </View>
            </View>
        </View>
    )
}

export default CourseData
