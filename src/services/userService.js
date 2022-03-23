import axios from "../axios"
import authHeader from './auth-header';
const handleLoginApi = (username,password) => {
    return axios.post('/v1/account/login',{username,password});
}
const baseHeader = {
    'Content-Type': 'application/json',
    'Accept': '*/*'
}

const getAllUsers = () => {
    const token = localStorage.getItem('token');
    console.log('token la: ',token)
    if(token){
        return axios.get('/v1/account/list',{ headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }})
    }
    
}

export {handleLoginApi,getAllUsers}