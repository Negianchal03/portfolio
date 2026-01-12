import React from "react";
import { IoArrowForward } from "react-icons/io5";

function About() {
  return (
    <div
      id="About"
      className=" text-white md:flex items-center justify-center bg-black bg-opacity-30 shadow-xl mx-4 md:mx-20 rounded-lg p-8 md:p-12">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          About Me
        </h2>

        <ul className="space-y-6">

        
          <li className="flex gap-4">
            <IoArrowForward size={28} className="mt-1 text-blue-400" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Frontend Developer
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                I build modern, responsive and interactive web applications
                using React, JavaScript and Tailwind CSS.
              </p>
            </div>
          </li>

          
          <li className="flex gap-4">
            <IoArrowForward size={28} className="mt-1 text-blue-400" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                UI / UX Focused
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                I focus on clean UI design, smooth animations and
                mobile-first responsive layouts.
              </p>
            </div>
          </li>

          
          <li className="flex gap-4">
            <IoArrowForward size={28} className="mt-1 text-blue-400" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Tools & Workflow
              </h3>
              <p className="text-sm md:text-base text-gray-300">
                Experienced with Git, GitHub, Vite, Figma and modern
                frontend development workflows.
              </p>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default About;
