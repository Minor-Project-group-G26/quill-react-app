import AsyncStorage from "@react-native-async-storage/async-storage"

export const GetAsyncData = (key)=>
    AsyncStorage.getItem(key).then(data=>(data))

export const SaveAsyncData = (key, value)=>{
    console.log("Save data", value)
    const data =  AsyncStorage.setItem(key, JSON.stringify(value));
    return true
}

export const RemoveAsyncData =(key)=>
    AsyncStorage.removeItem(key).then(res=> res)