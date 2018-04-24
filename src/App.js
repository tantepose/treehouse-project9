import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

// importing apiKey from required, private config.js file
import apiKey from './config';

// importing components
import ImageList from './Components/ImageList';
import Search from './Components/Search';

// main wrapper container
class App extends Component {

  // set initial state
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      loading: true,
      query: ''
    }
  }

  // do a search on startup
  componentDidMount() {
    this.doSearch('dikdik');
  }

  // the search function
  doSearch = (query) => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`;

    axios.get(url) //make the request
    .then(response => { //set new state if it success
      this.setState({
        query: query,
        images: response.data.photos.photo,
        loading: false
      })
    })

    .catch(error => { //catch error if it fails
      console.log('FEIL! med parsing data:', error);
    });
  }

  // rendering the whole app
  render() {
    return (
      <div className='App'>
        <Search />

          { (this.state.loading) //is it loading?
              ? <p>Loading...</p> //yes: display loading message
              : <ImageList images = {this.state.images} /> //no: display images
          }

        <button 
          onClick={this.doSearch}>
          Search
        </button>

      </div>
    );
  }
}

export default App;
