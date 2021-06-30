import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { request } from '../utils/request'
import { SaveAsyncData, GetAsyncData, RemoveAsyncData } from './storage'




export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (data) => {
        console.log(data)
        const response = await axios({
            method: 'post',
            url: 'http://192.168.0.6:5000/auth/sign_in',
            data: data
        })
        // console.log(response);
        return response.data;
    }
)
export const SignupUser = createAsyncThunk(
    'auth/SignupUser',
    async (data) => {
        console.log(data)
        const response = await axios({
            method: 'post',
            url: 'http://192.168.0.6:5000/auth/sign_up',
            data: data
        }).catch(err => console.warn(err))
        // console.log(response);
        return response.data;
    }
)
export const UpdateUser = createAsyncThunk(
    'auth/UpdateUser',
    async (data,{rejectWithValue}) => {
        console.log(data)
        const response = await request(
            'put',
            'user/update',
             data
        ).catch(err => console.warn(err))
        console.log(response.data)
        if(response===null)
        return {}
        console.log(response.data);
        return data;
    }
)
export const UpdateUserProfile = createAsyncThunk(
    'auth/UpdateUserProfile',
    async (data,{rejectWithValue}) => {
        console.log(data)
        const response = await request(
            'upload',
            'user/update_image',
             data
        ).catch(err => console.warn(err))
        console.log(response.data)
        if(response===null)
        return {}
        console.log(response.data);
        return response.data;
    }
)
export const CheckToken = createAsyncThunk(
    'auth/CheckToken',
    async (data, {rejectWithValue}) => {
        let Data = await GetAsyncData('@token');
        Data = JSON.parse(Data)
        console.log("========User======")
        console.log(Data)
        const response = await axios({
            method: 'get',
            url: 'http://192.168.0.6:5000/user',
            headers:{
                token: Data.token,
                'Content-Type':"application/json" 
            }
        })
        const {tokenErr} = response.data;
        console.log(tokenErr)
        if(tokenErr)
        return rejectWithValue(tokenErr)
        console.log(response.data);
        return {user: response.data,token:Data.token}
    }
)

export const ClearToken = createAsyncThunk(
    'auth/ClearToken',
    async () => {
        token = await RemoveAsyncData('@token');
        // console.log(token);
        return (token)
    }
)


const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        username: null,
        isSaved: false,
        user:{username: "", email: "", name: "", verification: false, dob:"", occupation:"",
            instructor:false, profile:null,  block_data: false,phone:"",
            enrollments: {
              ongoing: 0,
              completed: 0}
        }
    },
    reducers: {

    },
    extraReducers: {
        [loginUser.fulfilled]: (state, { payload }) => {
            console.log(payload)
            const saved = SaveAsyncData('@token', payload)
            if (saved) {
                state.isSaved = true;
            }
            console.log(saved, "saved")
            state.token = payload.token;
            state.username = payload.username;
        },
        [SignupUser.fulfilled]: (state, { payload }) => {
            // console.log(payload);
            const saved = SaveAsyncData('@token', payload);
            if (saved) {
                state.isSaved = true;
            }
            state.token = payload.token;
            state.username = payload.username;
        },
        [UpdateUser.fulfilled]: (state, { payload }) => {
            console.log("Payload", payload);
            state.user = {...state.user, ...payload}
        },
        [UpdateUserProfile.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.user.profile = payload.filename
            // state.user = {...state.user, payload}
        },
        [CheckToken.fulfilled]: (state, { payload }) => {

                state.token = payload.token;
                state.username = payload.username;
                state.user = payload.user
                state.isSaved = true

        },
        [CheckToken.rejected]: (state, { payload }) => {

                state.token = null;
                state.username = null;
                state.isSaved = false

        },
        [ClearToken.fulfilled]: (state, { payload }) => {

            state.token = null;
            state.isSaved = false
        }
        // [GetUserDetails.rejected]: (state, { payload }) => {
        //     state.user = null
        //     state.token = null
        //     // token = await RemoveAsyncData('@token');
        //     state.username = null
        // }
    }
})


// export const {CheckToken} = AuthSlice.actions;

export default AuthSlice.reducer