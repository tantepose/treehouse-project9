import React, { Component } from 'react';

import apiKey from './config';

import ImageList from './Components/ImageList';
import Search from './Components/Search';

class App extends Component {

  doSearch = () => {
    const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ee57dd1842a1228879531fecebeb8792&tags=pingpong&per_page=16&format=json&nojsoncallback=1';
  }

  state = {
    messages: ['Husk å ta med voks.', 'Si fra til pappa om mamma.', 'Vær det beste du kan være.'],
    key: apiKey
  }

  render() {
    return (
      <div className='App'>
        <Search />
        <p>Key: {this.state.key}</p>
        <ImageList 
          messages = {this.state.messages} />
      </div>
    );
  }
}

export default App;
