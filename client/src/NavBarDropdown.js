import React, { Component } from 'react';

class NavBarDropdown extends Component {
  state = {
    isOpen: false,
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? 'show' : ''}`;
    return (
      <li className='nav-item dropdown' onClick={this.toggleOpen}>
        <a
          className='nav-link dropdown-toggle'
          href='#'
          id='navbarDropdownMenuLink'
          role='button'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          Our Network
        </a>
        <div className={menuClass} aria-labelledby='navbarDropdownMenuLink'>
          <a className='dropdown-item' href='/specialists'>
            Specialists
          </a>
          <a className='dropdown-item' href='#'>
            Clinics
          </a>
        </div>
      </li>
    );
  }
}

export default NavBarDropdown;
