import React from 'react';
import NewsList from './news-list'
import { API_URL } from './config/constants';

class NewsContainer extends React.Component {
    constructor(porps) {
        super(porps);
        this.state = { data: [] }
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

    render() {
        return (
            <div>
                <NewsList posts={this.state.data} />
            </div >
        )
    };
}

export default NewsContainer;