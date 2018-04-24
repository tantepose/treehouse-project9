import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Search from './Components/Search';
import Results from './Components/Results';
import NotFound from './Components/NotFound';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Results} />
        <Route exact path="/search" component={Search} />
        <Route path="/search/:query" component={Results} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

/* 

OOOOOOK:

search/
-> Search, med ingenting

search/query 
-> Results, med søk på query
kan i utgangspunktet bare druse ut results-comp med riktig data
men hva da når du går direkte inn på en route for å søke?
derfor må søkegreia ligge i results, hvor routen tas ut som query
og Search bare lage en route, for å starte søket på den route

m.a.o: 
Search bare som tom greie for å sende videre til Results
all søk inni Results

kan også ha all logikk i app.js, og sende den videre til results, da
"A container component that takes in a keyword and api key as props, 
and fetches the photos and other required information from the API"


<Route path="/about" render = { () => <About title='About' /> } />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic/:name" component={Featured} />
        <Route path="/courses" component={Courses} />
*/