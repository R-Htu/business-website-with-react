import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faDrupal } from '@fortawesome/free-brands-svg-icons';  // Correct import for faBloggerB

export default function Navbar() {
  const [sideNav, setSideNav] = useState(false);

  const toggleSideNav = () => {
    setSideNav(!sideNav);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <a href="/">
            <FontAwesomeIcon icon={faDrupal} />
          </a>
        </div>

        <div className="hamburger" onClick={toggleSideNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className='menu-item'>
          <ul>
            <li>
              <NavLink to="home" smooth={true} spy={true}>
                Home
              </NavLink>
            </li>
            <li>
              <Link to="about" smooth={true} spy={true}>
                About us
              </Link>
            </li>
            <li>
              <NavLink to="blog" smooth={true} spy={true}>
                Blog
              </NavLink>
            </li>
            <li>
              <Link to="services" smooth={true} spy={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} spy={true}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
