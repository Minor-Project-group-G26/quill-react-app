import {createSlice} from '@reduxjs/toolkit'



const SampleSlice = createSlice({
    name:'sample',
    initialState: {
        sample: 0
    },
    reducers:{
        incement: (state)=>{
            state.sample++
        },
        decrement:(state)=>{
            state.sample--;
        }
    }
})


export const {incement, decrement} = SampleSlice.actions;

export default SampleSlice.reducer