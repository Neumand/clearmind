import React from 'react';
import NavBarDropdown from './NavBarDropdown';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <a className='navbar-brand' href='#'>
        Logo
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavDropdown'
        aria-controls='navbarNavDropdown'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarNavDropdown'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <a className='nav-link' href='/'>
              Get Help
            </a>
          </li>
          <li className='nav-item active'>
            <a className='nav-link' href='/resources'>
              Resources
            </a>
          </li>
          <NavBarDropdown />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
