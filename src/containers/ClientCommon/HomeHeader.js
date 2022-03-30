import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeHeader extends Component {
    render() {
        return (
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="index.html">
                            <img src="assets/images/logo.png" alt="" />
                            <span>
                                Jetcycle
                            </span>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav  ">
                                    <li className="nav-item ">
                                        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="about.html">About </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="cycle.html"> Our cycles </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Contact us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"> Login </a>
                                    </li>
                                </ul>
                                <div className="quote_btn-container ">
                                    <a href="" className="call_link">
                                        <span> Call Now: </span>+01 1234567890
                                    </a>
                                    <a href="" className="cart_link">
                                        <img src="assets/images/cart.png" alt="" />
                                        <span className="cart_number">0</span>
                                    </a>
                                    <form className="form-inline ">
                                        <button className="btn  nav_search-btn" type="submit"></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
