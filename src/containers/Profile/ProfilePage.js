import React, { Component } from 'react';
import { connect } from 'react-redux';

import BodyProfile from './BodyProfile.js'
import Footer from '../ClientCommon/Footer';
import HomeHeader from '../ClientCommon/HomeHeader';
import { getAllCategories, createNewCategory, updateCategory, deleteCategory } from '../../services/categoryService'
class ProfilePage extends Component {
    constructor(props) {
        super(props);   
    }
    render() {
        return (
            <div>
                <HomeHeader/>
                <BodyProfile/> 
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
