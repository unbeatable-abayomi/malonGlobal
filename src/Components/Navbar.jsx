import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 class Navbar extends Component {
    render() {
        return (
            <div className="nav-bar">
            <ul className="nav justify-content-center">
            <li className="nav-item skill-set-text-list">
            <div className="skill-set-text-list">
            <Link className='nav-link' to='/'>Home</Link>
            </div>
            
            </li>
            <li className="nav-item skill-set-text-list">
            <Link className='nav-link' to='/about'>About</Link>
            </li>
            <li className="nav-item skill-set-text-list">
              <Link className='nav-link' to='/services'>Services</Link>
            </li>
            <li className="nav-item skill-set-text-list">
              <Link className='nav-link' to='/testimonials'>Testimonials</Link>
            </li>
            <li className="nav-item skill-set-text-list">
              <Link className='nav-link' to='/location'>Location</Link>
            </li>
            <li className="nav-item skill-set-text-list">
              <Link className='nav-link' to='/contact'>Contact</Link>
            </li>
        
          </ul>
          
            </div>
        )
    }
}
export default Navbar
