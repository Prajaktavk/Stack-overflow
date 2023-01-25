import thunk from 'redux-thunk'
import * as api from '../api'
import { setCurrentUser } from './currentUser'
// react thunk used to do asynchronus operations

export const signup = (authData, navigate) => async (dispatch) => {

    //the email, password, name comes here from the auth.jsx page
    //the api.signup is in the page api/index.js 
    try {
        const { data } = await api.signUp(authData)
        dispatch({ type: 'AUTH', data})
        //checks the type and goes to the reducers auth.js

        //The profile of the user
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))


        //navigate to home page 
        navigate('/')
    } catch (error) {
        console.log(error)
    }
  
}

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
 
}