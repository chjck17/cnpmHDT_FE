import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OrdersManage.scss'
import {getOrdersByCustomerId,clientCancelOrders,getOrderDetailByOrderId} from '../../services/ordersService';
import OrderDetail from './OrderDetail';
class HistoryOderPageBody extends Component {
    constructor(props) {
        super(props);
        this.state ={
            customerId:'',
            arrOrders: [],
            orderDetail:[],
            ordersId:'',
            isOpenOrderDetail: false,
            customerUpdate: {},
        }
    }
    async componentDidMount() {
        await this.getOrdersFromReact();
    }
    getOrdersFromReact = async () => {
        let response = await getOrdersByCustomerId();
        this.setState({
            arrOrders: response.data
        })
    }
    
    handleOpenDetailOrders= async(data)=>{
        let orderdetail = await getOrderDetailByOrderId(data.ordersId);
        this.setState ({
            isOpenOrderDetail: true,
            orderDetail: orderdetail.data
        })
    }
    handleCancelOrders = async (item) => {
        try{
            var data={ordersId: item.ordersId}
            let response = await clientCancelOrders(data);
            if(response && response.response===false){
                alert(response.message)
            }else{
                await this.getOrdersFromReact();
            }
        }catch(e){
            console.log(e)
        }
    }

    toggleOrderDetail = () =>{
        this.setState ({
            isOpenOrderDetail: !this.state.isOpenOrderDetail,
        })
    }
    render() {
        let arrOrders =this.state.arrOrders.data
        return (
            <div className="users-container">
                
                {
                this.state.isOpenOrderDetail &&
                <OrderDetail
                    isOpen={this.state.isOpenOrderDetail}
                    toggleFromParent={this.toggleOrderDetail}
                    orderDetail={this.state.orderDetail}
                    
                />
                }
                <div className="title text-center">Manage Orders</div>
                <div className="mx-1">
                        <a href='/product' className="btn btn-primary btn-block">
                        Tiếp tục mua hàng
                    </a>
                </div>
                <div className="customers-table mt-3 mx-1">
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Tên người nhận</th>
                                <th>Địa chỉ nhận hàng</th>
                                <th>Số điện thoại</th>
                                <th>Phương thức thanh toán</th>
                                <th>Ngày đặt hàng</th>
                                <th>Tổng tiền</th>
                                <th>Trạng thái</th>
                                <th>Actions</th>
                            </tr>
                            {
                                arrOrders && arrOrders.map((ss, index) => {
                                    return (
                                       <tr className="divClass" background-color='#04AA6D'>
                                            <td>{ss.ordersReceiverName}</td>
                                            <td>{ss.ordersAddress}</td>  
                                            <td>{ss.ordersReceiverPhone}</td>
                                            {ss.ordersPaymentMethod==1?<td>Cod</td>:<td>Online</td>} 
                                            <td>{ss.createdDate}</td>
                                            <td>{ss.ordersTotalMoney}$</td>
                                            {ss.ordersState==0?<td>Đã tạo</td>:ss.ordersState==1?<td>Hoàn Thành</td>:<td>Đã hủy</td>}                                
                                            <td>
                                                <button className="btn-actions" onClick={()=>this.handleOpenDetailOrders(ss)}><i className="fa fa-eye" aria-hidden="true"></i></button>                                              
                                                {ss.ordersState==0? <button className="btn-actions" onClick={()=>this.handleCancelOrders(ss)}><i className="fa fa-ban" aria-hidden="true"></i></button>:<></>}
                                            </td>
                                        </tr>
                                    )
                                }) 
                            }
                        </tbody>
                    </table>
                </div>  
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryOderPageBody);
