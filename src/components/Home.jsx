import React, {  useRef, useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import flower from "../assets/flower.svg";

export default function Home() {
  let navigate = useNavigate();
  const calorieRef = useRef(null);
  const [menu, setMenu] = useState(false);

  function handleSubmit() {
    navigate("/tracker", {
      state: {
        id: calorieRef.current.value,
      },
    });
  }

  function toggleBurger() {
    setMenu(!menu);
  }

  return (
    <div>
     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-40 w-auto"
            src={flower}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Start by adding a calorie goal
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" id="form" onSubmit={handleSubmit} action="#" method="POST">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Input a Calorie Goal
              </label>
              <div className="mt-2">
                <input
            type="number"
            placeholder="Calorie goal"
            id="calorie"
            ref={calorieRef}
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go to Nutrition Tracker
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
