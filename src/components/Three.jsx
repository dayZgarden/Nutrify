import React from "react";
import three from "../assets/three.svg";
import sidebar from "../assets/sidebar.svg";
import threepicture from "../assets/threepicture.svg";

const Three = () => {


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
              <img className="absolute -z-[1] right-[50%] translate-x-[50%] scale-75 top-0 -translate-y-[30%]" src={three} alt="" />
            </div>
          </div>
          <img className="scale-75" src={threepicture} alt="" />
        </div>
      </div>
      <img className="absolute top-1/2 w-[2vw] -translate-y-[50%] right-0" src={sidebar} alt="" />
    </div>
  );
};

export default Three;
