import React, { Component } from 'react';
import Image from './Image';

const ImageList = props => {
    return (
    <div className='ImageList'>
        <h2> Beskjeder: </h2>
        <ul>
            {props.messages.map(message => 
                <Image 
                    message={message}
                />
            )} 
        </ul>
    </div>
    );
}

export default ImageList;