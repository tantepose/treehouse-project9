import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = () => (
  <div className="links">
    <ul>
      <li><NavLink to="/category/1">dikdiks</NavLink></li>
      <li><NavLink to="/category/2">pingpong</NavLink></li>
      <li><NavLink to="/category/3">Oslo</NavLink></li>
    </ul>    
  </div>
);

export default Links;