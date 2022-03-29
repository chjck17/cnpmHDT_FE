import React, { Component } from 'react';
import { connect } from 'react-redux';
class SliderSection extends Component {
    render() {
        return (
            <section className=' slider_section position-relative'>
                <div className="jet_box">
                    <hr />
                    <h6>
                        jetcycle
                    </h6>
                    <hr />
                </div>
                <ol className="carousel-indicators indicator-2">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active indicator-li-1">01</li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
                </ol>
                <div className="container-fluid h-100">
                    <div className="row">
                        <div className="col-md-4 offset-md-1">
                            <div className="detail-box">
                                <h1>
                                    Racing <br />
                                    <span>
                                        Man cycle
                                    </span>
                                </h1>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available.
                                </p>
                                <div className="btn-box">
                                    <a href="" className="btn-1">
                                        Shop Now
                                    </a>
                                    <a href="" className="btn-2">
                                        Get A Quote
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 px-0 h-100">
                            <div className="img_container h-100">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators indicator-1">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active indicator-li-1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="img-box">
                                                <img src="assets/images/slider-img.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="img-box">
                                                <img src="assets/images/slider-img.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="img-box">
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
