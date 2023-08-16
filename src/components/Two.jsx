import React from "react";
import one from "../assets/one.svg";
import two from "../assets/two.svg";
import sidebar from "../assets/sidebar.svg";
import diary from "../assets/diary.svg";

const Two = () => {
  return (
    <div className="overflow-hidden relative  bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid justify-between items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <img className="scale-75" src={diary} alt="" />
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg relative z-[0]">
              <h2 className="text-base z-[1] font-semibold leading-7 text-indigo-600">
                Endless Diary
              </h2>
              <p className="mt-2 z-[1]  font-Amaranth text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Start Checking Day by Day Progress
              </p>
              <p className="mt-6 z-[1]  text-lg sm:text-xl lg:text-2xl leading-8 text-gray-600">
                Every single day is catalogged and is available to look at, and
                see the progress you make overtime.
              </p>
              <img
                className="absolute -z-[1] right-[50%] translate-x-[50%] scale-75 top-0 -translate-y-[30%]"
                src={two}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-1/2 w-[2vw] -translate-y-[50%] left-0"
        src={sidebar}
        alt=""
      />
    </div>
  );
};

export default Two;
