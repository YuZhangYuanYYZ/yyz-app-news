import React from 'react';
import './style.scss'
import Image from './Image';

function View(props) {
    const element = props.element;
    return (
        <div className="news">
            <Image src={element.imgSrc}> </Image>
            <div className="newsDemonstrate">
                <h1>{element.title}</h1>
                <div className="author">by {element.author}</div>
                <p>{element.description}</p>
            </div>
        </div>
    );
}

export default View;