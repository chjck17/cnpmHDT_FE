import axios from "../axios"

const handleLoginApi = (username,password) => {
    return axios.post('/v1/account/login', {username,password});
}
const getAllCustomers = () => {
    return axios.get('/v1/customer/list');
//    const response =await axios.get('/v1/customer/list');
//    console.log(response)
}
export {handleLoginApi, getAllCustomers}