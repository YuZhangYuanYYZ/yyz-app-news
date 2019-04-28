import React from 'react';
import NewsList from './news-list'

class NewsContainer extends React.Component {
    constructor(porps) {
        super(porps);
        this.state = { data: [] }
    }

    componentDidMount() {
        const promise = fetch('http://localhost:3004/posts');
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