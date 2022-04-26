import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOneNews } from '../../services/newsService'
import './NewsPage.scss'
class NewsDetailPageBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            content: '',
            description: '',
            banner: '',
            createdDate: ''
        }
    }

    async componentDidMount() {
        await this.getOneNewsFromReact()
    }

    getOneNewsFromReact = async () => {
        let response = await getOneNews(this.props.id);
        if (response && response.result) {
            this.setState({
                id: response.data.id,
                title: response.data.title,
                content: response.data.content,
                description: response.data.description,
                banner: response.data.banner,
                createdDate: response.data.createdDate
            })
        }
    }

    render() {
        // const id  = this.props.id;
        return (
            <div>
                <div id="content_listnew" class="floating-bar">
                    <div class="list-news news-page">
                        <div class="content-detail">
                            <p class="publish-date">{this.state.createdDate}</p>
                            <h2 class="title-detail">{this.state.title}</h2>
                            <div class="line">
                                <div class="line1"></div>
                                <div class="line2"></div>
                            </div>
                            <div class="editable">
                                <p> </p>
                                {this.state.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailPageBody);