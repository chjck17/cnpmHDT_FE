import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
//import {getAllOrders,getAllOrdersDetail} from '../../../services/ordersService';
import { useState } from 'react'
import './OrdersManage.scss'
import _ from 'lodash'
import './Login.scss';

class RegisterModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            address: '',
            customerFullName:'',
            customerPassword:'',
            customerPhone:'',
            customerUsername:''       
           
        }
    }
   async componentDidMount() {     
  
    }
    
    toggle = () => {
        this.props.toggleFromParent();
    }
    handleRegister=()=>{
     
      this.props.RegisterOrders(this.state)
         
    }
    

  
  handleOnChangeInput = (event, id) => {

    let copyState = {...this.state};
    copyState[id] = event.target.value;
    this.setState({
        ...copyState
    })
    
}
    render() {
      
        return (
            
            <Modal               
                isOpen={this.props.isOpen}
                toggle={()=>{this.toggle()}} 
                className={'modal-orders-container'}
                
                size="lg"
                centered
            >
                <ModalHeader toggle={()=>{this.toggle()}}>Sign Up</ModalHeader>
                <ModalBody>                                  
                    
                <div className="modal-orders-body">
                                       
                                       <div className="input-container">
                                           <label>Address</label>
                                           <input 
                                               type="text" 
                                               onChange={(event)=> {this.handleOnChangeInput(event, "address")}}
                                               value={this.state.address}
                                           />
                                       </div>
                                       <div className="input-container">
                                           <label>Full Name</label>
                                           <input 
                                               type="text" 
                                               onChange={(event)=> {this.handleOnChangeInput(event, "customerFullName")}}
                                               value={this.state.customerFullName}
                                           />
                                       </div>
                                       <div className="input-container">
                                           <label>Password</label>
                                           <input 
                                               type="text" 
                                               onChange={(event)=> {this.handleOnChangeInput(event, "customerPassword")}}
                                               value={this.state.customerPassword}
                                           />
                                       </div>
                                       <div className="input-container">
                                           <label>Phone</label>
                                           <input 
                                               type="text" 
                                               onChange={(event)=> {this.handleOnChangeInput(event, "customerPhone")}}
                                               value={this.state.customerPhone}
                                           />
                                       </div>
                                       <div className="input-container">
                                           <label>User Name</label>
                                           <input 
                                               type="text" 
                                               onChange={(event)=> {this.handleOnChangeInput(event, "customerUsername")}}
                                               value={this.state.customerUsername}
                                           />
                                       </div>
                                      
                               
                                      
                          
                                   </div>
                </ModalBody>
                <ModalFooter                                
                >                    
                    <Button 
                        color="primary" 
                        className="px-3" 
                        onClick={()=>{this.handleRegister()}}>Register</Button>{' '}                    
                    <Button color="secondary" className="px-3" onClick={()=>{this.toggle()}}>Cancel</Button>

                </ModalFooter>
            </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);
