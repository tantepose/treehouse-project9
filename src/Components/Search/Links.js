import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = () => (
  <div className="links">
    <ul>
      <li><NavLink to="/search/dikdik">dikdiks</NavLink></li>
      <li><NavLink to="/search/pingpong">pingpong</NavLink></li>
      <li><NavLink to="/search/oslo">Oslo</NavLink></li>
    </ul>    
  </div>
);

export default Links;