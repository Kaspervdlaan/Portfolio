import React from 'react';
import Article from "../../components/article/Article";
import {useState} from "react";

import mockupPortfolio from "../../assets/Mockup-portfolio.png"
import mockup from "../../assets/mockup.png"

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
                >
                    <h2>Galactic Universe Webapp</h2>
                    <p>
                        Front-end space news/data web application featuring data from five different api endpoints. </p>

                    <p>Build using React, React hooks, React router, State, Authentication, Axios, Css modules. </p>
                </Article>
                <Article
                    logicLeft={buttonLeftClick}
                    logicRight={buttonRightClick}
                    view={view.two}
                    github="https://github.com/Kaspervdlaan/portfoliov2"
                    imageOne={mockupPortfolio}
                >
                    <h2>Portfolio website</h2>
                    <p>The website we are on right now, made from scratch.</p>
                    <p>Build using React and multiple NPM packages.</p>
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