import React from 'react';
import Image from './Image';
import NoMatch from './NoMatch';

const ImageList = props => {
    const images = props.images;
    let output;

    // matches? render them
    if (images.length > 0) {
        output = images.map(image => 
            <Image image={image} key={image.id} />
        );
    } 

    // no matches? render NoMatch component
    else {
        output = <NoMatch />;
    }

    // render the results
    return(
        <div className="images">
            <h1>Images of {props.query}:</h1>
            <ul>
                {output}
            </ul>
        </div> 
    );
}

export default ImageList;