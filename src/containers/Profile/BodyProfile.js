import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../services/customerService'
import moment from 'moment';
import './ProfilePage.scss';
class BodyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerInfo: {}
        }
    }

    async componentDidMount() {
        await this.getCustomerInfo()
    }

    getCustomerInfo = async () => {
        let response = await getProfile();
        if (response && response.result) {
            this.setState({
                customerInfo: response.data
            })
        }
    }

    handleOnChange = (e) => {

    }

    render() {

        return (
            <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">
                    <div class="col-md-3">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /></div>
                    </div>
                    <div class="col-md-5">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">THÔNG TIN KHÁCH HÀNG</h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-12"><label class="labels">Họ tên</label><input type="text" class="form-control" value={this.state.customerInfo.fullName} /></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels">Số điện thoại</label><input type="text" class="form-control" onChange={this.handleOnChange()} value={this.state.customerInfo.phone} /></div>
                                <div class="col-md-12"><label class="labels">Địa chỉ</label><input type="text" class="form-control" value={this.state.customerInfo.addressCustomer} /></div>
                                <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" value={this.state.customerInfo.email} /></div>
                                <div class="col-md-12"><label class="labels">Giới tính</label><input type="text" class="form-control" value={this.state.customerInfo.genderCustomer} /></div>
                                <div class="col-md-12"><label class="labels">Ngày sinh</label><input type="date" class="form-control" value={moment(this.state.customerInfo.birthdayCustomer).format('YYYY-MM-DD')} /></div>
                                <div class="col-md-12"><label class="labels">Cấp độ</label><input disabled type="text" class="form-control" value={this.state.customerInfo.loyaltyLevelCustomer} /></div>
                            </div>
                            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BodyProfile);