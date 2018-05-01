import React from 'react';
import Results from '../Results';
import Links from '../Links';

// custom category component from Links list
const Category1 = () => (
  <div>
    <Links />
    <Results query="dikdik" />
    <a href="/search">Back to search</a>
  </div>
);

export default Category1;