import React from "react";
import one from "../assets/one.svg";
import searchWidget from "../assets/searchWidget.svg";
import calWidget from "../assets/calWidget.svg";
import accent from "../assets/accent.svg";
import avocado from "../assets/avocado.json";
import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-web";
import sidebar from "../assets/sidebar.svg";

const One = () => {

    const avocadoRef = useRef(null);
    const [X, setX] = useState(0);


    useEffect(() => {
        console.log(X)
        if (X === 0) {
            Lottie.loadAnimation({
                container: avocadoRef.current,
                animationData: avocado,
                renderer: "svg",
                loop: true,
                autoplay: true,
            });
        }
    }, [X]);

    useEffect(() => {
        setX[X + 1]
        console.log(X)
    }, [])


  return (
    <div className="overflow-hidden relative  bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg relative z-[0]">
              <h2 className="text-base z-[1] font-semibold leading-7 text-indigo-600">
                Track Food
              </h2>
              <p className="mt-2 z-[1]  font-Amaranth text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Log from over 10 million foods
              </p>
              <p className="mt-6 z-[1]  text-lg sm:text-xl lg:text-2xl leading-8 text-gray-600">
                Accurate nutritional informational for millions of different
                foods at the ease of a single button or scan.
              </p>
              <img className="absolute -z-[1] left-0 translate-x-[50%] scale-75 top-0 -translate-y-[30%]" src={one} alt="" />
            </div>
          </div>
          <figure ref={avocadoRef} className="z-[10] relative scale-75">
            <img src={searchWidget} alt="" className="absolute top-6 -left-8" />
            <img src={calWidget} alt="" className="absolute z-[12] right-24 top-0 scale-75" />
            <img src={accent} alt="" className="absolute" />
          </figure>
        </div>
      </div>
      <img className="absolute top-1/2 w-[2vw] -translate-y-[50%] right-0" src={sidebar} alt="" />
    </div>
  );
};

export default One;
