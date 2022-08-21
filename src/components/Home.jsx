import React, {Component, useRef, useState, useEffect} from "react";
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrumstickBite, faCheese, faBreadSlice, faArrowRight, faBars  } from '@fortawesome/free-solid-svg-icons'
import park from '../park.svg'
import adventure from '../adventure.svg'
import Tracker from "../page/Tracker";
import Footer from "./Footer";
 
 
export default function Home() {
  let navigate = useNavigate();
  const calorieRef = useRef(null)
  const [menu, setMenu] = useState(false)

  function handleSubmit() {
    navigate('/tracker',
    {
      state:{
        id: calorieRef.current.value
      }
    })
  } 

  function toggleBurger() {
    setMenu(!menu)
  }

  return (
    <div>
      <button onClick={toggleBurger} className="burger__wrapper">
         <FontAwesomeIcon icon={faBars} className='burger'/>
      </button>
      {menu && 
      <div className="burger__menu">
            <a href="#about-us" className="nav__right--link link__hover-effect burger__link">Home</a>
            <a href="#macros" className="nav__right--link link__hover-effect burger__link"
              >Macros</a
            >
            <button className="sign-up">
              <a href="mailto:zyad.alkurdi22@gmail.com" className="nav__right--link burger__last burger__link">Contact</a>
            </button>
      </div> }

      {!menu && <section id="home">
        <div className="container home__container">
          <div className="row">
            <div className="home__contents">
              <h1 className="home__title colored">
                Highest rated tracker amongst bodybuilders and nutritionists
              </h1>
              <h2 className="home__sub-title">
                Acheive your <span className="colored">dream</span> physique with
                <span className="colored"> Armor Up</span>
              </h2>
              <form
                id="form"
                className="input__wrapper"
                onSubmit = {handleSubmit}
              >
                <input
                  type="number"
                  className="calorie__input"
                  placeholder="Calorie goal"
                  id="calorie"
                  ref = {calorieRef}
                />
                <button className="search">
                  <FontAwesomeIcon icon={faArrowRight} className="fas fa-arrow-right"/>
                </button>
              </form>
              <figure className="park__wrapper">
                <img
                  src={park}
                  alt=""
                  className="home__pic"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>}
 
      {!menu && <section id="about-us">
        <div className="container">
          <div className="row">
            <div className="about__content">
              <div className="about__left">
                <h1 className="about__title">About Us</h1>
                <h2 className="about__sub-title">
                  We will help you <span className="colored"> reach</span> your
                  <span className="colored"> goal.</span>
                </h2>
                <p className="about__para">
                  With the use of <span className="colored">Armor Up</span>, we
                  <span className="colored"> GURANTEE</span> results within a week.
                  <br />
                  <br />
                  We will <span className="colored"> help</span> keep you on course,
                  and provide <span className="colored"> guidance</span> throughout
                  your journey.
                </p>
              </div>
              <div className="about__right">
                <figure className="about__img--wrapper">
                  <img src={adventure} alt="" className="about__img" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>}
 
      {!menu && <section id="macros">
        <div className="container">
          <div className="row">
            <h1 className="about__title center">MACROS</h1>
            <div className="icons">
              <Link to={{
                pathname: '/fat'
              }} className="macro">
                <FontAwesomeIcon className="fat macro__img" icon={faCheese} />
                <div className="macro__description">Fats</div>
              </Link>
              <Link to={{
                pathname: '/carb'
              }} className="macro">
                <FontAwesomeIcon className="carb  macro__img" icon={faBreadSlice} />
                <div className="macro__description">Carbs</div>
              </Link>
              <Link to={{
                pathname: '/protein'
              }} className="macro">
                <FontAwesomeIcon className="protein  macro__img" icon={faDrumstickBite} />
                <div className="macro__description">Proteins</div>
              </Link>
            </div>
          </div>
        </div>
      </section>}

      {!menu && <Footer />}
    </div>
  );
}
