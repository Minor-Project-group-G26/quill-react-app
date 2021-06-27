
import {createSlice} from '@reduxjs/toolkit'


const User = {
    username:"",
    email:"",
    name: "",
    dob: "",
    wishList:{
        books: [],
        courses: []
    }
}


const UserSlice = createSlice({
    name: 'user',
    initialState:User, 
    reducers:{
        setUserData: (state, action)=>{
            state.email = action.payload.email
            state.username = action.payload.username
            state.dob = action.payload.dob
            state.name = action.payload.name
        },
        wishListBookAdd: (state, action)=>{
            state.wishList.books.push(action.payload)
            
        },
        wishListCourseAdd: (state, action)=>{
            state.wishList.courses.push(action.payload)
        }
    }
})



export const {setUserData, wishListBookAdd, wishListCourseAdd} = UserSlice.actions



export default UserSlice.reducer