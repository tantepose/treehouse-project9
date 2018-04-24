import React from 'react';

const Results = ({match}) => {
  const query = match.params.query;
  
  return (
    <div className="results">
      <h1>Results! {query}</h1>
      <a href="/search">Back to search</a>
    </div>
  );
}

export default Results;