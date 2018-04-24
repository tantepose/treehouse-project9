import React from 'react';

const Image = props => 
    <img 
        src={`https://farm${props.image.farm}.staticflickr.com/${props.image.server}/${props.image.id}_${props.image.secret}.jpg`} 
        alt={'id: ' + props.image.id} />

export default Image;