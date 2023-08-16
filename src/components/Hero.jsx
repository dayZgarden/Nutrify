import React from "react";
import buttonAccent from "../assets/buttonAccent.svg";
import phone from "../assets/phone.svg";
import { useNavigate } from "react-router-dom";


export default function Example() {

    const navigate = useNavigate();

  return (
    <div className="overflow-hidden  bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                 #1 Nutrition Tracking App
              </h2>
              <p className="mt-2 font-Amaranth text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Build your <span className="text-[#308a7b]">Dream</span> body with Nutrify
              </p>
              <p className="mt-6 text-lg sm:text-xl lg:text-2xl leading-8 text-gray-600">
                Acheive your dream physique and see progress like you never have
                before. We’ll help you every step of the way to get there.
              </p>
              <div className=" mt-12 relative z-[0]">
                <button onClick={()=>navigate('/home')} className="z-[1] hover:bg-[#5fb8a9] relative px-6 py-4 text-lg bg-[#308a7b] text-white rounded-md">
                  Start Tracking
                </button>
                <img
                  className="absolute col-span-4 -top-1/2 left-0 w-40 h-28"
                  src={buttonAccent}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-x-hidden">
            <div className="flex-shrink-0 scale-75 md:scale-100">
              <img className="relative" src={phone} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
