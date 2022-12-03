import React from 'react';
import Button from "../button/Button";

import githubIcon from "../../assets/github-blue.png"
import livesite from "../../assets/livesite.png"
import arrowLeft from "../../assets/arrow-left.png"
import arrowRight from "../../assets/arrow-right.png"

function Article( { logicRight, logicLeft, view, github, title, descOne, descTwo, imageOne, liveDemo, twind, react ,children }) {
    const tailwind = true;
    return (
        <article className="article-group" className={view}>
            {/*<AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" animateOut="animate__fadeOut">*/}
            <div className="article-image-section article-section" >


                    <picture className="mockup-container">
                        <img src={imageOne} alt="galactic-universe-mockup"/>
                    </picture>

                {/*<Carousel stopOnHover={true} showArrows={false} autoPlay={false} infiniteLoop={true} swipeable={false} showThumbs={false} className="carousel">*/}
                {/*    <div>*/}
                {/*        <img src={imageOne} alt=""/>*/}
                {/*    </div>*/}

                {/*</Carousel>*/}


            </div>

            {/*</AnimationOnScroll>*/}
            {/*<AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" animateOut="animate__fadeOut">*/}
            <div className="article-description-section article-section">
                <h2>{title}</h2>
                <p>
                    {descOne} </p>


                <p>{descTwo}<span className="tech">{react}</span>
                    <span className="tech"span>{twind}</span></p>

                <div className='icon-section'>
                    <a target="_blank" rel="noreferrer" href={github}><img className="tech-icons" src={githubIcon} alt=""/></a>
                    {liveDemo && <a target="_blank" rel="noreferrer" href={liveDemo}><img className="tech-icons" src={livesite} alt=""/></a>}
                </div>
            </div>
            {/*</AnimationOnScroll>*/}
            {/*<AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" animateOut="animate__fadeOut">*/}
            <div  className="article-title-section article-section" id="tech-used">
                    <div>
                        <h2>Tech used</h2>
                    </div>
                    <div>
                        {children}
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