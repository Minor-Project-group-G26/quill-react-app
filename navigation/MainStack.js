import React from 'react'
// import {Text, View} from 'react-native'
import {Image, TouchableOpacity} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screen/MainScreen/Home'
// import BookList from '../screen/MainScreen/Books/BookList'
// import Books from '../screen/MainScreen/Books'
import BooksDetails from '../screen/MainScreen/BooksDetails'
import Wishlist from '../screen/MainScreen/Wishlist'
import RText from '../components/common/RText'


const Stack = createStackNavigator()

function MainStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
           {/* <Stack.Screen name='Home' component={Home} /> */}
           {/* <Stack.Screen name='Books' component={BooksDetails}  options={{
               headerRight:()=>(
                    <TouchableOpacity style={{height:39,width:39,borderRadius:12,marginRight:30, marginBottom:-7}}>
                        <Image source={require('../assets/icons/wishlist.png')} style={{height:30,width:30}}/>
                    </TouchableOpacity>
                ),
                headerTitle:()=>(<RText style={{fontFamily:'Roboto-Bold',fontSize:24}}>The Hypocrite World</RText>)}}/> */}
           {/* <Stack.Screen name='Books' component={Books} /> */}
           <Stack.Screen name="Wishlist" component={Wishlist}/>
       </Stack.Navigator>
    )
}

export default MainStack
