import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductPageBody from './ProductPageBody.js'
import Footer from '../ClientCommon/Footer';
import HomeHeader from '../ClientCommon/HomeHeader';

class ProductClientPage extends Component {
    constructor(props) {
        super(props);   
    }
    render() {
        return (
            <div>
                <HomeHeader/>
                <ProductPageBody/>
                <Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductClientPage);
