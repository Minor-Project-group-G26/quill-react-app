import React, { useEffect, useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import RText from '../components/common/RText'
import { Text,View,Image,TouchableOpacity, Switch } from 'react-native'
import Profile from '../screen/MainScreen/Profile'
import Books from '../screen/MainScreen/Books';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleInstructor } from '../store/UserSlice';

const Stack = createStackNavigator()

export function ProfileStack({navigation}) {


    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    console.log(user)
    const toggleSwitch = () => dispatch(ToggleInstructor())

    const [ThemeColor, setThemeColor] = useState({
        backgroundColor: '#fff',
        textColor: '#000'
    })

    useEffect(() => {
        if(user.instructorMode){
            setThemeColor({
                ...ThemeColor,
                backgroundColor: '#C3073F',
                textColor: '#fff'
            })
        }
        else{
            setThemeColor({
                ...ThemeColor,
                backgroundColor: '#fff',
                textColor: '#000'
            })
        }
        
    },[user])

    return (
        <Stack.Navigator initialRouteName='Profile'>
            <Stack.Screen 
                name='Profile'
                component={Profile}
                options={{
                    title: 'Profile',
                    headerTitleStyle:{
                        color: ThemeColor.textColor
                    },
                    headerStyle: {
                        backgroundColor: ThemeColor.backgroundColor
                    },
                    headerRight: () => (
                        <View style={{alignItems: 'center',marginRight:10, flexDirection: 'row'}}>
                            <View style={{paddingRight: 5}}>
                                <RText style={{fontFamily:'Roboto-Medium', color: ThemeColor.textColor}}>Instructor Mode</RText>
                            </View>
                            <View>
                            <Switch 
                                trackColor={{ false: "#B2B2B2", true: "#B2B2B2" }}
                                thumbColor={user.instuctorMode ? "#ffffff" : "#1A1A1D"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={user.instructorMode}
                            />
                            </View>
                        </View>
                        
                    ),
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingLeft: 15}}>
                            <Image style={{height: 27, width: 27, tintColor:ThemeColor.textColor}} source={require('../assets/icons/arrow-back.png')} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
        
    )
}

export function BooksHomeStack() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <Stack.Navigator initialRouteName='Profile'>
            <Stack.Screen 
                name='Books'
                component={Books}
                options={{
                    title: 'Books',
                }}
            />
        </Stack.Navigator>
        
    )
}

