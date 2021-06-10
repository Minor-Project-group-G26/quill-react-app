import React, { useEffect } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './AuthStack'
import MainStack from './MainStack'
import { useDispatch, useSelector } from 'react-redux'
import { CheckToken } from '../store/AuthSlice'

function NavContoller() {
    const {token, isSaved} = useSelector(state => state.auth);
    // const token = null;
    const dispatch = useDispatch()
    console.log(token)
    useEffect(() => {
        
        dispatch(CheckToken())
        
    }, [isSaved, token])
    return (<>
            {token !== null
            ?(
                <AuthStack />                
            ):(
                <MainStack /> 
            )}
        </>
    )
}

export default NavContoller