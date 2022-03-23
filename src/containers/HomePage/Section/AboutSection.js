import React, { Component } from 'react';
import { connect } from 'react-redux';
class AboutSection extends Component {
    render() {
        return (
            <section className='about_section layout_padding'>
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 ">
                            <div class="img-box">
                                <img src="assets/images/about-img.png" alt="" />
                            </div>
                        </div>
                        <div class="col-md-6 offset-md-1">
                            <div class="detail-box">
                                <div class="heading_container">
                                    <h2>
                                        about cycle
                                    </h2>
                                </div>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                    in some form, by injected humour, or randomised words which don't look even slightly believable.
                                </p>
                                <a href="">
                                    About More
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutSection);
