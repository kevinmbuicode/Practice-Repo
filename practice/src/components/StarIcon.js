import React from 'react';
//import starEmptyIcon from "./images/star-empty.webp"
//import starFilledIcon from "./images/star-full-icon.png"

function StarIcon(props) {
    

    return ( 
        <div>
            <img src={props.src} onClick = {props.toggle}
            alt="star icon" 
            height='18px' width='18px'/>
            {props.isFIlled}
        </div>
     );
}

export default StarIcon;