import './App.css';


function App() {

    let activeIndex = 0;

    const articleGroup = document.getElementsByClassName("article-group")

    function handleLeftClick() {
        const nextIndex = activeIndex + 1 <= articleGroup.length - 1 ? activeIndex + 1 : 0;
        const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
            nextArticle = document.querySelector(`[data-index="${nextIndex}"]`)

        currentArticle.dataset.status = "after";
        nextArticle.dataset.status = "active";

        activeIndex = nextIndex;
    }

    function handleRightClick() {
        const nextIndex = activeIndex + 1 <= articleGroup.length - 1 ? activeIndex + 1 : 0;
        const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`),
            nextArticle = document.querySelector(`[data-index="${nextIndex}"]`)

        currentArticle.dataset.status = "after";
        nextArticle.dataset.status = "active";

        activeIndex = nextIndex;
    }

    return (
        <div className='wrapper'>
            <nav>
                <div id="nav-logo-section" className="nav-section">
                    <a href="#">🏠</a>
                </div>
                <div id="nav-link-section" className="nav-section">
                    <a href="#">ABOUT</a>
                    <a href="#">WORK</a>
                </div>
                <div id="nav-social-section" className="nav-section">
                    <a href="">🍉</a>
                    <a href="">🍋</a>
                </div>
                <div id="nav-contact-section" className="nav-section">
                    <a href="">Contact me!</a>
                </div>
            </nav>

            <main>
                <article className="article-group" data-index="0" data-status="active">
                    <div className="article-image-section article-section">

                    </div>
                    <div className="article-description-section article-section">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at consectetur cumque ea
                            eos et inventore ipsa laborum natus nihil perferendis repellendus sunt tempore, unde vero.
                        </p>

                        <div className='tech-container'>
                            <span>💣</span>
                            <span>🛀</span>
                            <span>🛌</span>
                            <span>🧗‍♂️</span>
                        </div>
                    </div>
                    <div className="article-title-section article-section">
                        <div className="title-section">
                            <h2>GALACTIC UNIVERSE</h2>
                        </div>
                        <div className='icon-section'>
                            <a href="">🍉</a>
                        </div>
                    </div>
                    <div className="article-nav-section article-section">
                        <button type="button" onClick={handleLeftClick}>⬅️</button>
                        <button type="button" onClick={handleRightClick}>➡️</button>
                    </div>
                </article>

                <article className="article-group" data-index="1" data-status="inactive">
                    <div className="article-image-section article-section">

                    </div>
                    <div className="article-description-section article-section">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at consectetur cumque ea
                            eos et inventore ipsa laborum natus nihil perferendis repellendus sunt tempore, unde vero.
                        </p>

                        <div className='tech-container'>
                            <span>💣</span>
                            <span>🛀</span>
                            <span>🛌</span>
                            <span>🧗‍♂️</span>
                        </div>
                    </div>
                    <div className="article-title-section article-section">
                        <div className="title-section">
                            <h2>Portfolio website</h2>
                        </div>
                        <div className='icon-section'>
                            <a href="">🍉</a>
                        </div>
                    </div>
                    <div className="article-nav-section article-section">
                        <button type="button" onClick={handleLeftClick}>⬅️</button>
                        <button type="button" onClick={handleRightClick}>➡️</button>
                    </div>
                </article>

                <article className="article-group" data-index="2" data-status="inactive">
                    <div className="article-image-section article-section">

                    </div>
                    <div className="article-description-section article-section">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at consectetur cumque ea
                            eos et inventore ipsa laborum natus nihil perferendis repellendus sunt tempore, unde vero.
                        </p>

                        <div className='tech-container'>
                            <span>💣</span>
                            <span>🛀</span>
                            <span>🛌</span>
                            <span>🧗‍♂️</span>
                        </div>
                    </div>
                    <div className="article-title-section article-section">
                        <div className="title-section">
                            <h2>Avalonia climbing</h2>
                        </div>
                        <div className='icon-section'>
                            <a href="">🍉</a>
                        </div>
                    </div>
                    <div className="article-nav-section article-section">
                        <button type="button" onClick={handleLeftClick}>⬅️</button>
                        <button type="button" onClick={handleRightClick}>➡️</button>
                    </div>
                </article>

                <article className="article-group" data-index="3" data-status="inactive">
                    <div className="article-image-section article-section">

                    </div>
                    <div className="article-description-section article-section">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at consectetur cumque ea
                            eos et inventore ipsa laborum natus nihil perferendis repellendus sunt tempore, unde vero.
                        </p>

                        <div className='tech-container'>
                            <span>💣</span>
                            <span>🛀</span>
                            <span>🛌</span>
                            <span>🧗‍♂️</span>
                        </div>
                    </div>
                    <div className="article-title-section article-section">
                        <div className="title-section">
                            <h2>DFJLDKFLDKFJKLDFL</h2>
                        </div>
                        <div className='icon-section'>
                            <a href="">🍉</a>
                        </div>
                    </div>
                    <div className="article-nav-section article-section">
                        <button type="button" onClick={handleLeftClick}>⬅️</button>
                        <button type="button" onClick={handleRightClick}>➡️</button>
                    </div>
                </article>
            </main>
        </div>
    );
}

export default App;
