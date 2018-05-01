import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config';
import ImageList from './ImageList';

// main component for displaying search results, from either category or custom search
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

  // get search query from prop or route (search or predefined category)
  componentWillMount () {
    this.setState({
      query: this.props.query ? this.props.query : this.props.match.params.query
    })
  }

  // do the search when component mounts
  componentDidMount() {
    this.doSearch(this.state.query);
    document.title = "Images of " + this.state.query;
  }

  // the search, using Axios to query the Flickr API
  doSearch = (query) => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=9&format=json&nojsoncallback=1`;    
    axios.get(url) 
    .then(response => {
      this.setState({
        images: response.data.photos.photo,
        isLoading: false
      })
    })
    .catch(error => { 
      console.log('Error parsing data:', error);
    });
  }

  // render "loading", then results
  render() {
    return (
      <div className='search-results'>
        { (this.state.isLoading) 
            ? <h1>Searching for {this.state.query}... <span role="img" aria-label="search">✨</span></h1> 
            : <ImageList 
              images = {this.state.images} 
              query={this.state.query} />
        }
      </div>
    );
  }
}

export default Results;
