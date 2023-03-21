import { FETCH_USERS_REQUEST,FETCH_USERS_ERROR,FETCH_USERS_SUCCESS } from "./userTypes"
import axios from 'axios'
export const fetchUsersRequest=()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users =>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchUsersError = error =>{
    return{
        type:FETCH_USERS_ERROR,
        payload:error
    }
}

export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
           const users=response.data
           dispatch(fetchUsersSuccess(users))
        })
        .catch(error =>{
            const errorMsg=error.message
           dispatch(fetchUsersError(errorMsg))
        })
    }
}
