import React, { Component } from 'react';
import { connect } from 'react-redux';
class CycleSection extends Component {
    render() {
        return (
            <section className='cycle_section '>
                <div className="container">
                    <div className="cycle_heading">
                        <h2>
                            Top Sale Cycles
                        </h2>
                    </div>
                    <div className="cycle_container">
                        <div className="box">
                            <div className="box-content">
                                <div className="img-box">
                                    <img src="assets/images/t-1.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <div className="text">
                                        <h6>
                                            Kids Cycle
                                        </h6>
                                        <h5>
                                            <span>$</span> 300
                                        </h5>
                                    </div>
                                    <div className="like">
                                        <h6>
                                            Like
                                        </h6>
                                        <div className="star_container">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-box">
                                <a href="">
                                    Add To Cart     
                                </a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <div className="img-box">
                                    <img src="assets/images/t-1.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <div className="text">
                                        <h6>
                                            Kids Cycle
                                        </h6>
                                        <h5>
                                            <span>$</span> 300
                                        </h5>
                                    </div>
                                    <div className="like">
                                        <h6>
                                            Like
                                        </h6>
                                        <div className="star_container">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-box">
                                <a href="">
                                    Add To Cart
                                </a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-content">
                                <div className="img-box">
                                    <img src="assets/images/t-1.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <div className="text">
                                        <h6>
                                            Kids Cycle
                                        </h6>
                                        <h5>
                                            <span>$</span> 300
                                        </h5>
                                    </div>
                                    <div className="like">
                                        <h6>
                                            Like
                                        </h6>
                                        <div className="star_container">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-box">
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
