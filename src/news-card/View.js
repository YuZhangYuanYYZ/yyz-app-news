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
    const element = props.element;
    console.log(element);

    return (
        <div className="news">
            <Image src={element.imgSrc}> </Image>
            <div className="newsDemonstrate">
                <h1>{props.element.title}</h1>
                <div className="author">by {props.element.author}</div>
                <p>{props.element.description}</p>
            </div>
        </div>
    );
}

export default View;