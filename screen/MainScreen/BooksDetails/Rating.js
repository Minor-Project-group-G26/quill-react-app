import React from 'react'
import {FontAwesome} from '@expo/vector-icons'
import { Animated, TouchableWithoutFeedback, View} from 'react-native';
import { Easing } from 'react-native-reanimated';

const numStars = 5
export default class Rating extends React.Component {
 
    state={
        rating:1,
        animation: new Animated.Value(1)
    }

    rate = star =>{
this.setState({rating:star})
    };

     animate =()=>{
        Animated.timing(this.state.animation,{
            toValue:2,
            duration:400,
            easing:Easing.ease,
            useNativeDriver:true
        }).start(()=>{
           this.state.animation.setValue(1) 
        })
    }


    render(){
    let stars = [];

    const animateScale = this.state.animation.interpolate({
        inputRange:[1, 1.5, 2],
        outputRange:[1,1.4,1]
    });

    const animateOpacity = this.state.animation.interpolate({
        inputRange:[1,1.2,2],
        outputRange:[1,0.5,1]
    });

    const animateWobble =this.state.animation.interpolate({
        inputRange:[1,1.25,1.75,2],
        outputRange:["0deg","-3deg","3deg","0deg"]
    });

    const animationStyle = {
        transform:[{scale:animateScale},{rotate:animateWobble}],
        opacity:animateOpacity
    }

    for(let x=1;x<=numStars;x++){
        stars.push(
            <TouchableWithoutFeedback 
            key={x}
            onPress={()=>{
                this.rate(x); this.animate();
            }}
            >
                {/* <Star/> */}
                <Animated.View style={x <= this.state.rating?animationStyle:""}>
                    <Star filled={x<=this.state.rating?true:false}/>
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
    return (
        <View>
            <View style={{flexDirection:'row' ,paddingHorizontal:10}}>{stars}</View>
        </View>
    )
 }
}

class Star extends React.Component{
    render(){
        return<FontAwesome name={this.props.filled === true?"star":"star-o"} color='yellow' size={24} style={{marginHorizontal:15}} />
    }
}