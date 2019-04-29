import './style.scss'
import React from 'react';
import Newscard from '../news-card'

function View({ posts, deletePost }) {
    const listNews = posts.map(post => (
        <li key={post.id} >
            <Newscard element={post} deletePost={deletePost} />
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
