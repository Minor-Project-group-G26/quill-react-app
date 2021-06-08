import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { request } from '../utils/request'

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async(data)=>{
        console.log(data)
        const response = await axios({
            method:'post',
            url:'http://192.168.0.6:5000/auth/sign_in',
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
            url:'http://192.168.0.6:5000/auth/sign_up',
            data: data
        }).catch(err=> console.warn(err))
        // console.log(response);
        return response.data;
    }
)


const AuthSlice = createSlice({
    name:'auth',
    initialState: {
        token:null,
        username:null
    },
    reducers:{
        check:(state)=>{
            state
        }
    }, 
    extraReducers:{
        [loginUser.fulfilled]:(state, {payload})=>{
            console.log(payload)
            state.token = payload.token;
            state.username = payload.username 
        },
        [SignupUser.fulfilled]:(state, {payload})=>{
            console.log(payload)
            state.token = payload.token;
            state.username = payload.username 
        }
    }
})


// export const {incement, decrement} = SampleSlice.actions;

export default AuthSlice.reducer