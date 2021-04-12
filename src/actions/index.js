// List of actions and we can have as many functions.
// They return an object with a 'type' and 'payload'.
import axios from 'axios';

const URL = 'http://127.0.0.1:8000'


export function signInUser(values, cb){
    // console.log(values)
    var form_data = new FormData();

    for ( var key in values) {
        form_data.append(key, values[key]);
    }
    const response = axios.post(`${URL}/users/login`, form_data)
                    .then(response =>{
                        return response.data
                    }).catch(error=>{
                        return error.response.data
                    })

    return{
        type: 'SIGNIN',
        payload: response
    }
}

export function signUpUser(values){
    
    var form_data = new FormData();

    for ( var key in values) {
        form_data.append(key, values[key]);
    }
    const response = axios.post(`${URL}/users/signup`, form_data)
                    .then(
                        response=>response.data
                    )
                    .catch(error=>error.response.data)
  
        return{
            type: 'SIGNUP',
            payload: response
        }
    
}