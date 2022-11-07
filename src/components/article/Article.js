import React, {useState} from 'react';
import Button from "../button/Button";
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import javascript from "../../assets/javascript.png"
import react from "../../assets/react.png"
import githubIcon from "../../assets/github-blue.png"
import livesite from "../../assets/livesite.png"
import arrowLeft from "../../assets/arrow-left.png"
import arrowRight from "../../assets/arrow-right.png"


function Article( { title, logicRight, logicLeft, view, description, github, image, liveDemo }) {

    return (
        <article className="article-group" className={view}>
            <div className="article-image-section article-section" className={image} >

            </div>
            <div className="article-description-section article-section">
                <p>
                    {description}
                </p>

                <div className='tech-container'>
                    <span><img className="tech-icons" src={html} alt="html"/></span>
                    <span><img className="tech-icons" src={css} alt="css"/></span>
                    <span><img className="tech-icons" src={javascript} alt="javascript"/></span>
                    <span><img className="tech-icons" src={react} alt="react"/></span>
                </div>
            </div>
            <div className="article-title-section article-section">
                <div className="title-section">
                    <h2>{title}</h2>
                </div>
                <div className='icon-section'>
                    <a href={github}><img className="tech-icons" src={githubIcon} alt=""/></a>
                    <a href={liveDemo}><img className="tech-icons" src={livesite} alt=""/></a>
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