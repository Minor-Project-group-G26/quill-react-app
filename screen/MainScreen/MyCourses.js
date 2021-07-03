import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View, Image, Dimensions, Animated } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import RText from '../../components/common/RText'
import CProgressBar from '../../components/custom/CProgressBar';
import CModal from '../../components/popup/CModal';

const OPTIONS = ['All', 'Ongoing', 'Completed'];


const CourseDataList = [
    {
        image: require('../../assets/images/Online-Computer-Courses.jpg'),
        title: "Course Name Here",
        from: 'University Name',
        completed: 75
        
    },
    {
        image: require('../../assets/images/Online-Computer-Courses.jpg'),
        title: "Course Name Here",
        from: 'University Name',
        completed: 0
    },
    {
        image: require('../../assets/images/Online-Computer-Courses.jpg'),
        title: "Course Name Here",
        from: 'University Name',
        completed: 10
    },
    {
        image: require('../../assets/images/Online-Computer-Courses.jpg'),
        title: "Course Name Here",
        from: 'University Name',
        completed: 50
    },
    {
        image: require('../../assets/images/Online-Computer-Courses.jpg'),
        title: "Course Name Here",
        from: 'University Name',
        completed: 20
        
    },
    {
        image: require('../../assets/images/Online-Computer-Courses.jpg'),
        title: "Course Name Here",
        from: 'University Name',
        completed: 80
    },
    {
        image: require('../../assets/images/Online-Computer-Courses.jpg'),
        title: "Course Name Here",
        from: 'University Name',
        completed: 50
    },
    {
        image: require('../../assets/images/Online-Computer-Courses.jpg'),
        title: "Course Name Here",
        from: 'University Name',
        completed: 20
        
    },
    {
        image: require('../../assets/images/Online-Computer-Courses.jpg'),
        title: "Course Name Here 2",
        from: 'University Name',
        completed: 80
    },
]
const WIDTH = Dimensions.get('window').width

function MyCourses() {

    const [option, setOption] = useState(0)

    // const [ModalVisible, setModalVisible] = useState(true)

    return (
        <View style={{flex:1}}>
            <View style={{ paddingVertical:16, alignItems:'center'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:16, width:WIDTH*0.9,}}>
                    {OPTIONS.map((item, index)=>(
                        <RText 
                            key={"ndfjkgdj"+index} 
                            style={{fontSize: 14, color:index===option?"#000":"#717171" ,fontFamily:'Roboto',backgroundColor:option===index?'#C4C4C4':"transparent", paddingVertical:8, paddingHorizontal:16, borderRadius: 16}}
                            onPress={()=> setOption(index)}
                            >
                        {item}</RText>
                    ))}

                </View>
                </View>
                <View style={{  flex:1}}>
                   <FlatList
                    data={CourseDataList}
                    style={{paddingHorizontal:WIDTH*0.05}}
                    keyExtractor={(item, index)=>"asfdsfsaafaaf"+index}
                    ItemSeparatorComponent={()=><View style={{height:6}} />}
                    ListFooterComponent={()=><View style={{height:8}} />}
                    renderItem={({item, index})=>(
                        <TouchableOpacity>
                        <View style={{flexDirection:'row'}}>
                            <View >
                                <Image source={CourseDataList[0].image} style={{width:105, height:65, borderRadius:10}} />
                            </View>
                            <View style={{marginHorizontal: 16}}>
                                <RText style={{fontFamily:'Roboto-Bold', fontSize:14, color:'#1A1A1D'}}>{item.title}</RText>
                                <RText style={{fontFamily:'Roboto-Light', fontSize:12}}>{item.from}</RText>
                            </View>
                        </View>
                        <View style={{marginVertical:16}}>
                            <CProgressBar backgroundColor="#E5E5E5" loaderColor={"#4EE278"} Percentage={+item.completed}/>
                        </View>
                   </TouchableOpacity>
                    )}
                   />
                </View>

                {/* <CModal 
                Visible={ModalVisible} 
                text={'Do You Want to Buy this ?'} 
                ChangeVisible={()=>setModalVisible(false)} 
                ConfirmHandler={()=> console.log('confirmed')} 
                CancelHandler={()=> console.log('canceled')} />
                 */}
        </View>
    )
}

export default MyCourses
