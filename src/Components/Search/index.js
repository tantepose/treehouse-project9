import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

// importing apiKey from required, private config.js file
import apiKey from '../../config';

// importing app components
import ImageList from '../Results/ImageList';
import SearchForm from '../Search/SearchForm';
import Links from '../Search/Links';

// main wrapper container
class Search extends Component {

  // set initial state
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      images: [],
      isLoading: true
    }
  }

  // do a search on startup
  componentDidMount() {
    this.doSearch('dikdik');
  }

  // the search function
  doSearch = (query) => {
    console.log('SEARCHING FOR:', query);
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`;

    // make the request
    axios.get(url) 
    .then(response => { //set new state if it success
      this.setState({
        query: query,
        images: response.data.photos.photo,
        isLoading: false
      })
    })

    // catch error if it fails
    .catch(error => { 
      console.log('FEIL! med parsing data:', error);
    });
  }

  // rendering the whole app
  render() {
    return (
      <div className='App'>
        <SearchForm onSearch = {this.doSearch}/>
        <Links />

        { (this.state.isLoading) //is the app loading?
            ? <p>Loading images...</p> //yes: display loading message
            : <ImageList images = {this.state.images} query={this.state.query} /> //no: display images
        }

      </div>
    );
  }
}

export default Search;
