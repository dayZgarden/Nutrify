import React from "react";
import three from "../assets/three.svg";
import sidebar from "../assets/sidebar.svg";
import threepicture from "../assets/threepicture.svg";

const Testimonials = () => {
  return (
    <div className="w-full bg-[#a1c9c2]">
    <section class="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:px-8">
      <div class="absolute inset-0 -z-10 opacity-20"></div>
      <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#cfdfdc] shadow-xl shadow-indigo-600/10 "></div>
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <h2 className="text-center z-[1] text-xl font-semibold leading-7 text-indigo-600">
            What are others saying?
          </h2>
        <figure class="mt-10">
          <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Whether it be your calories, weight, protein, or carbs, you’ll find what you need. I have made insane progress since using Nutrify.”
            </p>
          </blockquote>
          <figcaption class="mt-10">
            <img
              class="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
              <div class="font-semibold text-gray-900">Judith Black</div>
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                class="fill-gray-900"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div class="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  </div>
  );
};

export default Testimonials;
