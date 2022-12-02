import React, {useRef} from 'react';
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import git from "../../assets/git.png";
import tailwind from "../../assets/tailwind.png"
import emailjs from '@emailjs/browser';
import swal from "sweetalert";
import { AnimationOnScroll } from 'react-animation-on-scroll';

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
        <div id="about" >
            <main>

                <article id="contact" className="article-group contact-page ">
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOut="">
                        <div id="about-me" className="article-image-section article-section">
                        <h3>A fullstack developer in the making</h3>
                        <p>I am currently halfway finished doing the Fullstack developer bootcamp by NOVI hogeschool. In the last half year I’ve been hard at work following the front end side of the bootcamp. Here I have learned that I love the art of coding, from problem solving to always being able to learn more. </p>

                    </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll  animateIn="animate__fadeInUp" animateOut="animate__slideOutDown">
                    <div className="tech-stack-section ">
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
                                <img className="tech-icons-big" src={git} alt=""/>
                                <img className="tech-icons-big" src={tailwind} alt=""/>
                                {/*<img className="tech-icons-big" src={css} alt=""/>*/}
                                {/*<img className="tech-icons-big" src={javascript} alt=""/>*/}
                            </div>


                        </div>
                        <div className=" form-section" id="form-section">

                            <form ref={form} onSubmit={sendEmail}>
                                <h2 className="message-h2">Send me a message!</h2>
                                <label>
                                    <input required placeholder="email" type="email" name="user_email" /></label>
                                <label>
                                    < textarea id="contact" required cols="30" rows="10" placeholder="message" name="message" /></label>
                                <button type="submit" id="send-button" className="contact-button">Send</button>/>
                            </form>

                        </div>
                    </div>
                    </AnimationOnScroll>
                </article>
            </main>
        </div>
    );
}

export default Contact;