import React from 'react'
 
export default function Nav() {
  return (
         <nav>
        <div className="nav__content">
          <div className="nav__left">
            <img src="https://day-ztracker.vercel.app/assets/icons8-flat-60.png" className="logo__img" />
            <h1 className="nav__title">dayZtracker</h1>
          </div>
          <div className="nav__right">
            <a href="/" className="nav__right--link link__hover-effect">Home</a>
            <a href="#macros" className="nav__right--link link__hover-effect"
              >Macros</a
            >
            <button className="sign-up">
              <a href="mailto:zyad.alkurdi22@gmail.com" className="nav__right--link last">Contact</a>
            </button>
          </div>
        </div>
      </nav>
  )
}
 
 

