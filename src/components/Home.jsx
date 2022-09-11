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

      {!menu && 
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
              }
    </div>
  )
}
