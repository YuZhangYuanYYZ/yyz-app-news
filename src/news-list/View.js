import './style.scss'
import React from 'react';
import Newscard from '../news-card'

function View(props) {
    const posts = props.posts;
    const listNews = posts.map(post => (
        <li key={post.autohor} >
            <Newscard element={post} />
        </li >
    )
    );
    return (
        <ul>
            {listNews}
        </ul>
    )
}

export default View;
