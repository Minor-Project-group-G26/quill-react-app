import AsyncStorage from "@react-native-async-storage/async-storage"

export const GetAsyncData = async(key)=>{
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data)
}
export const SaveAsyncData = async(key, value)=>{
    const data = await AsyncStorage.setItem(key, JSON.stringify(value));
    return true
}