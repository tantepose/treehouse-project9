import React from 'react';

import SearchForm from './SearchForm';
import Links from './Links';
import Results from './Results';

// root and /search route, displaying search bar and results
const Home = props => 
    <div className="home">
        <SearchForm />
        <Links />
        <Results {...props} />
    </div>


export default Home;