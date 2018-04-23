import React, { Component } from 'react';
import Image from './Image';

const ImageList = props => {
    return (
    <div>
        <h1> NÅ KOMMER BESKJEDENE HER: </h1>
        {props.messages.map(message => 
            <Image 
                message={message}
            />
        )} 
    </div>
    );
}

export default ImageList;