import React, { useEffect, useState } from 'react'
import { Button, Dimensions, FlatList, ScrollView, SectionList, Text, TouchableOpacity, View, Image } from 'react-native'
import { useDispatch } from 'react-redux';
import RText from '../../components/common/RText';
import SearchBar from '../../components/custom/SearchBar';
import { store } from '../../store';
import { ClearToken } from '../../store/AuthSlice';
import { request } from '../../utils/request'
import RootComponent from '../RootComponent';

const WIDTH = Dimensions.get('window').width;


const CourseDataList = [
    {
        image: require('../../assets/images/Online-Computer-Courses.jpg'),
        title: "Course Name Here",
        from: 'University Name',
        price: '399'
    },
    {
        image: require('../../assets/images/Online-Computer-Courses.jpg'),
        title: "Course Name Here",
        from: 'University Name',
        price: '399'
    },
    {
        image: require('../../assets/images/Online-Computer-Courses.jpg'),
        title: "Course Name Here",
        from: 'University Name',
        price: '399'
    },
    {
        image: require('../../assets/images/Online-Computer-Courses.jpg'),
        title: "Course Name Here",
        from: 'University Name',
        price: '399'
    },
    {
        image: require('../../assets/images/Online-Computer-Courses.jpg'),
        title: "Course Name Here",
        from: 'University Name',
        price: '399'
    },
    {
        image: require('../../assets/images/Online-Computer-Courses.jpg'),
        title: "Course Name Here",
        from: 'University Name',
        price: '399'
    },
]


function Home(props) {
    const dispatch = useDispatch()
    const [selectedOption, setSelectedOption] = useState('Popular')
    const HeaderOptionHandler = (text) => setSelectedOption(text)
    return (
        <View style={{ flex: 1 }}>
                <View style={{ padding: 16  }}></View>
                <View style={{ paddingHorizontal: 35, marginVertical: 16, width:'100%'}}>
                    <SearchBar />
                </View>
            <ScrollView
                nestedScrollEnabled={true}
                
            >
                <View>
                    <HeaderOption onPress={HeaderOptionHandler} data={selectedOption} />
                </View>
                <View style={{ marginVertical: 16 }}>
                    <TopHorizontalComponent {...props} />
                </View>
                <RText style={{ fontFamily: 'Roboto-Bold', color: '#C3073F', fontSize: 20, marginLeft: 16 }}>Latest</RText>
                <View style={{ marginVertical: 16 }}>
                    <LastActivityComponent {...props}  />
                </View>
                <RText style={{ fontFamily: 'Roboto-Bold', color: '#C3073F', fontSize: 20, marginLeft: 16 }}>You might like</RText>
                <View>
                    <YouMightLikeComponent {...props}  />
                </View>
            </ScrollView>
        </View>
    )
}

export default RootComponent(Home)


const HeaderOption = (props) => {
    return (
        <FlatList
            data={['Popular', 'Newest', 'For You', 'Recommended',"Trending"]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => props.onPress(item)}>
                    <RText onPress={() => props.onPress(item)} style={{ fontFamily: 'Roboto-Bold', marginHorizontal: 16, fontSize: 18, color: item === props.data ? "#FF5C00" : '#C4C4C4' }}  >{item}</RText>
                    <View style={{ width: 8, height: 8, borderRadius: 8, backgroundColor: item === props.data ? "#fff" : "transparent", marginVertical: 8 }}></View>
                </TouchableOpacity>
            )}
            keyExtractor={(item, index) => item + index}
        />
    )
}


const TopHorizontalComponent = (props) => {
    const textHandler = (text = "") => text.length > 44 ? text.slice(0, 41) + "..." : text
    return (
        <View>
            <FlatList
                data={CourseDataList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={{ paddingHorizontal: 16 }} onPress={()=> props.navigation.navigate('CourseHome')}>
                        <View><Image source={item.image} style={{ width: 200, height: 120, borderRadius: 15 }} /></View>
                        <View style={{ marginVertical: 16, width: 185 }}>
                            <RText style={{ fontFamily: 'Roboto-Bold', fontSize: 16, color: "#fff",height: 40, overflow:"hidden" }}>{textHandler(item.title)} </RText>
                            <RText style={{ fontSize: 14, color: '#C4C4C4', fontFamily: 'Roboto-Light' }}>{item.from}</RText>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index + "dfdfsd"}
            />
        </View>
    )
}


const LastActivityComponent = (props) => {
    const textHandler = (text = "") => text.length > 38 ? text.slice(0, 30) + "..." : text
    return (
        <View>
            <FlatList
                data={CourseDataList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={{ paddingHorizontal: 16 }} onPress={()=>props.navigation.navigate('CourseInfo')}>
                        <View><Image source={item.image} style={{ width: 145, height: 90, borderRadius: 15 }} /></View>
                        <View style={{ marginVertical: 16, width: 135 }}>
                            <RText style={{ fontFamily: 'Roboto-Bold', fontSize: 14, color: "#fff", height: 35, overflow:"hidden" }}>{textHandler(item.title)} </RText>
                            <RText style={{ fontSize: 12, color: '#C4C4C4', fontFamily: 'Roboto-Light' }}>{item.from}</RText>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index + "dfdfsd"}
            />
        </View>
    )
}

const YouMightLikeComponent = (props) => {
    const textHandler = (text = "") => text.length > 38 ? text.slice(0, 30) + "..." : text
    return (
        <View>
            {CourseDataList.map((item, index) => (
                <View key={index+"fddfdsfad"} style={{ flexDirection: 'row' , marginVertical:16}}>
                    <View style={{paddingHorizontal: 16}}>
                        <Image source={item.image} style={{ width: 100, height: 65, borderRadius: 10 }} />
                    </View>
                    <View style={{flex:1, justifyContent:'center'}}>
                        <RText style={{fontFamily: 'Roboto-Bold', fontSize: 14, color: "#fff"}}>{item.title}</RText>
                        <RText style={{fontFamily: 'Roboto-Light', fontSize: 12, color: "#C4C4C4"}}>{item.from}</RText>
                    </View>
                    <View style={{width: 50, justifyContent:'flex-end'}}>
                        <RText style={{fontFamily: 'Roboto-Light', fontSize: 12, color: "#C4C4C4"}}>$399</RText>
                    </View>
                </View>
            ))}

        </View>
    )
}