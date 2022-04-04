import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProfile} from '../../services/customerService'
import './ProfilePage.scss';
class BodyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }

    async componentDidMount() {
        await this.getCustomerInfo()    
    }

    getCustomerInfo = async () => {
        let response = await getProfile();
        if(response && response.result){
            this.setState({
                customerInfo : response.data,
                userInfo: this.props.userInfo
            })
        } 
    }

    render() {
        
        return (
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"
                        >
                            <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" 
                        />
                        <span className="font-weight-bold"></span>
                        <span>
                            {console.log(this.state.userInfo)}
                            {this.state.userInfo.fullName}
                        </span>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">THÔNG TIN KHÁCH HÀNG</h4>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">Số điện thoại: </label><label></label></div>
                                <div className="col-md-12"><label className="labels">Địa chỉ: </label><input type="text" className="form-control" placeholder="enter address line 1" value="" /></div>
                                <div className="col-md-12"><label className="labels">Ngày sinh: </label><input type="text" className="form-control" placeholder="enter address line 2" value="" /></div>
                                <div className="col-md-12"><label className="labels">Email: </label><input type="text" className="form-control" placeholder="enter address line 2" value="" /></div>
                                <div className="col-md-12"><label className="labels">Giới tính: </label><input type="text" className="form-control" placeholder="enter address line 2" value="" /></div>
                                <div className="col-md-12"><label className="labels">Cấp thành viên: </label><input type="text" className="form-control" placeholder="enter address line 2" value="" /></div>
                            </div>
                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyProfile);