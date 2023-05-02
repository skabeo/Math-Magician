import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='white'>
      <h1 className='navTitle'>Math Magicians</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="calculator">Calculate</NavLink>
        <NavLink to="quotes">Quote</NavLink>
      </div>
    </nav>
  )
}

export default Navbar