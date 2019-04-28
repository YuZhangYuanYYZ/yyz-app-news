import React from 'react';

function Image(props) {
    return (
        <div className="newsImage">
            <img src={props.src} alt='property'></img>
        </div>
    );
}

export default Image;