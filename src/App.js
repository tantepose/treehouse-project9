import React, { Component } from 'react';

import apiKey from './config';

import ImageList from './Components/ImageList';
import Search from './Components/Search';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: ['Husk å ta med voks.', 'Si fra til pappa om mamma.', 'Vær det beste du kan være.'],
      key: apiKey
    }
  }

  doSearch = () => {
    console.log("hallo");
    const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ee57dd1842a1228879531fecebeb8792&tags=pingpong&per_page=16&format=json&nojsoncallback=1';
    this.setState({
      messages: ['nå er det bare en']
    });
  }

  render() {
    return (
      <div className='App'>
        <Search />
        <p>Key: {this.state.key}</p>
        <ImageList 
          messages = {this.state.messages} />
        <button onClick={this.doSearch}>Search</button>
      </div>
    );
  }
}

export default App;
