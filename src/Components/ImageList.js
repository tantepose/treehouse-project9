import React from 'react';
import Image from './Image';
import NoMatch from './NoMatch';

const ImageList = props => {
    const images = props.images;
    let output;

    // matches? show them
    if (images.length > 0) {
        output = images.map(image => 
            <Image image={image} key={image.id} />
        );
    } 

    // no matches? show no match message
    else {
        output = <NoMatch />;
    }

    // render the results (with title if matches)
    return(
        <div className="images">
            {(images.length > 0) 
                ? <h2>Images of {props.query}</h2>
                : ""
            }
            <ul>
                {output}
            </ul>
        </div> 
    );
}

export default ImageList;