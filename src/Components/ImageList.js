import React from 'react';
import Image from './Image';

const ImageList = props => {
    const images = props.images;

    return (
    <div className='ImageList'>
        {images.map(image => 
                <Image 
                    image={image}
                />
            )} 
    </div>
    );
}

export default ImageList;