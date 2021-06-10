import React from 'react'
// import {Text, View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screen/MainScreen/Home'
// import BookList from '../screen/MainScreen/Books/BookList'
// import Books from '../screen/MainScreen/Books'
import BooksDetails from '../screen/MainScreen/BooksDetails'

const Stack = createStackNavigator()

function MainStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
           {/* <Stack.Screen name='Home' component={Home} /> */}
           {/* <Stack.Screen name='Books' component={BookList} /> */}
           {/* <Stack.Screen name='Books' component={Books} /> */}
           <Stack.Screen name="Description" component={BooksDetails}/>
       </Stack.Navigator>
    )
}

export default MainStack
