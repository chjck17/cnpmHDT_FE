import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './CustomerManage.scss';
import {getAllCustomers, deleteCustomer, getCustomer, createNewCustomerService, updateCustomerService} from '../../../services/customerService';
import ModalCustomer from './ModalCustomer';
import { emitter} from "../../../utils/emitter";
import ModalUpdateCustomer from './ModalUpdateCustomer';

class CustomerManage extends Component {

    constructor(props) {
        super(props);
        this.state ={
            arrCustomer: [],
            isOpenModalCustomer: false,
            isOpenModalUpdateCustomer: false,
            customerUpdate: {},
        }
    }

    async componentDidMount() {
        await this.getAllCustomersFromReact();
    }

    getAllCustomersFromReact = async () => {
        let response = await getAllCustomers();
        if (response && response.result===true){
            this.setState({
                arrCustomer: response.data
            })
        }
    }

    handleAddNewCustomer = () =>{
        this.setState ({
            isOpenModalCustomer: true,
        })
    }

    handleUpdateCustomer = async(data) =>{
        this.setState ({
            isOpenModalUpdateCustomer: true,
            customerUpdate: data,
        })
    }

    doHandleUpdateCustomer = async (data) =>{
        try{
            let response = await updateCustomerService(data);
            if(response && response.response===true){
                alert(response.message)
            }else{
                await this.getAllCustomersFromReact();
                this.setState({
                    isOpenModalUpdateCustomer: false,
                })
  
            }
        }catch(e){
            console.log(e)
        }  

    }

    toggleCustomerModal = () =>{
        this.setState ({
            isOpenModalCustomer: !this.state.isOpenModalCustomer,
        })
    }

    toggleUpdateCustomerModal = () =>{
        this.setState ({
            isOpenModalUpdateCustomer: !this.state.isOpenModalUpdateCustomer,
        })
    }

    createNewCustomer = async (data) => {
        try{
            let response = await createNewCustomerService(data);
            if(response && response.response===false){
                alert(response.message)
            }else{
                await this.getAllCustomersFromReact();
                this.setState({
                    isOpenModalCustomer: false,
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
                
            }
        }catch(e){
            console.log(e)
        }    
    }
    
    handleDeleteCustomer = async (data) => {
        try{
            let response = await deleteCustomer(data.id);
            if(response && response.response===false){
                alert(response.message)
            }else{
                await this.getAllCustomersFromReact();
            }
        }catch(e){
            console.log(e)
        }
    }

    render() {
        let arrCustomer =this.state.arrCustomer.data
        return (
            <div className="customers-container">
                <ModalCustomer
                    isOpen={this.state.isOpenModalCustomer}
                    toggleFromParent={this.toggleCustomerModal}
                    createNewCustomer={this.createNewCustomer}
                />
                {
                this.state.isOpenModalUpdateCustomer &&
                <ModalUpdateCustomer
                    isOpen={this.state.isOpenModalUpdateCustomer}
                    toggleFromParent={this.toggleUpdateCustomerModal}
                    currentCustomer={this.state.customerUpdate}
                    updateCustomer={this.doHandleUpdateCustomer}
                />}
                <div className="title text-center">Manage customer</div>
                <div className="mx-1">
                    <button className="btn btn-primary px-3" onClick={()=>this.handleAddNewCustomer()}>
                        <i className="fas fa-user-plus px-1"></i>
                        Add New Customer
                    </button>
                </div>
                <div className="customers-table mt-3 mx-1">
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Birthday</th>
                                <th>Phone</th>   
                                <th>Gender</th>
                                <th>Sale Off</th>
                                <th>Loyalty Level</th>
                                <th>Actions</th>
                            </tr>
                            {
                                arrCustomer && arrCustomer.map((item, index) => {
                                    return (
                                        <tr key={item.id} className="divClass">
                                            <td>{item.fullName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.addressCustomer}</td>
                                            <td>{item.birthdayCustomer}</td>                                        
                                            <td>{item.phone}</td>
                                            {item.genderCustomer==0?<td>Female</td>:<td>Male</td>}
                                            <td>{item.saleOffCustomer}</td>
                                            <td>{item.loyaltyLevelCustomer}</td>
                                            <td>
                                                <button className="btn-actions" onClick={()=>this.handleUpdateCustomer(item)}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>                                              
                                                <button className="btn-actions" onClick={()=>this.handleDeleteCustomer(item)}><i className="fa fa-trash" aria-hidden="true"></i></button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomerManage);
