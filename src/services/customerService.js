import axios from "../axios"
import authHeader from './auth-header'
const getAllCustomers = ()=> {
    return axios.get('/v1/customer/list', authHeader);
}

export {getAllCustomers}