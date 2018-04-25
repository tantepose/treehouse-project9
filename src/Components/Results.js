import React, { Component } from 'react';
import axios from 'axios';

import apiKey from '../config';
import ImageList from './ImageList';

// main wrapper container
class Results extends Component {

  // set initial state
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      images: [],
      isLoading: true
    }
  }

  // do search when component mounts
  componentDidMount() {
    //get query from route or prop? (search or predefined category)
    let newQuery = "";
    if (this.props.query) { // burde vel sette state i stedet?
      newQuery = this.props.query;
    } else {
      newQuery = this.props.match.params.query;
    }

    this.doSearch(newQuery);
  }

  // the search function
  doSearch = (query) => {
    console.log('SEARCHING FOR:', query);
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=9&format=json&nojsoncallback=1`;
    
    // make the request
    axios.get(url) 
    .then(response => { //set new state if it success
      this.setState({
        query: query,
        images: response.data.photos.photo,
        isLoading: false
      })
    })
    
    // catch any errors
    .catch(error => { 
      console.log('FEIL! med parsing data:', error);
    });
  }

  // render "loading" / results
  render() {
    return (
      <div className='search-results'>
        { (this.state.isLoading) //is the app loading?
            ? <p>Loading images...</p> //yes: display loading message
            : <ImageList images = {this.state.images} query={this.state.query} /> //no: display images
        }
      </div>
    );
  }
}

export default Results;
