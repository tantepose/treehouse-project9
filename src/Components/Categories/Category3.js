import React from 'react';
import Results from '../Results';
import Links from '../Links';

// custom category component from Links list
const Category3 = () => (
  <div>
    <Links />
    <Results query="Oslo" />
    <a href="/search">Back to search</a>
  </div>
);

export default Category3;