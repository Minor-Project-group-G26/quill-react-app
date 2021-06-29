import {configureStore} from '@reduxjs/toolkit' ;
import AuthSlice from './AuthSlice';
import RouterSlice from './RouterSlice';
import SwapStoreSlice from './SwapStoreSlice';
import UserSlice from './UserSlice';
// import {} from '@reduxjs/toolkit'


const store = configureStore({
    reducer:{
        auth: AuthSlice,
        swapStore: SwapStoreSlice,
        // routerController: RouterSlice
        user: UserSlice
    }
})


export default store