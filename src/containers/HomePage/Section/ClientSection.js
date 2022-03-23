import React, { Component } from 'react';
import { connect } from 'react-redux';
class ClientSection extends Component {

    render() {
        return (
            <section className='client_section layout_padding'>
                <div class="container">
                    <div class="heading_container ">
                        <h2>
                            What is says our clients
                        </h2>
                    </div>
                    <div id="carouselExample2Indicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExample2Indicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExample2Indicators" data-slide-to="1"></li>
                            <li data-target="#carouselExample2Indicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="client_container layout_padding2">
                                    <div class="client_detail">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                            alteration in
                                            some form, by injected humour, or randomised words which don't look even slightly believable.
                                        </p>
                                    </div>
                                    <div class="client_box ">
                                        <div class="img-box">
                                            <img src="assets/images/client.png " alt="" />
                                        </div>
                                        <div class="name">
                                            <h5>
                                                Randomised
                                            </h5>
                                            <h6>
                                                <span>
                                                    Lorem Ipsum
                                                </span>
                                                <img src="assets/images/quote.png" alt="" />
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="client_container layout_padding2">
                                    <div class="client_detail">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                            alteration in
                                            some form, by injected humour, or randomised words which don't look even slightly believable.
                                        </p>
                                    </div>
                                    <div class="client_box ">
                                        <div class="img-box">
                                            <img src="assets/images/client.png " alt="" />
                                        </div>
                                        <div class="name">
                                            <h5>
                                                Randomised
                                            </h5>
                                            <h6>
                                                <span>
                                                    Lorem Ipsum
                                                </span>
                                                <img src="assets/images/quote.png" alt="" />
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="client_container layout_padding2">
                                    <div class="client_detail">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                            alteration in some form, by injected humour, or randomised words which don't look
                                        </p>
                                    </div>
                                    <div class="client_box ">
                                        <div class="img-box">
                                            <img src="assets/images/client.png " alt="" />
                                        </div>
                                        <div class="name">
                                            <h5>
                                                Randomised
                                            </h5>
                                            <h6>
                                                <span>
                                                    Lorem Ipsum
                                                </span>
                                                <img src="assets/images/quote.png" alt="" />
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ClientSection);
