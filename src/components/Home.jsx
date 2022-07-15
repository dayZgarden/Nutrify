import React from "react";
import './Home.css'
 
export default function Home() {
  return (
    <div>
      <section id="home">
        <div className="container home__container">
          <div className="row">
            <div className="home__contents">
              <h1 className="home__title colored">
                Highest rated tracker amongst bodybuilders and nutritionists
              </h1>
              <h2 className="home__sub-title">
                Acheive your <span className="colored">dream</span> physique with
                <span className="colored">dayZgarden</span>
              </h2>
              <form
                id="form"
                className="input__wrapper"
                onsubmit="getCalories(event)"
              >
                <input
                  type="number"
                  className="calorie__input"
                  placeholder="Input calorie goal"
                  id="calorie"
                />
                <button className="search">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </form>
              <img
                src=""
                alt=""
                className="home__pic"
              />
            </div>
          </div>
        </div>
      </section>
 
      <section id="about-us">
        <div className="container">
          <div className="row">
            <div className="about__content">
              <div className="about__left">
                <h1 className="about__title">About Us!</h1>
                <h2 className="about__sub-title">
                  We will help you <span className="colored">reach</span> your
                  <span className="colored">goal.</span>
                </h2>
                <p className="about__para">
                  With the use of <span className="colored">dayZtracker</span>, we
                  <span className="colored">gurantee results</span> within a week.
                  <br />
                  <br />
                  We will <span className="colored">help</span> keep you on course,
                  and provide <span className="colored">guidance</span> throughout
                  your journey.
                </p>
              </div>
              <div className="about__right">
                <figure className="about__img--wrapper">
                  <img src="./assets/standout.svg" alt="" className="about__img" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <section id="macros">
        <div className="container">
          <div className="row">
            <h1 className="macro__title">Macros</h1>
            <div className="icons">
              <figure className="macro">
                <img src="./assets/protein.png" className="macro__img" />
              </figure>
              <figure className="macro">
                <img src="./assets/fat.png" className="macro__img" />
              </figure>
              <figure className="macro">
                <img src="./assets/carb.png" className="macro__img" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 
 

