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
const getAllOrders = () => {
    return axios.get('/v1/orders/list', authHeader())

}
const getAllOrdersDetail = (OrdersId) => {
  return axios.get(`/v1/orders/detail-by-orders/${OrdersId}`, authHeader())

}
const editOrdersService = (data) => {
  return axios.put('/v1/orders/update',data, authHeader())

}
const editStateOrdersService = (data) => {
  return axios.put('/v1/orders/update-state',data, authHeader())

}

const getOrders = (OrdersId) => {
    return axios.get(`/v1/orders/get/${OrdersId}`,authHeader())
  }
const deleteOrders = (OrdersId) => {
    return axios.delete(`/v1/orders/delete/${OrdersId}`,authHeader())
  }
const createNewOrdersService = (data) => {
    return axios.post('/v1/orders/create',data,authHeader())
  }

export {getAllOrders,deleteOrders, getOrders, createNewOrdersService,editOrdersService,getAllOrdersDetail,editStateOrdersService}