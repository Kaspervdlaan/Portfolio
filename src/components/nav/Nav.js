import React from 'react';
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import home from '../../assets/home.png'
import { Link } from 'react-scroll';


function Nav() {
    return (
        <nav>
            <div id="nav-logo-section" className="nav-section">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={200}>
                <img className="home-icon" src={home} alt="github-icon"/></Link>
            </div>
            <div id="nav-link-section" className="nav-section">
                <Link
                    activeClass="active"
                    to="project-wrapper"
                    spy={true}
                    smooth={true}
                    duration={200}>

                    <h4 className="work-link">PROJECTS</h4>
            </Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={200}><h4 className="work-link">ABOUT</h4></Link>
            </div>
            <div id="nav-social-section" className="nav-section">
                <a rel="noreferrer" href="https://github.com/Kaspervdlaan" target="_blank"><img className="top-icons" src={github} alt="github-icon"/></a>
                <a rel="noreferrer" href="https://github.com/Kaspervdlaan" target="_blank"><img className="top-icons" src={linkedin} alt="linkedin-icon"/></a>
            </div>
            <div id="nav-contact-section" className="nav-section nav-background">
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={200}>
                    <h4 className="work-link">
                        <div className="contact-button">CONTACT</div></h4></Link>
            </div>
        </nav>
    );
}

export default Nav;