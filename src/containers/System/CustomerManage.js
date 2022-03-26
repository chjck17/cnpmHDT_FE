import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './CustomerManage.scss';
import {getAllCustomers} from '../../services/customerService';
//import {getAllCustomers} from '../../services/userService';
class CustomerManage extends Component {

    constructor(props) {
        super(props);
        this.state ={
            //arrCustomer: []
            data: []
        }
    }

    async componentDidMount() {
        /*this.callBackendAPI()
        .then(res => this.setState({ data: res.data }))
        .catch(err => console.log(err));*/
        let response = await getAllCustomers('All');
        console.log("get customer: ", response)
        if(response && response.errCode ===0){
            this.setState({
                arrCustomer: response.customers
            }, () =>{
        //        console.log('check state customer ', this.state.customers);
            })
      //      console.log('check state customer 1 ', this.state.customers);
        }
     //   console.log('check state customer 2 ', this.state.customers);*/

    }

  /*  async callBackendAPI() {
        const response = await fetch('/v1/customer/list');
        const body = await response.json();
    
        if(response.status !== 200) {
          throw Error(body.message)
        }
        return body;
      }*/

    render() {
        //console.log('check render ', this.state)
        //let data =this.state.data
        return (
            <div className="customers-container">
                <div className="title text-center">Manage customer</div>
                <div className="customers-table mt-3 mx-1">
                    <table id="customers">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>Sale Off</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            {
                                /*data && data.map((item, index) => {
                                 //   return (
                                   //     <div className="divClass">
                                     //       <td>{item.customerFullName}</td>
                                       //     <td>{item.customerEmail}</td>
                                        //    <td>{}</td>
                                       // </div>

                                    )
                                })
                                */
                            }
                        </tr>
                    
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
