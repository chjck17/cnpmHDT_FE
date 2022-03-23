import React, { Component } from 'react';
import { connect } from 'react-redux';
class InfoSection extends Component {

    render() {
        return (
            <section className='info_section layout_padding2'>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="logo_detail">
                                <div class="logo-box">
                                    <a class="navbar-brand" href="index.html">
                                        <img src="assets/images/logo.png" alt="" />
                                        <span>
                                            Jetcycle
                                        </span>
                                    </a>
                                </div>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                    in some form, by injected humour, or
                                </p>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="address_box">
                                <h6>
                                    Adderess
                                </h6>
                                <p>
                                    passages of Lorem Ipsum available, but the majority have
                                </p>
                                <p>
                                    (+71) 1234567890
                                </p>
                                <a href="">
                                    demo@gmail.com
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="link_box">
                                <h6>
                                    Menu
                                </h6>
                                <ul class="  ">
                                    <li class=" ">
                                        <a class="" href="index.html">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="">
                                        <a class="" href="about.html">About </a>
                                    </li>
                                    <li class="">
                                        <a class="" href="cycle.html"> Our cycles </a>
                                    </li>
                                    <li class="">
                                        <a class="" href="contact.html">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="social_container">
                        <div class="social_box">
                            <a href="">
                                <img src="assets/images/facebook-logo-button.png" alt="" />
                            </a>
                            <a href="">
                                <img src="assets.images/twitter-logo-button.png" alt="" />
                            </a>
                            <a href="">
                                <img src="assets/images/linkedin.png" alt="" />
                            </a>
                            <a href="">
                                <img src="assets/images/instagram.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoSection);
