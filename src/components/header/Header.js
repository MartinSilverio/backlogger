import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

function header() {
  return (
    <header id='page-header-container'>
      <h1>Backlogger</h1>
      <NavLink className='nav-link' to='/'>
        <h2>Game Search</h2>
      </NavLink>
      <NavLink className='nav-link' to='/backlog'>
        <h2>My Backlog</h2>
      </NavLink>
    </header>
  );
}

export default header;
