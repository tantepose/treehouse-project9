import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './CSS/App.css';

// App components
import NotFound from './Components/NotFound';
import Category1 from './Components/Categories/Category1';
import Category2 from './Components/Categories/Category2';
import Category3 from './Components/Categories/Category3';
import Home from './Components/Home';

// main app class for routing
class App extends Component {

  render() {
    return(
      <BrowserRouter>
        <div className="App">
          <Switch>

            <Route exact path='/' render={(props) => (
              <Home query="Lego"/>)
            }/>

            <Route exact path='/search' render={(props) => (
              <Home query="Lego"/>)
            }/>

            <Route path='/search/:query' render={(props) => (
              <Home {...props} />)
            }/>

            <Route path="/category/1" component={Category1} />
            <Route path="/category/2" component={Category2} />
            <Route path="/category/3" component={Category3} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;