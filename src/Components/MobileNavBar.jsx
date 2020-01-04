import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MobileNavBar extends Component {
    render() {
        return (
            <div className="mobile_navbar">
            <nav id="topNav" class="navbar navbar-default main-menu">
            <div class="container">
                <button class="navbar-toggler hidden-md-up pull-right hambugar" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    ☰
                </button> 
                 <p class="navbar-brand page-scroll" href="#slider">
                 <h2 className='malon_tasty_meal'><span className="malon_alone_word">Malon</span> Tasty Meals</h2></p>
                <div class="collapse navbar-toggleable-sm" id="collapsingNavbar">
                    <ul class="nav navbar-nav">
                         <li class="active">
                                    <Link to='/'>HOME</Link>
                                </li>
                                <li>
                                <Link to='/about'>ABOUT</Link>
                                </li>
                                 <li>
                                 <Link to='/services'>SERVICES</Link>
                                </li>
                                 <li>
                                 <Link to='/testimonials'>TESTIMONIALS</Link>
                                </li> 
                                <li>
                                <Link to='/location'>LOCATION</Link>
                                </li> 
                                <li>
                                <Link to='/contact'>CONATCT</Link>
                                </li>
                                
                    </ul> 
                </div>
            </div>
        </nav>
            </div>
        )
    }
}
export default MobileNavBar
