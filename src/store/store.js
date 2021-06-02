import {configureStore} from '@reduxjs/toolkit' ;
import SampleSlice from '../feature/SampleSlice';
// import {} from '@reduxjs/toolkit'


export const store = configureStore({
    reducer:{
        sample: SampleSlice        
    }
})