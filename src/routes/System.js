import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import CustomerManage from '../containers/System/CustomerManage';
import ProductManage from '../containers/System/ProductManage';
import CategoryManage from '../containers/System/CategoryManage';
import RegisterPackageGroupOrAcc from '../containers/System/RegisterPackageGroupOrAcc';
import Header from '../containers/Header/Header';
class System extends Component {
    render() {
        const { systemMenuPath } = this.props;
        return (
            <div className="system-container">
                <div className="system-list">
                    <Header />
                    <Switch>
                        <Route path="/system/user-manage" component={UserManage} />
                        <Route path="/system/category-manage" component={CategoryManage} />
                        <Route path="/system/customer-manage" component={CustomerManage} />
                        <Route path="/system/product-manage" component={ProductManage} />
                        <Route path="/system/register-package-group-or-account" component={RegisterPackageGroupOrAcc} />
                        <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
