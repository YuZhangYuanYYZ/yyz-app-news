
import React from 'react';
import './style.scss'
import Image from './Image';

function View(props) {
    const element = props.element;
    // console.log(element.author);
    return (
        <div className="news">
            <Image src={element.imgSrc}> </Image>
            <div className="newsDemonstrate"  >
                <h1>{element.title}</h1>
                <div className="author">by {element.author}</div>
                <p>{element.description}</p>
                <button className='deleteButton' onClick={(e) => { props.deletePost(element.id) }}>DELETE</button>
            </div>
        </div>
    );
}

export default View;
//onClick={props.deletePost}

//onClick={props.deletePost(element.id)}