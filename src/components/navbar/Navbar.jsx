//import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){
    //const [sideNav, setSideNav] = useState(false);
   return(
    <>
    <header>
        <div className="navbar">
            { <FontAwesomeIcon icon={faBars} />}
        </div>
        <div className="menu-item">
            <ul>
                <li>
                    <Link to="home" smooth={true} spy={true}>Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} spy={true}>About us</Link>
                </li>
                <li>
                    <Link to="blog" smooth={true} spy={true}>Blog</Link>
                </li>
                <li>
                    <Link to="services" smooth={true} spy={true}>Services</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} spy={true}>Contact us</Link>
                </li>
                
            </ul>
        </div>
    </header>
    
    
    </>


   ); 
}