import React, { Component } from 'react';

import ImageList from './Components/ImageList';
import Search from './Components/Search';

class App extends Component {

  state = {
    messages: ['Husk å ta med voks.', 'Si fra til pappa om mamma.', 'Vær det beste du kan være.']
  }

  render() {
    return (
      <div className='App'>
        <Search />
        <ImageList 
          messages = {this.state.messages} />
      </div>
    );
  }
}

export default App;
