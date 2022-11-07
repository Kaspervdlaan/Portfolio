import React from 'react';
import Article from "../../components/article/Article";
import {useState} from "react";

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
                three: 'visible',
            })
        } else if (view.three === 'visible') {
            setView({
                ...view,
                three: 'after',
                four: 'visible',
            })
        } else if (view.four === 'visible') {
            setView({
                ...view,
                four: 'after',
                one: 'visible',
            })
        }
    }

    function buttonLeftClick() {
        if (view.one === 'visible') {
            setView({
                ...view,
                one: 'after',
                four: 'visible',
            })
        } else if (view.two === 'visible') {
            setView({
                ...view,
                two: 'after',
                one: 'visible',
            })
        } else if (view.three === 'visible') {
            setView({
                ...view,
                three: 'after',
                two: 'visible',
            })
        } else if (view.four === 'visible') {
            setView({
                ...view,
                four: 'after',
                three: 'visible',
            })
        }
    }

    return (
        <>
            <Article
                title="Galactic Universe"
                image="article-one"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda atque ex ipsam rerum suscipit temporibus ullam! Consequuntur ea hic, illo numquam placeat praesentium unde voluptate! Doloremque hic illum impedit!"
                logicLeft={buttonLeftClick}
                logicRight={buttonRightClick}
                view={view.one}
            />
            <Article
                title="Second Page"
                image="article-two"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda atque ex ipsam rerum suscipit temporibus ullam! Consequuntur ea hic, illo numquam placeat praesentium unde voluptate! Doloremque hic illum impedit!"
                logicLeft={buttonLeftClick}
                logicRight={buttonRightClick}
                view={view.two}
            />
            <Article
                title="Third Page"
                image="article-three"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda atque ex ipsam rerum suscipit temporibus ullam! Consequuntur ea hic, illo numquam placeat praesentium unde voluptate! Doloremque hic illum impedit!"
                logicLeft={buttonLeftClick}
                logicRight={buttonRightClick}
                view={view.three}
            />
            <Article
                title="Fourth Page"
                image="article-four"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda atque ex ipsam rerum suscipit temporibus ullam! Consequuntur ea hic, illo numquam placeat praesentium unde voluptate! Doloremque hic illum impedit!"
                logicLeft={buttonLeftClick}
                logicRight={buttonRightClick}
                view={view.four}
            />
        </>
    );
}

export default Work;