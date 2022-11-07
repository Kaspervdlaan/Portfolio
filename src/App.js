import './App.css';
import {Link, NavLink, Route} from "react-router-dom";
import Article from "./components/article/Article";
import Nav from "./components/nav/Nav";
import About from "./pages/about/About";
import Work from "./pages/work/Work";


function App() {

    // let activeIndex = 0;
    //
    // const articleGroup = document.getElementsByClassName("article-group")

    // function handleLeftClick() {
    //     const nextIndex = activeIndex + 1 <= articleGroup.length - 1 ? activeIndex + 1 : 0;
    //     const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
    //         nextArticle = document.querySelector(`[data-index="${nextIndex}"]`)
    //
    //     currentArticle.dataset.status = "after";
    //     nextArticle.dataset.status = "active";
    //
    //     activeIndex = nextIndex;
    // }
    //
    // function handleRightClick() {
    //     const nextIndex = activeIndex + 1 <= articleGroup.length - 1 ? activeIndex + 1 : 0;
    //     const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
    //         nextArticle = document.querySelector(`[data-index="${nextIndex}"]`)
    //
    //     currentArticle.dataset.status = "after";
    //     nextArticle.dataset.status = "active";
    //
    //     activeIndex = nextIndex;
    // }

    return (
        <div className='wrapper'>
            <Nav/>

            <main>

                    <Work/>



                    <About/>

            </main>
        </div>
);
}

export default App;
