import axios from "../axios"
import authHeader from './auth-header.js';

const getAllCategories = () => {
    return axios.get('/v1/category/list',authHeader())
}

const createNewCategory = (data) => {
    return axios.post('/v1/category/create',data,authHeader())
}

export {getAllCategories,createNewCategory}