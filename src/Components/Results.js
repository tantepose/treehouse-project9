import React, { Component } from 'react';
import axios from 'axios';

import apiKey from '../config';
import ImageList from './ImageList';

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

  // do a search when component mounts
  componentDidMount() {
    // get query from route or prop? (as in search or predefined category)

    // this.props.query
    //   ? this.setState({query: this.props.query})
    //   : this.setState({query: this.props.match.params.query})

    if (this.props.query) { // burde vel sette state i stedet?
      this.state.query = this.props.query;
    } else {
      this.state.query = this.props.match.params.query;
    }

    this.doSearch(this.state.query);
    document.title = "Images of " + this.state.query;
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
      console.log('Error parsing data:', error);
    });
  }

  // render "loading" / results
  render() {
    return (
      <div className='search-results'>
        { (this.state.isLoading) 
            ? <h1>Loading images... <span role="img" aria-label="search">✨</span></h1> 
            : <ImageList 
              images = {this.state.images} 
              query={this.state.query} />
        }
      </div>
    );
  }
}

export default Results;
