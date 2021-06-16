import React, { forwardRef, useCallback, useState, useEffect, createRef, useRef } from 'react'
import { Text, View, TouchableOpacity, Dimensions, SafeAreaView, StyleSheet, Animated, FlatList, Image, TextInput } from 'react-native'
import { color } from 'react-native-reanimated';
import Search from '../../../assets/icons/s.png'

import BookList from './BookList';
const { width, height } = Dimensions.get('screen');
const DATA1 = [
  [{ id: '1', title: 'Superman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
  { id: '2', title: 'Amazing SpiderMan', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
  { id: '3', title: 'Hulk', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
  ],
  [{ id: '4', title: 'Spiderman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
  { id: '5', title: 'Hulk', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
  { id: '6', title: 'Superman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
  ],
  [{ id: '7', title: 'Superman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
  { id: '8', title: 'Amazing SpiderMan', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
  { id: '9', title: 'Hulk', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
  ],
  [{ id: '10', title: 'Superman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
  { id: '11', title: 'Amazing SpiderMan', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
  { id: '12', title: 'Hulk', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
  ],
];

const DATA2 = [[{ id: '1', title: 'Superman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
{ id: '2', title: 'Amazing SpiderMan', image: require("../../../assets/images/superman.jpg"), r: '₹ 386', Rating: '4.5' },
{ id: '3', title: 'Hulk', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },],
[{ id: '4', title: 'Spiderman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
{ id: '5', title: 'Hulk', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
{ id: '6', title: 'Superman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },],
[{ id: '7', title: 'Amazing Spiderman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
{ id: '8', title: 'Hulk', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },],
];

const DATA3 = [[{ id: '1', title: 'Superman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
{ id: '2', title: 'Amazing SpiderMan', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
{ id: '3', title: 'Hulk', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },],
[{ id: '4', title: 'Spiderman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
{ id: '5', title: 'Spiderman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
{ id: '6', title: 'Spiderman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' }
]
];

const DATA4 = [[{ id: '1', title: 'Superman', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
{ id: '2', title: 'Amazing Spider Mancdxgfcfgchgg', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },
{ id: '3', title: 'Hulk', image: require("../../../assets/images/superman.jpg"), Price: '₹ 386', Rating: '4.5' },]
];

const data = [{ key: '1', title: 'Popular', ref: createRef(), con: DATA1 }, { key: '2', title: 'Newest', ref: createRef(), con: DATA2 },
{ key: '3', title: 'For You', ref: createRef(), con: DATA3 }, { key: '4', title: 'Recommended', ref: createRef(), con: DATA4 }
]




// =================================================================================== Indicator ================================================================== //


const Indicator = ({ scrollX }) => {
  const inputRange = data.map((_, i) => (i * width));
 const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [width*0.032,width*0.235,width*0.438,width*0.721]
  });
  return (<Animated.View
    style={[styles.AnimView, { transform: [{ translateX }] }]} />
  );

}


// ======================================================================= Tabs ============================================================================== //


const Tabs = ({ data, scrollX, onItemPress }) => {

    const [c, setc] = useState(0)
  const colorSetup = (z) =>{
    setc(z);
    // console.log(c)
  }

  const containerRef = useRef();
  return (
    <View style={{ position: 'absolute', top: 10, width }}>
      <View style={{ justifyContent: 'space-evenly', flexDirection: "row"}}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => {onItemPress(index);colorSetup(index)}}  >
            <View ref={containerRef} >
              <Text style={{ color:(c===index)?'#ff5c00':'#c3073f', fontSize: 70 / data.length, paddingLeft: 10, fontWeight: 'bold' }}>{item.title}</Text>
            </View>
            </TouchableOpacity>
          )
        })}
      </View>
      <Indicator scrollX={scrollX} />
    </View>)
}


// ========================================================================================= App ======================================================================

export default function Books(props) {
  const scrollX = useRef(new Animated.Value(0)).current

  const appref = useRef();

  const onItemPress = useCallback((itemIndex) => {
    appref?.current?.scrollToOffset({
      offset: itemIndex * width
    })
  })


  return (
    <View style={styles.container}>

<View style={{height:90,alignItems:'center',justifyContent:'center'}}>
      <View style={{ backgroundColor: '#c4c4c4', width: width * 0.85, borderRadius: 25, height: height * 0.064, flexDirection: 'row' }}>
        <TextInput
          style={{ width: width * 0.60, marginHorizontal: width * 0.063, fontSize: 14, color: '#1a1a1d' }}
          placeholder={"Search ..."}
          placeholderTextColor={"#1a1a1d"}
        />
        <TouchableOpacity style={{ marginTop: height * 0.0176, marginRight: width * (0.050) }}>
          <Image source={Search} style={{ height: 25, width: 25 }} />
        </TouchableOpacity>
      </View>

</View>


      <View style={{ height: 660,}}>
        <FlatList
          data={data}
          ref={appref}
          keyExtractor={(item) => (item.key)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={false}
          scrollEnabled={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent:
                {
                  contentOffset:
                    { x: scrollX }
                }
              }
            ], { useNativeDriver: false }
          )}
          bounces={false}
          renderItem={({ item }) => {
            return <View style={{ width, height: height * 0.80, backgroundColor: '#e5e5e5', justifyContent: 'center', paddingTop:20, paddingBottom:90 }}>
              <BookList data={item.con} />
            </View>
          }}
        />
        <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#9f0b38',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  AnimView: {
    position: 'absolute',
    height: height * 0.0117,
    width: width * 0.0255,
    borderRadius: 5,
    backgroundColor: 'white',
    bottom: height * (-0.020),
    left: width * 0.089,

  },
  list1:{ color:'#c3073f', fontSize: 70 / data.length, paddingLeft: 10, fontWeight: 'bold' },
  list2:{ color:'orange'}
});























  // ===================================================================== Main Return =========================================================================== //
