import React from 'react';
import Button from "../button/Button";
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import javascript from "../../assets/javascript.png"
import react from "../../assets/react.png"
import githubIcon from "../../assets/github-blue.png"
import livesite from "../../assets/livesite.png"
import arrowLeft from "../../assets/arrow-left.png"
import arrowRight from "../../assets/arrow-right.png"

import { Carousel } from 'react-responsive-carousel';
import {styles as style} from 'react-responsive-carousel/lib/styles/carousel.min.css';


function Article( { logicRight, logicLeft, view, github, imageOne, imageTwo, imageThree, liveDemo, children }) {

    return (
        <article className="article-group" className={view}>
            <div className="article-image-section article-section" >
                <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} className="carousel">
                    <div>
                        <img src={imageOne} alt=""/>
                    </div>
                    <div>
                        <img src={imageTwo} alt=""/>
                    </div>
                    <div>
                        <img src={imageThree} alt=""/>
                    </div>
                </Carousel>
            </div>
            <div className="article-description-section article-section">
                    {children}
                <div className='icon-section'>
                    <a target="_blank" rel="noreferrer" href={github}><img className="tech-icons" src={githubIcon} alt=""/></a>
                    {liveDemo && <a target="_blank" rel="noreferrer" href={liveDemo}><img className="tech-icons" src={livesite} alt=""/></a>}
                </div>
            </div>
            <div  className="article-title-section article-section" id="tech-used">
                    <div>
                        <h2>Tech used</h2>
                    </div>
                    <div>
                        <img className="tech-icons-big" src={html} alt=""/>
                        <img className="tech-icons-big" src={css} alt=""/>
                        <img className="tech-icons-big" src={javascript} alt=""/>
                        <img className="tech-icons-big" src={react} alt=""/>
                    </div>
            </div>
            <div className="article-nav-section article-section">
                <Button type='button' clickFunction={logicLeft} icon={arrowLeft}/>
                <Button type='button' clickFunction={logicRight} icon={arrowRight}/>
            </div>
        </article>
    );
}

export default Article;