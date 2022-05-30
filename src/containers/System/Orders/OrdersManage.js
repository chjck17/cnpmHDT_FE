import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import '../Orders/OrdersManage.scss'
import {getAllOrders,getAllOrdersDetail,createNewOrdersService,editOrdersService} from '../../../services/ordersService';
import ModalEditOrders from './ModalEditOrders';
import ModalOrdersDetail from './ModalOrdersDetail';
import ModalOrders from './ModalOrders';
class OrdersManage extends Component {
// check hàm contructor 
// muốn khai báo 1 đối tượng cần tạo đầu tiên mà nó là contructor
    constructor(props) {
        super(props);
        // this là class Product manage
        this.state ={
            arrOrders: [],
            //info: [],
            isOpenModalOrders: false,
            isOpenDetailModalOrders: false,
            isCreateModalOrders: false,
            isEditModalOrders: false,
            ListOrdersDetail:[],
            EditOrdersDetail:{},
        }
    }
        /** Life cycle
     * 1. Run construct => để tạo ra các state
     * 2. Hàm Did mount ( dùng để gán giá trị cho 1 state nào đó )
     * 3. Rander ra màn hình ( xuất ra màn hình )
     */ 
    async componentDidMount() {
            await this.getAllOrdersFromReact();
    }
    getAllOrdersFromReact = async () => {
            let response = await getAllOrders();
            this.setState({
                arrOrders: response.data
            })
            console.log('eric check map ', response)
    }
    toggleDetailOrdersModal = () =>{
        this.setState ({
            isOpenDetailModalOrders: !this.state.isOpenDetailModalOrders,
            //ListOrdersDetail:null
        })
    }
    toggleEditOrdersModal = () =>{
        this.setState ({
            isEditModalOrders: !this.state.isEditModalOrders,
            //ListOrdersDetail:null
        })
    }
    toggleOrdersModal= () =>{
        this.setState ({
            isOpenModalOrders: !this.state.isOpenModalOrders,
            //ListOrdersDetail:null
        })
    }
    listOrdersDetail = async(data)=>{
        //let ret =await getAllOrdersDetail(data.ordersId);
        // console.log('click save product:',ret.data);
         this.setState ({
         isOpenDetailModalOrders:true,
         ListOrdersDetail:data.ordersId,
         })
    }
    handleEditOrders= async(data)=>{
        
         this.setState ({
            isEditModalOrders:true,
            ListOrdersDetail:data.ordersId,
            EditOrdersDetail:data,

         })
    }
    handleAddNewOrders(){
        this.setState ({
            isOpenModalOrders:true,
           // ListOrdersDetail:data.ordersId,
            })
    }
    createNewOrders = async (data) => {
         let response = await createNewOrdersService(data);
        // this.setState ({
        //     isOpenModalOrders:false,
        // });
        // location.reload();
        console.log('respones create cus: ', response)
        //console.log('check data from child: ', data)

    }
    updateNewOrders= async (data) => {
        let response = await editOrdersService(data);
       console.log('respones create cus: ', response)

   }
        render() {
            let arrOrders =this.state.arrOrders.data
            return (
                <div className="users-container">
                    <ModalOrders
                        isOpen={this.state.isOpenModalOrders}
                        toggleFromParent={this.toggleOrdersModal}
                        createNewOrders={this.createNewOrders}
                    />
                    {this.state.isOpenDetailModalOrders&&<ModalOrdersDetail
                        isOpen={this.state.isOpenDetailModalOrders}
                        toggleFromParent={this.toggleDetailOrdersModal}
                        currenListOrdersDetail = {this.state.ListOrdersDetail}
                    />
                    }
                    {this.state.isEditModalOrders&&<ModalEditOrders
                        isOpen={this.state.isEditModalOrders}
                        toggleFromParent={this.toggleEditOrdersModal}
                        updateOrders={this.updateNewOrders}
                        currenListOrdersDetail = {this.state.ListOrdersDetail}
                        EditOrdersDetail= {this.state.EditOrdersDetail}
                    />
                    }

                    <div className="title text-center">Manage Orders</div>
                    <div className="mx-1">
                        <button className="btn btn-primary px-3" onClick={()=>this.handleAddNewOrders()}>
                            <i className="fa fa-plus"></i>
                            Add New Orders
                        </button>
                    </div>
                    <div className="customers-table mt-3 mx-1">
                        <table id="customers">
                            <tbody>
                                <tr>
                                    <th>ordersId</th>
                                    <th>customerId</th>
                                    <th>ordersSaleOff</th>
                                    <th>ordersTotalMoney</th>
                                    <th>ordersVat</th>
                                    <th>ordersState</th>
                                    <th>ordersPrevState</th>
                                    <th>ordersAddress</th>
                                    <th>ordersReceiverName</th>
                                    <th>ordersReceiverPhone</th> 
                                    <th>ordersCode</th>
                                    <th>ordersPaymentMethod</th>
                            
                                    <th>Actions</th>
                                </tr>
                                {
                                    arrOrders && arrOrders.map((ss, index) => {
                                        //console.log('eric check map ', item, index)
                                        return (
                                            <tr className="divClass">
                                                
                                                <td>{ss.ordersId}</td>
                                                    <td>{ss.customerId}</td>
                                                    <td>{ss.ordersSaleOff}</td>
                                                    <td>{ss.ordersTotalMoney}</td>
                                                    <td>{ss.ordersVat}</td>                                        
                                                    <td>{ss.ordersState}</td>
                                                    <td>{ss.ordersPrevState}</td>
                                                    <td>{ss.ordersAddress}</td>
                                                    <td>{ss.ordersReceiverName}</td>
                                                    <td>{ss.ordersReceiverPhone}</td>
                                                    <td>{ss.ordersCode}</td>
                                                    <td>{ss.ordersPaymentMethod}</td>                                       
                                                <td>
                                                    <button className="btn-actions" onClick={()=>this.handleEditOrders(ss)}><i className="fa fa-pencil-square-o"></i></button>                                              
                                                    <button className="btn-actions" onClick={()=>this.listOrdersDetail(ss)}><i className="fa fa-plus-square-o"></i></button>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersManage);
