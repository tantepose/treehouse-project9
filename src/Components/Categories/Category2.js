import React from 'react';

import Results from '../Results';
import Links from '../Links';

const Category2 = () => (
  <div>
    <Links />
    <Results query="pingpong" />
    <a href="/search">Back to search</a>
  </div>
);

export default Category2;