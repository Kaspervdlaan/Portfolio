import React from 'react';
import parallax from "../../assets/parallax.jpg"
import parallax2 from "../../assets/parallax.png"
import {Animate} from "react-simple-animate";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Home() {
    window.addEventListener('scroll', function () {
        const parallax = document.getElementById('parallax')
        let scrollPosition = window.scrollY;

        parallax.style.transform = 'translateY(' + scrollPosition * .9 + 'px)'
    })

    return (
        <Animate play delay={0} duration={2} start={{opacity: '0'}} end={{opacity: '100'}}>
            <div className="home-wrapper">
                <img id='parallax' src={parallax} alt="" className="parallax"/>
            <div className="text-wrapper">
                <h1>Kasper van der Laan</h1>
                <h2>a Fullstack Developer</h2>
            </div>
        </div>
        </Animate>
    );
}

export default Home;