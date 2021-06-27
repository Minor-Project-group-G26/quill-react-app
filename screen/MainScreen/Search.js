import React, { useEffect, useState } from 'react'
import { Button, Dimensions, FlatList, ScrollView, SectionList, Text, TouchableOpacity, View, Image, Switch } from 'react-native'
import { useDispatch } from 'react-redux';
import RText from '../../components/common/RText';
import SearchBar from '../../components/custom/SearchBar';
import { store } from '../../store';
import { ClearToken } from '../../store/AuthSlice';
import { request } from '../../utils/request';


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


function Search(props) {
    const [FreeSwitch, setFreeSwitch] = useState(false)
    const [IsDropDown, setIsDropDown] = useState(false)
    const [DropDownSelect, setDropDownSelect] = useState('Rated')
    return (
        <View style={{flex:1, backgroundColor:'#1A1A1D'}}>
            <View style={{backgroundColor:'#E5E5E5'}}>
                <View style={{ height: 16}}></View>
                    <View style={{ paddingHorizontal: 35, marginVertical: 16, width:'100%'}}>
                        <SearchBar />
                </View>
            </View>
            <View style={{padding: 20, borderRadius:4,flexDirection:'row',justifyContent:'center', alignContent:'center', zIndex:10}}> 
                    <TouchableOpacity onPress={()=> props.navigation.navigate('FilterCategory')} style={{flexDirection:'row', paddingHorizontal:8, paddingVertical:8, backgroundColor:'#017DC2', marginRight:16}}>
                        <View style={{marginRight:6}}><Image source={require('../../assets/icons/filter01.png')} style={{width:27, height:27}}/></View>
                        <RText onPress={()=> props.navigation.navigate('FilterCategory')} style={{color:'#fff', fontFamily:'Roboto', fontSize:16}}>Filter</RText>
                    </TouchableOpacity>
                    <View style={{position:'relative'}}>
                    <TouchableOpacity onPress={()=> setIsDropDown(!IsDropDown)} style={{flexDirection:'row', paddingHorizontal:8, paddingVertical:8, backgroundColor:'#017DC2',marginRight:16}}>
                        <RText style={{color:'#fff', fontFamily:'Roboto', fontSize:16}}>Most Rated</RText>
                        <View style={{marginLeft:6}}><Image source={require('../../assets/icons/arrow-down.png')} style={{width:27, height:27}}/></View>
                    </TouchableOpacity>
                    {
                        IsDropDown?(<DropDown />):null
                    }
                    </View>
                    <View style={{flexDirection:'row',marginLeft:16, justifyContent:'flex-start', alignSelf:'center'}}>
                        <RText style={{color:'#fff', fontFamily:'Roboto', fontSize:16, textAlignVertical:'center', marginRight:1}}>Free </RText>
                        <Switch
                            trackColor={{ false: "#767577", true: "#fff" }}
                            thumbColor={"#017DC2"}
                            ios_backgroundColor="#767577"
                            onValueChange={()=> setFreeSwitch(!FreeSwitch)}
                            value={FreeSwitch}
                        />
                    </View>
                    
            </View>
            <View style={{backgroundColor:'#950740', flex:1, paddingVertical:16, borderTopLeftRadius: 23, borderTopRightRadius: 23}}>
                <CardComponent {...props} />
            </View>
        </View>
    )
}

export default Search



const CardComponent = (props) => {
    const textHandler = (text = "") => text.length > 38 ? text.slice(0, 30) + "..." : text
    return (
        <View>
            <FlatList
                data={CourseDataList}
                ItemSeparatorComponent={()=><View style={{height:1, backgroundColor:'#fff'}}></View>}
                renderItem={({item, index})=>(
                    <View key={index+"fddfdsfad"} style={{ flexDirection: 'row' , marginVertical:16}}>
                        <View style={{paddingHorizontal: 16}}>
                            <Image source={item.image} style={{ width: 105, height: 75, borderRadius: 10 }} />
                        </View>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <RText style={{fontFamily: 'Roboto-Bold', fontSize: 16, color: "#fff"}}>{item.title}</RText>
                            <RText style={{fontFamily: 'Roboto-Light', fontSize: 13, color: "#C4C4C4"}}>{item.from}</RText>
                        </View>
                    </View>
                )}
                keyExtractor={(item,index)=> index+"jdfjhdfsjhd"}
            />

        </View>
    )
}


const DropDown= ()=>(
    <View style={{width:'100%',top:'100%',position:'absolute'}}>
        <View style={{flexDirection:'row', paddingHorizontal:8, paddingVertical:8, backgroundColor:'#017DC2',marginRight:16, borderTopWidth:1, borderTopColor:'#fff'}}>
        <RText>Most Views</RText>
        </View>
        <View style={{flexDirection:'row', paddingHorizontal:8, paddingVertical:8, backgroundColor:'#017DC2',marginRight:16,borderTopWidth:1, borderTopColor:'#fff'}}>
        <RText>Most Likes</RText>
        </View>
    </View>
)