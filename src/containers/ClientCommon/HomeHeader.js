import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeHeader extends Component {
    constructor(props){
        super(props);
        this.state = { 
            
        }
    }

    async componentDidMount() {
    }

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
                                        <a className="nav-link" href="index.html">Giới thiệu <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="about.html"> My Xe Máy </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="cycle.html"> Xe máy </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Tin tức</a>
                                    </li>
                                    <li className="nav-item">
                                        {this.props.isLoggedIn ? <a className="nav-link" href="#"><i class="fa fa-user" aria-hidden="true"></i></a> : <a className="nav-link" href="#"> Login </a>}
                                    </li>
                                    
                                </ul>
                                <div className="quote_btn-container ">
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
