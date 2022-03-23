import React, { Component } from 'react';
import { connect } from 'react-redux';
class ContactSection extends Component {
    render() {
        return (
            <section className='contact_section'>
                <div class="contact_container">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="contact_form layout_padding">
                                    <div class="heading_container">
                                        <h2>
                                            Get in touch
                                        </h2>
                                    </div>
                                    <form action="">
                                        <input type="text" placeholder="Full name " />
                                        <div class="top_input">
                                            <input type="email" placeholder="Email" />
                                            <input type="text" placeholder="Phone Number" />
                                        </div>

                                        <input type="text" placeholder="Message" class="message_input" />
                                        <button>
                                            Send
                                        </button>
                                    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactSection);
