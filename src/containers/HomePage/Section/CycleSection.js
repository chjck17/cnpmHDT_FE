import React, { Component } from 'react';
import { connect } from 'react-redux';
class CycleSection extends Component {
    render() {
        return (
            <section className='cycle_section '>
                <div class="container">
                    <div class="cycle_heading">
                        <h2>
                            Top Sale Cycles
                        </h2>
                    </div>
                    <div class="cycle_container">
                        <div class="box">
                            <div class="box-content">
                                <div class="img-box">
                                    <img src="assets/images/t-1.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <div class="text">
                                        <h6>
                                            Kids Cycle
                                        </h6>
                                        <h5>
                                            <span>$</span> 300
                                        </h5>
                                    </div>
                                    <div class="like">
                                        <h6>
                                            Like
                                        </h6>
                                        <div class="star_container">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-box">
                                <a href="">
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box-content">
                                <div class="img-box">
                                    <img src="assets/images/t-1.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <div class="text">
                                        <h6>
                                            Kids Cycle
                                        </h6>
                                        <h5>
                                            <span>$</span> 300
                                        </h5>
                                    </div>
                                    <div class="like">
                                        <h6>
                                            Like
                                        </h6>
                                        <div class="star_container">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-box">
                                <a href="">
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                        <div class="box">
                            <div class="box-content">
                                <div class="img-box">
                                    <img src="assets/images/t-1.png" alt="" />
                                </div>
                                <div class="detail-box">
                                    <div class="text">
                                        <h6>
                                            Kids Cycle
                                        </h6>
                                        <h5>
                                            <span>$</span> 300
                                        </h5>
                                    </div>
                                    <div class="like">
                                        <h6>
                                            Like
                                        </h6>
                                        <div class="star_container">
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-box">
                                <a href="">
                                    Add To Cart
                                </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(CycleSection);
