import React from 'react';
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import home from '../../assets/home.png'

function Nav() {

    function toTop() {
    window.scrollTo(0,0)
}
    return (
        <nav>
            <div id="nav-logo-section" className="nav-section">
                <img onClick={toTop} className="home-icon" src={home} alt="github-icon"/>
            </div>
            <div id="nav-link-section" className="nav-section">
                <h4 className="work-link" onClick={toTop}>WORK</h4>
                <a rel="noreferrer" href="#contact">ABOUT</a>
            </div>
            <div id="nav-social-section" className="nav-section">
                <a rel="noreferrer" href="https://github.com/Kaspervdlaan" target="_blank"><img className="top-icons" src={github} alt="github-icon"/></a>
                <a rel="noreferrer" href="https://github.com/Kaspervdlaan" target="_blank"><img className="top-icons" src={linkedin} alt="linkedin-icon"/></a>
            </div>
            <div id="nav-contact-section" className="nav-section nav-background">
                <a rel="noreferrer" href="#contact"><div className="contact-button">CONTACT</div></a>
            </div>
        </nav>
    );
}

export default Nav;