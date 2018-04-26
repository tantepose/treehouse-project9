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

    // render the results
    return(
        <div className="Results">
            {(images.length>0) 
                ? <h2>Images of {props.query}</h2>
                : ""
            }
            <div className="Image-List">
                {output}
            </div>
        </div> 
    );
}

export default ImageList;