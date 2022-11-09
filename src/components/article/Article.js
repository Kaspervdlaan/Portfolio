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
import galatic from "../../assets/galactic.PNG"
import galatic2 from "../../assets/landingpage.PNG"
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

function Article( { title, logicRight, logicLeft, view, description, descriptionTwo, github, image, liveDemo, children }) {

    return (
        <article className="article-group" className={view}>
            <div className="article-image-section article-section" className={image} >
                <Carousel showThumbs={false} className="carousel">
                    <div>
                        <img src={galatic} alt=""/>
                        <p>galactic 1</p>
                    </div>
                    <div>
                        <img src={galatic2} alt=""/>
                        <p>galactic 2</p>
                    </div>
                    <div>
                        <img src={galatic} alt=""/>
                        <p>galactic 3</p>
                    </div>
                </Carousel>
            </div>
            <div className="article-description-section article-section">

                {description && <p>{description}</p>}

                    {children}

                {descriptionTwo && <p>{descriptionTwo}</p>}

                <div className='tech-container'>
                    <span><img className="tech-icons" src={html} alt="html"/></span>
                    <span><img className="tech-icons" src={css} alt="css"/></span>
                    <span><img className="tech-icons" src={javascript} alt="javascript"/></span>
                    <span><img className="tech-icons" src={react} alt="react"/></span>
                </div>
            </div>
            <div className="article-title-section article-section">
                <div className="title-section">
                    <h2 className="bottom-title">{title}</h2>
                </div>
                <div className='icon-section'>
                    <a target="_blank" rel="noreferrer" href={github}><img className="tech-icons" src={githubIcon} alt=""/></a>
                    <a target="_blank" rel="noreferrer" href={liveDemo}><img className="tech-icons" src={livesite} alt=""/></a>
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