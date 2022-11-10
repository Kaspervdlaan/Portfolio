import React, {useRef} from 'react';
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import emailjs from '@emailjs/browser';
import swal from "sweetalert";


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l37yjbj', 'template_4nzdrlm', form.current, 'TUrBsSvMuIfPa4Trp')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                swal({
                    className:"alert",
                    title: "Message send!",
                    text: "",
                    button: "Continue...",
                });
            }, (error) => {
                console.log(error.text);
                swal({
                    className:"error",
                    title:"Something went wrong..",
                    text:"",
                    button: "Continue...",
                })
            });

    };
    return (
        <div id="contact" className="wrapper">
            <main>

                <article className="article-group contact-page ">
                    <div id="about-me" className="article-image-section article-section">
                        <h3>About me</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad consectetur consequuntur dignissimos dolorem in, incidunt laboriosam, laudantium nesciunt nobis placeat quod, ratione recusandae rerum sint sit soluta unde voluptatibus.</p>
                    </div>

                    <div className="article-title-section article-section">
                        <div className="title-section">
                            <h2>Techstack</h2>
                        </div>
                        <div className='icon-section techstack-icon-section'>
                            <div className="top-icon-section">
                                <img className="tech-icons-big" src={html} alt=""/>
                                <img className="tech-icons-big" src={css} alt=""/>
                                <img className="tech-icons-big" src={javascript} alt=""/>
                                <img className="tech-icons-big" src={react} alt=""/>
                            </div>
                            <div className="bottom-icon-section">
                                <img className="tech-icons-big" src={react} alt=""/>
                                <img className="tech-icons-big" src={html} alt=""/>
                                <img className="tech-icons-big" src={css} alt=""/>
                                <img className="tech-icons-big" src={javascript} alt=""/>
                            </div>


                        </div>
                        <div className="article-description-section article-section">

                            <form ref={form} onSubmit={sendEmail}>
                                <h2 className="message-h2">Send me a message!</h2>
                                <label>
                                    <input required placeholder="email" type="email" name="user_email" /></label>
                                <label>
                                    <textarea required cols="30" rows="10" placeholder="message" name="message" /></label>
                                <button type="submit" id="send-button" className="contact-button">Send</button>/>
                            </form>

                        </div>
                    </div>
                    <div className="article-nav-section article-section">

                    </div>
                </article>
            </main>
        </div>
    );
}

export default Contact;