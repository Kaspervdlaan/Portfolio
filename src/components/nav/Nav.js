import React from 'react';
import {NavLink} from "react-router-dom";
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

function Nav() {
    return (
        <nav>
            <div id="nav-logo-section" className="nav-section">
                <a href="#">🏠</a>
            </div>
            <div id="nav-link-section" className="nav-section">
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/work">WORK</NavLink>
            </div>
            <div id="nav-social-section" className="nav-section">
                <a href=""><img className="top-icons" src={github} alt="github-icon"/></a>
                <a href=""><img className="top-icons" src={linkedin} alt="linkedin-icon"/></a>
            </div>
            <div id="nav-contact-section" className="nav-section">
                <a href="">CONTACT</a>
            </div>
        </nav>
    );
}

export default Nav;