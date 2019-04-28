/* eslint-disable no-undef */
import './style.scss'
import React from 'react';
function Image(props) {
    return (
        <div className="newsImage">
            <img src={props.src} alt='property'></img>
        </div>
    );
}
function View(props) {
    const post = props.post;
    const listNews = post.map(element => (
        <li key={element.autohor} >
            <div className="news">
                <Image src={element.imgSrc}> </Image>
                <div className="newsDemonstrate">
                    <h1>{element.title}</h1>
                    <div className="author">by {element.author}</div>
                    <p>{element.description}</p>
                </div>
            </div>
        </li >
    )
    );
    return (
        <ul>
            {listNews}
        </ul>
    );
}

export default View;