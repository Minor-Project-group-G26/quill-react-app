import {createSlice} from '@reduxjs/toolkit'



const RouterSlice = createSlice({
    name:'sample',
    initialState: {
        current:'Home',
        stack:['Home']
    },
    reducers:{
        PushRoute: (state, {payload})=>{
            state.current = payload.route
            state.stack.push(payload.route)
        },
        // CoursesStore: (state)=>{
        //     state.store = 'courses'
        // },
        // BooksStore: (state)=>{
        //     state.store = 'books'
        // },
    }
})


export const {PushRoute} = RouterSlice.actions;

export default RouterSlice.reducer