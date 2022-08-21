import React from "react";
import './Footer.css'
 
export default function Footer() {
  return (
    <footer>
      <div className="container footer__container">
        <div className="row">
          <div className="footer__content">
            <div className="footer__top">
              <a
                href="mailto:zyad.alkurdi22@gmail.com"
                className="footer__right--link link__hover-effect"
              >
                Contact
              </a>
              <a
                href="#about-us"
                className="footer__right--link link__hover-effect"
              >
                About
              </a>
              <a href="#" className="footer__right--link reviews link__hover-effect">
                Reviews
              </a>
            </div>
            <div className="footer__sep"></div>
            <div className="footer__bottom">
              <h1 className="footer__bottom--title">Armor Up</h1>
              <img
                src="https://day-ztracker.vercel.app/assets/icons8-flat-60.png"
                className="logo__img footer__img"
              />
              <p className="copyright">
                Copyright &copy; 2022. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
 

