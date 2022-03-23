import React, { Component } from 'react';
import { connect } from 'react-redux';
class SliderSection extends Component {
    render() {
        return (
            <section className=' slider_section position-relative'>
                <div class="jet_box">
                    <hr />
                    <h6>
                        jetcycle
                    </h6>
                    <hr />
                </div>
                <ol class="carousel-indicators indicator-2">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active indicator-li-1">01</li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
                </ol>
                <div class="container-fluid h-100">
                    <div class="row">
                        <div class="col-md-4 offset-md-1">
                            <div class="detail-box">
                                <h1>
                                    Racing <br />
                                    <span>
                                        Man cycle
                                    </span>
                                </h1>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available.
                                </p>
                                <div class="btn-box">
                                    <a href="" class="btn-1">
                                        Shop Now
                                    </a>
                                    <a href="" class="btn-2">
                                        Get A Quote
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7 px-0 h-100">
                            <div class="img_container h-100">
                                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators indicator-1">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active indicator-li-1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <div class="img-box">
                                                <img src="assets/images/slider-img.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="img-box">
                                                <img src="assets/images/slider-img.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="img-box">
                                                <img src="assets/images/slider-img.png" alt="" />
                                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SliderSection);
