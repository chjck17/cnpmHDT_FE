import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../../containers/ClientCommon/HomeHeader.js';
import Footer from '../../containers/ClientCommon/Footer.js';
import SliderSection from '../Section/SliderSection.js'
import AboutSection from '../Section/AboutSection.js';
import ProductSection from '../Section/ProductSection.js';
import ClientSection from '../Section/ClientSection.js';
import ContactSection from '../Section/ContactSection.js';
import SubcribeSection from '../Section/SubcribeSection.js';
import InfoSection from '../Section/InfoSection.js';
class HomePage extends Component {
    render() {
        return (
            <div>
                <div className='hero_area'>
                    <HomeHeader />                   
                    <SliderSection />
                </div>
                <AboutSection />
                <ProductSection />
                <ClientSection />
                <ContactSection />
                <SubcribeSection />
                <InfoSection />
                <Footer />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
