import {configureStore} from '@reduxjs/toolkit' ;
import AuthSlice from '../feature/AuthSlice';
import SampleSlice from '../feature/SampleSlice';
// import {} from '@reduxjs/toolkit'


export const store = configureStore({
    reducer:{
        sample: SampleSlice,
        auth: AuthSlice
    }
})