import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {getAllOrders,getAllOrdersDetail} from '../../../services/ordersService';
import { useState } from 'react'
import './OrdersManage.scss'
import _ from 'lodash'

class ModalEditOrders extends Component {
    constructor(props){
        super(props);
        this.state = {
          updateOrdersDetailFormList: [],
            customerId:'',
            ordersAddress:'', // Dia chi giao hang
            ordersReceiverName:'', // Ten nguoi nhan
            ordersReceiverPhone:'', // Sdt nguoi nhan 
            ordersSaleOff:'',
            paymentMethod:'', // Phương thức thanh toán: 1: COD, 2: Online      
            ordersId:''
        }
    }
   async componentDidMount() {     
    let orders = this.props.EditOrdersDetail;
    console.log('did_mount :',orders);
    if(orders&& !_.isEmpty(orders))
    {
        this.setState({
            customerId:orders.customerId,
            ordersAddress:orders.ordersAddress, // Dia chi giao hang
            ordersReceiverName:orders.ordersReceiverName, // Ten nguoi nhan
            ordersReceiverPhone:orders.ordersReceiverPhone, // Sdt nguoi nhan 
            ordersSaleOff:orders.ordersSaleOff,
            paymentMethod:orders.paymentMethod, // Phương thức thanh toán: 1: COD, 2: Online      
            ordersId:orders.ordersId,
        })
    }
    }
    
    toggle = () => {
        this.props.toggleFromParent();
    }
    handleUpdateOrders=()=>{
     
      this.props.updateOrders(this.state)
         
    }
    
handleSubmit = task => {
 
    this.setState({updateOrdersDetailFormList: [...this.state.updateOrdersDetailFormList, task]});
   
  }

  
  handleDelete = (index) => {
    const newArr = [...this.state.updateOrdersDetailFormList];
    newArr.splice(index, 1);
    this.setState({updateOrdersDetailFormList: newArr});
  }
  handleOnChangeInput = (event, id) => {
    //bad code
    // this.state[id]=event.target.value;
    // this.setState({
    //      ...this.state
    // }, ()=> {
    //     console.log('check bad state: ',this.state)
    // })
    //good code
    let copyState = {...this.state};
    copyState[id] = event.target.value;
    this.setState({
        ...copyState
    })
    //console.log(event.target.value, id)
}
    render() {
        //let test=this.state.adds;
        //console.log('Duyyyyyyyyyyyyyy:',test)
        //  <InputForm tasks={this.state.tasks} onDelete={this.handleDelete} />
        return (
            
            <Modal               
                isOpen={this.props.isOpen}
                toggle={()=>{this.toggle()}} 
                className={'modal-orders-container'}
                size="lg"
                centered
            >
                <ModalHeader toggle={()=>{this.toggle()}}>Create product</ModalHeader>
                <ModalBody>
                    
              
                   
                    <div className="modal-orders-body">
                   
                           <div className='input-container'>
                             <Header numTodos={this.state.updateOrdersDetailFormList.length}
                            />
                             <TodoList tasks={this.state.updateOrdersDetailFormList} onDelete={this.handleDelete} />
                             <SubmitForm onFormSubmit={this.handleSubmit}
                              currenListOrdersDetail={this.props.currenListOrdersDetail}  />

                           </div>                    
                        <div className="input-container">
                            <label>customerId</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "customerId")}}
                                value={this.state.customerId}
                            />
                        </div>
                        <div className="input-container">
                            <label>ordersAddress</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "ordersAddress")}}
                                value={this.state.ordersAddress}
                            />
                        </div>
                        <div className="input-container">
                            <label>ordersReceiverName</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "ordersReceiverName")}}
                                value={this.state.ordersReceiverName}
                            />
                        </div>
                        <div className="input-container">
                            <label>ordersReceiverPhone</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "ordersReceiverPhone")}}
                                value={this.state.ordersReceiverPhone}
                            />
                        </div>
                        <div className="input-container">
                            <label>ordersSaleOff</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "ordersSaleOff")}}
                                value={this.state.ordersSaleOff}
                            />
                        </div>
                        <div className="input-container">
                            <label>paymentMethod</label>
                            <input 
                                type="text" 
                                onChange={(event)=> {this.handleOnChangeInput(event, "paymentMethod")}}
                                value={this.state.paymentMethod}
                            />
                        </div>
                
                       
           
                    </div>
                </ModalBody>
                <ModalFooter                 
                    // isCreate={this.props.isCreate}
                    // isEdit={this.props.isEdit}

                >
                    
                    <Button 
                        color="primary" 
                        className="px-3" 
                        onClick={()=>{this.handleUpdateOrders()}}>Update</Button>{' '}
                    
                    <Button color="secondary" className="px-3" onClick={()=>{this.toggle()}}>Cancel</Button>

                </ModalFooter>
            </Modal>
        )
    }

}
class SubmitForm extends React.Component {
  state = { ordersDetailAmount: '',ordersDetailId:'' };

  async componentDidMount() {     
  
    await this.getAllProductFromReact();
    }
    getAllProductFromReact = async () => {
    // let response = await this.props.currenListOrdersDetail;;
    let response = await getAllOrdersDetail( this.props.currenListOrdersDetail);
    let A=[];
    A=response.data
   // console.log('did_mount1 :',A.data.length);
    for (let i = 0; i < A.data.length; i++) {
        this.setState({
            ordersDetailAmount: A.data[i].ordersDetailAmount,
            ordersDetailId:A.data[i].ordersDetailId
         })
         this.props.onFormSubmit(this.state);
      
    };
    this.setState({ ordersDetailAmount: '',ordersDetailId:'' });
}
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.ordersDetailAmount  === ''|| this.state.ordersDetailId  === '')
     return;
    this.props.onFormSubmit(this.state);
    this.setState({ ordersDetailAmount: '',ordersDetailId:'' });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="modal-orders-body">
        <div className="input-container">
        <label>ordersDetailAmount</label>
        <input 
          type='text'
          value={this.state.ordersDetailAmount}
          onChange={(e) => this.setState({ordersDetailAmount: e.target.value})}
        />
        </div>

        <div className="input-container">
        <label>ordersDetailId</label>
        <input 
          type='text'
          value={this.state.ordersDetailId}
          onChange={(e) => this.setState({ordersDetailId: e.target.value})}
        />

        </div>
      
        </div>          

        <button className='button'>ADD</button>
      </form>
    );
  }
}


const Header = (props) => {
  return(
    <div className='card-header'>
      <h1 className='card-header-title header'>
        You have {props.numTodos} Product
      </h1>
    </div>
  )
}


const TodoList = (props) => {
    
  const todos = props.tasks.map((todo, index) => {
    return <Todo 
    content1={todo.ordersDetailAmount}
    content2={todo.ordersDetailId}
    key={index} 
    id={index} 
    onDelete={props.onDelete} />
  })
  return( 
<div className="customers-table mt-3 mx-1">
                        <table id="customers">
                            <tbody>
                                <tr>
                                    <th>ordersDetailAmount</th>
                                    <th>ordersDetailId</th>
                             
                                    </tr>
                                    {todos}
                                    
                                </tbody>
                        </table>
  </div>


    // <div className='list-wrapper'>
    //   {todos}
    // </div>
  );
}

const Todo = (props) => {
  return(
      <tr className="divClass">
         <td>{props.content1}</td>
            <td>{props.content2}</td>                                                   
        <td>
             <button className="btn-actions" onClick={()=>props.onDelete(props.id)}><i className="fa fa-pencil-square-o"></i></button>                                                                     
         </td>
     </tr>

  );
}
const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditOrders);
