import React from 'react';

// component displaying each image
const Image = props => 
    <li>
        <img 
            src={`https://farm${props.image.farm}.staticflickr.com/${props.image.server}/${props.image.id}_${props.image.secret}.jpg`} 
            alt={props.image.title} />
    </li>
    
export default Image;