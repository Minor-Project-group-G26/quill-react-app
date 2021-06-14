import React, { useState } from 'react';
import {Text, View, Switch} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screen/MainScreen/Home'
import FilterCategory from '../screen/MainScreen/FilterCategory'
import CourseInfo from '../screen/MainScreen/CourseInfo'
import Profile from '../screen/MainScreen/Profile'
import RText from '../components/common/RText'

const Stack = createStackNavigator()

function MainStack() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <Stack.Navigator initialRouteName="Profile">
           {/* <Stack.Screen name='Home' component={Home} /> */}
           {/* <Stack.Screen name='Filter Category' component={FilterCategory} /> */}
           {/* <Stack.Screen name='CourseInfo' component={CourseInfo} /> */}
           <Stack.Screen 
                name='Profile'
                component={Profile}
                options={{
                    title: 'Profile',
                    headerRight: () => (
                        <View style={{alignItems: 'center',marginRight:10, flexDirection: 'row'}}>
                            <View style={{paddingRight: 5}}>
                                <RText style={{fontFamily:'Roboto-Medium'}}>Instructor Mode</RText>
                            </View>
                            <View>
                            <Switch 
                                trackColor={{ false: "#B2B2B2", true: "#B2B2B2" }}
                                thumbColor={isEnabled ? "#ffffff" : "#1A1A1D"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            </View>
                        </View>
                        
                    )
                }}
            />

       </Stack.Navigator>
    )
}

export default MainStack
