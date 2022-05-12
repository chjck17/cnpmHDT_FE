import axios from "../axios";
import authHeader from "./auth-header";
// export default function authHeader(){
//     const token = localStorage.getItem('token');
//     if(token){
//         return {
//             Headers:{
//                 'Content-Type':'application/json',
//                 'Accept':'application/json',
//                 'Authorization':`Bearer ${token}`
//             }
//         }
//     }
//     else {return {}}
// }
const getAllProduct = () => {
    return axios.get('/v1/product/list', authHeader())

}
const editProductService = (data) => {
  return axios.put('/v1/product/update',data, authHeader())

}

const getProduct = (ProductId) => {
    return axios.get(`/v1/product/get/${ProductId}`,authHeader())
  }

const getProductByCategory = (id) => {
  return axios.get(`/v1/product/products-by-category/${id}`,authHeader())
}

const deleteProduct = (ProductId) => {
    return axios.delete(`/v1/product/delete/${ProductId}`,authHeader())
  }
const createNewProductService = (data) => {
    return axios.post('/v1/product/create',data,authHeader())
  }

export {getAllProduct, deleteProduct, getProduct, createNewProductService, editProductService, getProductByCategory}