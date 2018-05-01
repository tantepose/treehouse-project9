import React from 'react';

// component displaying no match-message
const NoMatch = () => (
  <div className="no-match">
    <h1>No images found! <span role="img" aria-label="search">🤔</span></h1>
    <p>Please try again.</p>
  </div>
);

export default NoMatch;