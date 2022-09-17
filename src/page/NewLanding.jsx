import React, { useRef, useState, useEffect } from "react";
import "../components/newLanding.css"
import Flower from "../assets/Flower.svg"
import buttonAccent from "../assets/buttonAccent.svg"
import heroBottom from "../assets/heroBottom.svg"
import heroBottomNext from "../assets/heroBottomNext.svg"
import underlineAccent from "../assets/underlineAccent.svg"
import { useNavigate } from "react-router-dom";

import one from "../assets/one.svg"
import sidebar from "../assets/sidebar.svg"
import avocado from "../assets/avocado.json"
import pink from "../assets/pink.json"
import yellow from "../assets/yellow.json"
import red from "../assets/red.json"
import searchWidget from "../assets/searchWidget.svg"
import calWidget from "../assets/calWidget.svg"
import accent from "../assets/accent.svg"

import two from "../assets/two.svg"
import diary from "../assets/diary.svg"

import three from "../assets/three.svg"
import threepicture from "../assets/threepicture.svg"

import testBar from "../assets/testBar.svg"
import rightBracket from "../assets/rightBracket.svg"
import test__picture from "../assets/test__picture.svg"

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { FiMenu } from "react-icons/fi";

import Lottie from "lottie-web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function NewLanding() {

    const navigate = useNavigate();
    const avocadoRef = useRef(null);
    const extraRef = useRef(null);
    const yellowRef = useRef(null);
    const redRef = useRef(null);
    const extraRef2 = useRef(null);
    const yellowRef2 = useRef(null);
    const redRef2 = useRef(null);
    const [x, setX] = useState(0);

    useEffect(() => {
        if(x === 0){
        Lottie.loadAnimation({
            container: avocadoRef.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: avocado,
        });
        Lottie.loadAnimation({
            container: extraRef.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: pink,
        });
        Lottie.loadAnimation({
            container: redRef.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: red,
        });
        Lottie.loadAnimation({
            container: yellowRef.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: yellow,
        });
        Lottie.loadAnimation({
            container: extraRef2.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: pink,
        });
        Lottie.loadAnimation({
            container: redRef2.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: red,
        });
        Lottie.loadAnimation({
            container: yellowRef2.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: yellow,
        });
    }
    }, )

  return (
    <div className="landing">

        <section className="hero">
            <div className="row">
                <nav className="navbar">
                    <div className="nav__left">
                        <a href="/" className="nav__icon">Nutrify</a>
                    </div>
                    <div className="nav__middle">
                        <ul className="nav__middle--links">
                            <li className="nav__link">About</li>
                            <li className="nav__link">App</li>
                            <li className="nav__link">Community</li>
                            <li className="nav__link">Steps</li>
                        </ul>
                    </div>
                    <div className="nav__right">
                        <button className="nav__button">Sign in</button>
                    </div>
                    <FiMenu className="burger" />
                </nav>

                <div className="home__wrapper">
                    <div className="home__left">
                        <div>
                            <h1 className="home__title">Build your healthy dream body today</h1>
                            <img className="underline__accent" src={underlineAccent} alt="" />
                        </div>
                        <p className="home__description">Acheive your dream physique and see progress like you never have before. We’ll help you every step of the way to get there.</p>
                        <div className="home__buttons">
                            <button onClick={() => navigate('/temp')} className="home__button button__green">Download the app</button>
                            <button className="home__button button__clear">Create an account</button>
                            <img src={buttonAccent} alt="" className="button__accent left__accent" />
                            <img src={buttonAccent} alt="" className="button__accent right__accent" />
                        </div>
                    </div>
                    <img src={Flower} alt="" className="home__right " />
                </div>
                <figure ref={extraRef} className="extra"></figure>
                <figure ref={yellowRef} className="yellow"></figure>
                <figure ref={redRef} className="red"></figure>
            </div>
            

            <img src={heroBottom} alt="" className="home__bottom" />
        </section>

        <div className="flipped">
            <img src={heroBottomNext} alt="" className="home__bottom__next" />
            <figure ref={extraRef2} className="extra2"></figure>
            <figure ref={yellowRef2} className="yellow2"></figure>
            <figure ref={redRef2} className="red2"></figure>
            <img src={Flower} alt="" className="flower2" />

        </div>

        <section className="gurantee">
            <div className="gurantee__content">
                <h3 className="section__title">Nutrify Gurantee</h3>
                <p className="section__para">Acheive your dream physique and see progress like you never have before. We’ll help you every step of the way to get there.</p>
            </div>
        </section>

        <section className="step__one">
            <div className="row">
                <div className="step__wrapper">
                    <div className="one__left">
                        <h3 className="section__title">Track Food</h3>
                        <h2 className="step__title">
                            Log from over 10 million foods
                        </h2>
                        <img src={one} alt="" className="one" />
                        <p className="section__para step__para">Accurate nutritional informational for millions of different foods at the ease of a single button or scan.</p>
                    </div>
                    <figure ref={avocadoRef} className="one__right avocado">
                        <img src={searchWidget} alt="" className="searchWid" />
                        <img src={calWidget} alt="" className="calWid" />
                        <img src={accent} alt="" className="accent" />
                    </figure>
                </div>
            </div>
                <img src={sidebar} alt="" className="sidebar sidebar__right" />
        </section>

        <section className="step__one">
            <div className="row">
                <div className="step__wrapper step__two">
                <img src={diary} alt="" className="one__right diary" />
                    <div className="one__left">
                        <h3 className="section__title">Endless diary</h3>
                        <h2 className="step__title">
                        Check day by day progress
                        </h2>
                        <img src={two} alt="" className="one two" />
                        <p className="section__para step__para two__para">Every single day is catalogged and is available to look at, and see the progress you make overtime.</p>
                    </div>
                    
                </div>
            </div>
                <img src={sidebar} alt="" className="sidebar sidebar__left" />
        </section>
        
        <section className="step__one">
            <div className="row">
                <div className="step__wrapper step__three">
                    <div className="one__left">
                        <h3 className="section__title">Driven growth</h3>
                        <h2 className="step__title">
                        Set desired goals with tips 
                        </h2>
                        <img src={three} alt="" className="one three" />
                        <p className="section__para step__para">Whether it be your calories, weight, proteins, carbohydrates, or fats goal, you can set it with our suggestion to help keep you on track.</p>
                    </div>
                    <img src={threepicture} alt="" className="one__right three__picture" />
                </div>
            </div>
                <img src={sidebar} alt="" className="sidebar sidebar__right" />
        </section>
        
        <section className="testimonials">
            <img src={testBar} alt="" className="testBar testBar1" />
            <img src={testBar} alt="" className="testBar testBar2" />
            <div className="row">
                <div className="testimonials__wrapper">
                    <h3 className="section__title test__section--title">You're not alone</h3>
                    <h2 className="step__title test__title">See what others have to say</h2>
                    <div className="box__accent"></div> 
                    <div className="test__card">
                        <div className="test__card--left">
                            <p className="section__para test__para">Whether it be your calories, weight, protein, or carbs, you’ll find what you need.</p>
                            <div className="test__left--middle">
                                <div className="green__box"></div>
                                <div className="connector"></div>
                                <div className="name__title">
                                    <div className="test__name">Zeke Alfonso</div>
                                    <div className="test__name__title">Bodybuilder Success</div>
                                </div>
                            </div>
                            <div className="test__left--buttons">
                                <button className="test__left--button test__button"> <FontAwesomeIcon icon={faArrowLeft} className="arrow" /> </button>
                                <button className="test__right--button test__button"> <FontAwesomeIcon icon={faArrowRight} className="arrow" />  </button>
                            </div>
                        </div>
                        <div className="test__card--right">
                            <img src={test__picture} alt="" className="test__right--image" />
                            <img src={rightBracket} alt="" className="right__bracket" />
                        </div>
                        <span className="dots">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <footer className="footer">
            <div className="row">
                <div className="footerbar">
                    <nav className="navbar">
                            <div className="nav__left">
                                <a href="/" className="nav__icon">Nutrify</a>
                            </div>
                            <div className="nav__middle footer__right">
                                <ul className="nav__middle--links">
                                    <li className="nav__link">About</li>
                                    <li className="nav__link">App</li>
                                    <li className="nav__link">Community</li>
                                    <li className="nav__link">Steps</li>
                                    <li className="nav__link">Careers</li>
                                </ul>
                            </div>
                        </nav>
                </div>
            </div>
            <span className="bottombg"></span>
        </footer>
    </div>
  );
}
