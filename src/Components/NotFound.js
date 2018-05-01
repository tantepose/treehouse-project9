import React from 'react';

// 404 component
const NotFound = () => (
  <div class="not-found">
    <div className="center">
      <h1>Uffda! <span role="img" aria-label="search">😥</span></h1>
      <p>Path «{window.location.pathname}» not found.</p>
      <p></p>
    </div>
  </div>
);

export default NotFound;