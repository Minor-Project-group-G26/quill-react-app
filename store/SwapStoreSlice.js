import {createSlice} from '@reduxjs/toolkit'



const SwapStoreSlice = createSlice({
    name:'swapStore',
    initialState: {
        store: "Courses",
        status:'idle' 
    },
    reducers:{
        ToggleStore: (state)=>{
            if(state === 'Courses')
            state.store = 'Books'
            else
            state.store = 'Courses'
        },
        CoursesStore: (state)=>{
            state.store = 'Courses'
        },
        BooksStore: (state)=>{
            state.store = 'Books'
        },
    }
})


export const {ToggleStore, CoursesStore, BooksStore} = SwapStoreSlice.actions;

export default SwapStoreSlice.reducer