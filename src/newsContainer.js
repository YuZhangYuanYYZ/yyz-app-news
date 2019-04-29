import React from 'react';
import NewsList from './news-list'
import { API_URL } from './config/constants';

class NewsContainer extends React.Component {
    constructor(porps) {
        super(porps);
        this.state = { data: [] }
        this.deletePost = this.deletePost.bind(this);
    }

    componentDidMount() {
        const promise = fetch(`${API_URL}/posts`);
        promise
            .then(response => {
                const dataPromise = response.json();
                return dataPromise
            })
            .then(result => {
                this.setState({ data: result })
            }, (error) => {
                console.log(error);
            });
    }

    deletePost(id) {
        console.log("clicked")
        this.setState({
            date: this.state.data.filter((post) => {
                return post.id !== id;
            })
        })
        console.log("has been excuted?")
    }

    render() {
        return (
            <div>
                <NewsList posts={this.state.data} deletePost={this.deletePost} />
            </div >
        )
    };
}

export default NewsContainer;