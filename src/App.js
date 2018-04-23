import React, { Component } from 'react';
import ImageList from './Components/ImageList';

class App extends Component {

  state = {
    messages: ['hei sveis', 'hehe', 'jaja']
  }

  render() {
    return (
      <div className="App">
        <h1>Hallo!</h1>
        <ImageList 
          messages = {this.state.messages} />
      </div>
    );
  }
}

export default App;
