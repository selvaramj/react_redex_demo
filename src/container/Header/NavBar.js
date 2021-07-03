import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GrowMore from '../Header/GrowMore.png';
import '../Header/NavBar.css';
const NavBar = () => {
  const [navBar, setNavBar] = useState(true);
  const handleNavBarChange = () => {
    setNavBar((previousValue) => !previousValue);
  };
  useEffect(() => {
    console.log('rendered');
  }, []);
  return (
    <header className='header-wrapper'>
      <div>
        <img className='logo' src={GrowMore} alt='grow more logo' />
      </div>
      <div
        className='floating-navbar'
        tabIndex='0'
        onClick={handleNavBarChange}
      >
        <i className='fas fa-bars'></i>
      </div>
      {navBar && (
        <div className='link-wrapper'>
          <ul className='header-links'>
            <li className='header-link'>
              <Link to='/home' className='link'>
                <i className='icon fas fa-home'></i>
                Home
              </Link>
            </li>
            <li className='header-link'>
              <Link to='/about-us' className='link'>
                <i className='icon fa fa-address-book'></i>
                About Us
              </Link>
            </li>
            <li className='header-link'>
              <Link to='/contact-us' className='link'>
                <i className='icon fa fa-envelope'></i>
                Contact Us
              </Link>
            </li>
            <li className='header-link'>
              <Link to='/register' className='link'>
                <i className='icon fa fa-user'></i>
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
