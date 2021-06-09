import {configureStore} from '@reduxjs/toolkit' ;
import AuthSlice from './AuthSlice';
import SampleSlice from './SampleSlice';
// import {} from '@reduxjs/toolkit'


const store = configureStore({
    reducer:{
        auth: AuthSlice,
        sample: SampleSlice,
    }
})


export default store