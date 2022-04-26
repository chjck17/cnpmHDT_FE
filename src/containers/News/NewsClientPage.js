import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsPageBody from './NewsPageBody.js'
import Footer from '../ClientCommon/Footer';
import HomeHeader from '../ClientCommon/HomeHeader';

class NewsClientPage extends Component {
    constructor(props) {
        super(props);   
    }
    render() {
        return (
            <div>
                <HomeHeader/>
                <NewsPageBody/> 
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsClientPage);
