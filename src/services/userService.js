import axios from "../axios"

const handleLoginApi = (username,password) => {
    return axios.post('/v1/account/login', {username,password});
}

export {handleLoginApi}