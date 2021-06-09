import { StatusBar } from 'expo-status-bar';
import React,{forwardRef,useCallback,useState,useEffect,createRef,useRef} from 'react'
import { Text, View,TouchableOpacity,Dimensions,StyleSheet,Animated} from 'react-native'

import BookList from './BookList';
const {width, height} = Dimensions.get('screen');
const DATA1 = [{id: '1',title: 'Superman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '2',title: 'Amazing SpiderMan',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '3',title: 'Hulk',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '4',title: 'Spiderman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '5',title: 'Hulk',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '6',title: 'Superman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},       
              ];

const DATA2 = [{id: '1',title: 'Superman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '2',title: 'Amazing SpiderMan',image :require("../../../assets/images/superman.jpg"),r:'₹ 386',Rating:'4.5'},
              {id: '3',title: 'Hulk',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '4',title: 'Spiderman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '5',title: 'Hulk',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '6',title: 'Superman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '7',title: 'Amazing Spiderman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '8',title: 'Hulk',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},            
              ];

const DATA3 = [{id: '1',title: 'Superman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '2',title: 'Amazing SpiderMan',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '3',title: 'Hulk',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '4',title: 'Spiderman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},             
              ];

const DATA4 = [{id: '1',title: 'Superman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '2',title: 'Amazing SpiderMan',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},          
              {id: '3',title: 'Hulk',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},  
            ];
              
const data = [{key:1,title:'Popular', ref:createRef(), con:DATA1},{key:2,title:'Newest',ref:createRef(), con:DATA2},
              {key:3,title:'For You',ref:createRef() ,con:DATA3},{key:4,title:'Recommended',ref:createRef(), con:DATA4}
            ]






    // ================================================================== Logics ============================================================================= //




    
const Tab = forwardRef(({item, onItemPress},ref)=>{
    return (
      <TouchableOpacity onPress={onItemPress}>
        <View ref={ref}>
        <Text style={{color:'#c3073f', fontSize:70/data.length,paddingLeft:10 ,fontWeight:'bold'}}>{item.title}</Text>
      </View>
      </TouchableOpacity>
    )
  });
  
  
  // =================================================================================== Indicator ================================================================== //
  
  
  const Indicator =({measures, scrollX})=>{
    const inputRange = data.map((dp,i)=>i*width);
    const translateX = scrollX.interpolate({
      inputRange,
      outputRange:measures.map((measure)=> measure.x)
    });
    return (<Animated.View
        style={[styles.AnimView, {transform:[{translateX}]}]}/>
    );
  
  }
  
  
  // ======================================================================= Tabs ============================================================================== //
  
  const Tabs = ({data, scrollX, onItemPress})=>{
    const [measures,setMeasures] = useState([]);
    const containerRef = useRef();
    useEffect(()=>{
      const m = [];
      data.forEach(item=>{
        item.ref.current.measureLayout(containerRef.current,(x, y, width, height)=>{
                                                                                      m.push({x,y,width,height,});
                                                                                      if(m.length === data.length)
                                                                                      setMeasures(m);
                                                                                  }
        )
      })
    },[]);
  
  
    return (
    <View style={{position:'absolute',top:30, width}}>
      <View ref={containerRef} style={{ justifyContent:'space-evenly',flexDirection:"row"}}>
        {data.map((item, index)=>{
          return (<Tab key={item.key} item={item} ref={item.ref} onItemPress={()=>onItemPress(index)}/>)
        })}
      </View>
      {measures.length > 0 && <Indicator measures={measures} scrollX={scrollX}/>}
    </View>)
  }
  
  
  // ========================================================================================= App ======================================================================
  
  export default function Books(props) {
    const scrollX = useRef(new Animated.Value(0)).current
    const ref = useRef();
    const onItemPress = useCallback(itemIndex=>{
      ref?.current?.scrollToOffset({
        offset:itemIndex*width
      })
    })
    return (
      <View style={styles.container}>
      <View style={{height:600,width,top:79}}>
        <StatusBar hidden />
      <View>
      <Text>
      Hello
      </Text>
      </View>
        <Animated.FlatList
      data={data}
      ref={ref}
      keyExtractor={item=>item.key}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      onScroll={Animated.event(
        [{nativeEvent:{contentOffset:{x:scrollX}}}],
        { useNativeDriver: false}
      )}
      bounces={false}
      renderItem={({item})=>{
        return (<View style={{width,height, backgroundColor:'#e5e5e5',justifyContent:'center',paddingTop:12}}>
                <BookList data={item.con}/>
              </View>)
      }}
      />
      <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress}/>
      </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#c3073f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    AnimView:{
      position:'absolute',
      height:10,
      width:10,
      borderRadius:5,
      backgroundColor:'white',
      bottom:-10,
      left:40,
      
    }
  });























  // ===================================================================== Main Return =========================================================================== //
