import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import RootComponent from '../RootComponent';
import HText from '../../components/common/HText';
import RText from '../../components/common/RText';

const InstructorData = [
    {
        name: 'Robert Dw Junior',
        workPlace: 'Wipro Pvt Limited',
        courseConducted: 32,
        studentEnrolled: 5098,
        rating:4.5,
        avatar: '../../assets/icons/instructor_img.png'
    },
    // {
    //     name: 'Robert',
    //     workPlace: 'Wipro Pvt Limited',
    //     courseConducted: 32,
    //     studentEnrolled: 5098,
    //     rating:4.5,
    //     avatar: '../../assets/icons/instructor_img.png'
    // },
    // {
    //     name: 'Robert',
    //     workPlace: 'Wipro Pvt Limited',
    //     courseConducted: 32,
    //     studentEnrolled: 5098,
    //     rating:4.5,
    //     avatar: '../../assets/icons/instructor_img.png'
    // },
]



function CourseInfo() {

    const renderInstructors = InstructorData.map((item, index) => (
    <View key={index}>
        <View style={style.AvatarDiv}>
            <Image style={style.Avatar} source={require('../../assets/icons/instructor_img.png')} />
        </View>
        <View style={style.parent}>
                <View style={style.leftDiv}>
                    <RText style={style.leftText}>Name :</RText>
                    <RText style={style.leftText}>Work Place :</RText>
                    <RText style={style.leftText}>Course Conducted :</RText>
                    <RText style={style.leftText}>Student Enrolled :</RText>
                    <RText style={style.leftText}>Rating :</RText>
                </View>
                <View style={style.rightDiv}>
                    <RText style={style.rightText}>{item.name}</RText>
                    <RText style={style.rightText}>{item.workPlace}</RText>
                    <RText style={style.rightText}>{item.courseConducted}</RText>
                    <RText style={style.rightText}>{item.studentEnrolled}</RText>
                    <View style={{flexDirection:'row'}}>
                        <RText style={style.rightText}>{item.rating}</RText>
                        <Image style={{width:14, height:14,marginVertical:8, marginLeft:3}} source={require('../../assets/icons/rating_star.png')} />
                    </View>
                    
                </View>
        </View>
    </View>
    ))

    return (
        <View style={style.box1}>
            <View style={style.header}>
                <RText style={style.headerText}>About Instructor:</RText>
            </View>
            <View style={style.InstructorCard}>
                <ScrollView>
                {renderInstructors}
                </ScrollView>
            </View>
            <View style={style.header}>
                <RText style={style.headerText}>Course Details:</RText>
            </View>
            <View style={style.courseDetail}>
                <RText style={style.courseDetailText}>
                    ENGL 309. Verse Writing (3-3)
                    Intensive practice in writing poetry. Analysis and criticism of students’ work, as well as some critical study of published verse. May be repeated once for credit.

                    LING 590A-Z. Selected Topics in Linguistics/TESL (3-3)
                    Topics will change from semester to semester and be restricted in scope and aimed at gaining depth on a particular issue in Linguistics/TESL. Critical writing and reading required. Up to two different courses in the series may be taken for credit.
                </RText>
            </View>
        </View>
    )
}

export default RootComponent(CourseInfo, false)

const style = StyleSheet.create({
    box1:{
        flex: 1,
        backgroundColor: '#C4C4C4',
    },
    header: {
        // backgroundColor: 'green',
        marginVertical: 20,
        paddingLeft: 25
    },
    headerText: {
        fontFamily: 'Roboto-Italic',
    },
    InstructorCard: {
        backgroundColor: '#99E4AE'

    },
    AvatarDiv: {
        paddingTop:10,
        alignItems: 'center'
    },
    Avatar: {
        width: 74,
        height: 74
    },
    parent: {
        marginTop: 20,
        flexDirection: 'row',
        paddingBottom:10
    },
    leftDiv: {
        paddingRight: 10,
        alignItems: 'flex-end',
        width: '50%',
        // backgroundColor: 'red'
    },
    rightDiv: {
        width: '50%',
        // backgroundColor: 'yellow'
    },
    leftText:{
        marginVertical:4,
        fontFamily: 'Roboto-Medium'
    },
    rightText:{
        fontFamily: 'Roboto-Medium-Italic',
        marginVertical:4,
        color: '#4E4E50'
    },
    courseDetail: {
        marginHorizontal: 25
    },
    courseDetailText: {
        fontFamily: 'Roboto',
        color: '#1A1A1D'
    }
})