import AsyncStorage from '@react-native-async-storage/async-storage'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {SaveAsyncData, GetAsyncData, RemoveAsyncData} from './storage'
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async(data)=>{
        console.log(data)
        const response = await axios({
            method:'post',
            url:'http://192.168.43.216:5000/auth/sign_in',
            data: data
        })
        // console.log(response);
        return response.data;
    }
)
export const SignupUser = createAsyncThunk(
    'auth/SignupUser',
    async(data)=>{
        console.log(data)
        const response = await axios({
            method:'post',
            url:'http://192.168.43.216:5000/auth/sign_up',
            data: data
        }).catch(err=> console.warn(err))
        // console.log(response);
        return response.data;
    }
)
export const CheckToken = createAsyncThunk(
    'auth/CheckToken',
    async()=>{
        token = await GetAsyncData('@token');
        // console.log(token);
        return JSON.parse(token)
    }
)

export const ClearToken = createAsyncThunk(
    'auth/ClearToken',
    async()=>{
        token = await RemoveAsyncData('@token');
        // console.log(token);
        return (token)
    }
)


const AuthSlice = createSlice({
    name:'auth',
    initialState: {
        token:null,
        username:null, 
        isSaved: false
    },
    reducers:{
       
    }, 
    extraReducers:{
        [loginUser.fulfilled]:(state, {payload})=>{
            console.log(payload)
            const saved = SaveAsyncData('@token', payload)
            if(saved){
                state.isSaved = true;
            }
            console.log(saved, "saved")
            state.token = payload.token;
            state.username = payload.username;
        },
        [SignupUser.fulfilled]:(state, {payload})=>{
            // console.log(payload);
            const saved = SaveAsyncData('@token', payload);
            if(saved){
                state.isSaved = true;
            }
            state.token = payload.token;
            state.username = payload.username;
        },
        [CheckToken.fulfilled]:(state, {payload})=>{

                if(payload){
                    state.token = payload.token;
                    state.username = payload.username;
                    state.isSaved = true
                }
                        
        },
        [ClearToken.fulfilled]:(state, {payload})=>{

                
                    state.token = null;
                    state.isSaved = false
                
                        
        }
    }
})


// export const {CheckToken} = AuthSlice.actions;

export default AuthSlice.reducer