import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'User',
    initialState: {
        instructorMode : false
    },
    reducers: {
        ToggleInstructor: (state) => {
            state.instructorMode = !state.instructorMode
        }
    },
})

export const {ToggleInstructor} = UserSlice.actions;

export default UserSlice.reducer