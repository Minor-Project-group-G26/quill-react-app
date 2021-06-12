import React,{forwardRef,useCallback,useState,useEffect,createRef,useRef} from 'react'
import { Text, View,TouchableOpacity,Dimensions,SafeAreaView,StyleSheet,Animated,FlatList, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import BookList from './BookList';
const {width, height} = Dimensions.get('screen');
const DATA1 = [
  [{id: '1',title: 'Superman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '2',title: 'Amazing SpiderMan',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '3',title: 'Hulk',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
  ],
  [{id: '4',title: 'Spiderman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '5',title: 'Hulk',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '6',title: 'Superman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
  ],
  [{id: '7',title: 'Superman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '8',title: 'Amazing SpiderMan',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '9',title: 'Hulk',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
  ],
  [{id: '10',title: 'Superman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '11',title: 'Amazing SpiderMan',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '12',title: 'Hulk',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
  ],       
      ];

const DATA2 = [[{id: '1',title: 'Superman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '2',title: 'Amazing SpiderMan',image :require("../../../assets/images/superman.jpg"),r:'₹ 386',Rating:'4.5'},
              {id: '3',title: 'Hulk',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},],
              [{id: '4',title: 'Spiderman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '5',title: 'Hulk',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '6',title: 'Superman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},],
              [{id: '7',title: 'Amazing Spiderman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '8',title: 'Hulk',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},],            
              ];

const DATA3 = [[{id: '1',title: 'Superman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '2',title: 'Amazing SpiderMan',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '3',title: 'Hulk',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},],
              [{id: '4',title: 'Spiderman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '5',title: 'Spiderman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '6',title: 'Spiderman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'}
            ]             
              ];

const DATA4 = [[{id: '1',title: 'Superman',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},
              {id: '2',title: 'Amazing SpiderMan',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},          
              {id: '3',title: 'Hulk',image :require("../../../assets/images/superman.jpg"),Price:'₹ 386',Rating:'4.5'},]  
            ];
              
const data = [{key:'1',title:'Popular', ref:createRef(), con:DATA1},{key:'2',title:'Newest',ref:createRef(), con:DATA2},
              {key:'3',title:'For You',ref:createRef() ,con:DATA3},{key:'4',title:'Recommended',ref:createRef(), con:DATA4}
            ]






    // ================================================================== Logics ============================================================================= // 
const Tab = forwardRef(({item, onItemPress},ref)=>{
    return (
      <TouchableOpacity key={item.id} onPress={onItemPress} >
        <View ref={ref}>
        <Text style={{color:'#c3073f', fontSize:70/data.length,paddingLeft:10 ,fontWeight:'bold'}}>{item.title}</Text>
      </View>
      </TouchableOpacity>
    )
  });
  
  
  // =================================================================================== Indicator ================================================================== //
  
  
  const Indicator =({measures, scrollX})=>{
    const inputRange = data.map((_,i)=>(i*width));
    const z = measures.map((measure)=>(measure.x))
    const translateX = scrollX.interpolate({
      inputRange,
      outputRange:z
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
      data.forEach((item, index)=>{
        item.ref.current.measureLayout(
          containerRef.current,(x, y, width, height)=>{
            m.push({x,y,width,height});
      if(m.length === data.length)
      {
            setMeasures(m);
      }
 }
        )
      })
      // console.log(m)
      // console.log("==============================")
      // console.log(measures)
    },[]);
  
  
    return (
    <View style={{position:'absolute',top:10, width}}>
      <View ref={containerRef} style={{ justifyContent:'space-evenly',flexDirection:"row"}}>
        {data.map((item, index)=>{
          return <Tab key={item.key} item={item} ref={item.ref} onItemPress={()=>{onItemPress(index); console.log(measures)}}/>
        })}
      </View>
      {measures.length > 0 && <Indicator measures={measures} scrollX={scrollX}/>}
    </View>)
  }
  
  
  // ========================================================================================= App ======================================================================
  
  export default function Books(props) {
    const scrollX = useRef(new Animated.Value(0)).current
    
    const appref = useRef();
    
    const onItemPress = useCallback(itemIndex=>{
      appref?.current?.scrollToOffset({
        offset:itemIndex*width
      })
    })


    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'#e5e5e5',width:360,borderRadius:25,height:50, flexDirection:'row'}}>
      <TextInput
      style={{ width:340, paddingHorizontal:12, fontSize:16}}
      placeholder={"Search ..."}
      />
      <View style={{marginTop:8, marginLeft:-20}}>
         <Icon name="search" size={30} color="black" />
      </View>
      </View>
      <View style={{height:720,width,marginTop:15}}>
 
      
        <FlatList
      data={data}
      ref={appref}
      keyExtractor={(item)=>(item.key)}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      onScroll={Animated.event(
        [
          {nativeEvent:
            {contentOffset:
              {x:scrollX}
            }
          }
        ],{useNativeDriver:false}
      )}
      bounces={false}
      renderItem={({item})=>{
        return <SafeAreaView style={{width,height:655, backgroundColor:'#e5e5e5',justifyContent:'center',paddingTop:18}}>
                <BookList data={item.con}/>
              </SafeAreaView>
      }}
      />
      <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress}/>
      </View>
     </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width:width, 
      height:height,
      backgroundColor: '#9f0b38',
      alignItems: 'center',
      justifyContent: 'center',
    },
    AnimView:{
      position:'absolute',
      height:10,
      width:10,
      borderRadius:5,
      backgroundColor:'white',
      bottom:-11,
      left:35,
      
    }
  });























  // ===================================================================== Main Return =========================================================================== //
