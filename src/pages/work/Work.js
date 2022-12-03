import React from 'react';
import Article from "../../components/article/Article";
import {useState} from "react";

import bureauvanbreukelen from "../../assets/bvb.PNG"
import mockup from "../../assets/galx.PNG"
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png"

function Work() {
    const [view, setView] = useState({
        one: 'visible',
        two: 'hidden',
        three: 'hidden',
        four: 'hidden',
    })

    function buttonRightClick() {
        if (view.one === 'visible') {
            setView({
                ...view,
                one: 'after',
                two: 'visible',
            })
        } else if (view.two === 'visible') {
            setView({
                ...view,
                two: 'after',
                one: 'visible',
            })
        }
        // else if (view.three === 'visible') {
        //     setView({
        //         ...view,
        //         three: 'after',
        //         four: 'visible',
        //     })
        // } else if (view.four === 'visible') {
        //     setView({
        //         ...view,
        //         four: 'after',
        //         one: 'visible',
        //     })
        // }
    }

    function buttonLeftClick() {
        if (view.one === 'visible') {
            setView({
                ...view,
                one: 'after',
                two: 'visible',
            })
        } else if (view.two === 'visible') {
            setView({
                ...view,
                two: 'after',
                one: 'visible',
            })
        }
            // else if (view.three === 'visible') {
        //     setView({
        //         ...view,
        //         three: 'after',
        //         two: 'visible',
        //     })
        // } else if (view.four === 'visible') {
        //     setView({
        //         ...view,
        //         four: 'after',
        //         three: 'visible',
        //     })

    }

    return (
        <div className="wrapper" id="project-wrapper">

            <main id="projects">
                <Article
                    logicLeft={buttonLeftClick}
                    logicRight={buttonRightClick}
                    view={view.one}
                    liveDemo="https://chimerical-bublanina-2208d7.netlify.app/"
                    github="https://github.com/Kaspervdlaan/SpaceApp"
                    imageOne={mockup}
                    title="Galactic Universe Webapp"
                    descOne="Front-end space news/data web application featuring data from five different api endpoints."
                    descTwo="Build using React, React hooks, React router, State, Authentication, Axios, Css modules."
                    react="ReactJs"
                    twind="CSS3"
                >
                    <img className="tech-icons-big" src={html} alt=""/>
                    <img className="tech-icons-big" src={css} alt=""/>
                    <img className="tech-icons-big" src={javascript} alt=""/>
                    <img className="tech-icons-big" src={react} alt=""/>


                </Article>
                <Article
                    logicLeft={buttonLeftClick}
                    logicRight={buttonRightClick}
                    view={view.two}
                    liveDemo="https://melodious-mousse-49311c.netlify.app/"
                    github="https://github.com/Kaspervdlaan/portfoliov2"
                    imageOne={bureauvanbreukelen}
                    title="Bureau van Breukelen"
                    descOne="Website made for client. Bureau van Breukelen porfolio website."
                    descTwo="Build using:"
                    react="ReactJs"
                    twind="Tailwind"

                >
                    <img className="tech-icons-big" src={html} alt=""/>
                    <img className="tech-icons-big" src={javascript} alt=""/>
                    <img className="tech-icons-big" src={react} alt=""/>
                    <img className="tech-icons-big" src={tailwind} alt=""/>
                </Article>


                {/*<Article*/}
                {/*    title="Third Page"*/}
                {/*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda atque ex ipsam rerum suscipit temporibus ullam! Consequuntur ea hic, illo numquam placeat praesentium unde voluptate! Doloremque hic illum impedit!"*/}
                {/*    logicLeft={buttonLeftClick}*/}
                {/*    logicRight={buttonRightClick}*/}
                {/*    view={view.three}*/}
                {/*/>*/}
                {/*<Article*/}
                {/*    title="Fourth Page"*/}
                {/*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda atque ex ipsam rerum suscipit temporibus ullam! Consequuntur ea hic, illo numquam placeat praesentium unde voluptate! Doloremque hic illum impedit!"*/}
                {/*    logicLeft={buttonLeftClick}*/}
                {/*    logicRight={buttonRightClick}*/}
                {/*    view={view.four}*/}
                {/*/>*/}
            </main>

        </div>
    );
}

export default Work;