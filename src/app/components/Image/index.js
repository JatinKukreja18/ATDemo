import React from 'react';
import "./Image.scss";
const Image = props => {
    return (
        <div className={`content-image ${props.align ? props.align : 'left'}`} {...props}>
            <img src={props.src} />
        </div>

    )
}

export default Image