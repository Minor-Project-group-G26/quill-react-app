import React, { useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import RText from '../components/common/RText'
import { Text,View,Image,TouchableOpacity, Switch } from 'react-native'
import Profile from '../screen/MainScreen/Profile'
import Books from '../screen/MainScreen/Books';

const Stack = createStackNavigator()

export function ProfileStack() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <Stack.Navigator initialRouteName='Profile'>
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

