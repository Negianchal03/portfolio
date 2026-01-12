import React from "react";
import { FaHtml5,FaCss3,FaJs,FaReact,FaFigma} from "react-icons/fa";
import { SiTailwindcss, SiGithub } from "react-icons/si";

const Skills = () => {
  return (
    <div id="Skills" className="px-6 py-12 md:px-20 md:py-20">

      {/* Heading */}
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">
        Skills
      </h1>

      <div className="flex flex-col md:flex-row gap-12">

        {/* LEFT SIDE - ICONS */}
        <div
          className="
            md:w-2/5
            grid grid-cols-3 sm:grid-cols-4
            gap-x-5 gap-y-5
            justify-items-center
            mt-4 md:mt-16
          "
        >
          <SkillIcon icon={<FaHtml5 color="#E34F26" />} />
          <SkillIcon icon={<FaCss3 color="#1572B6" />} />
          <SkillIcon icon={<FaJs color="#F7DF1E" />} />
          <SkillIcon icon={<FaReact color="#61DAFB" />} />

          <SkillIcon icon={<SiTailwindcss color="#38BDF8" />} />
          <SkillIcon icon={<FaFigma color="#F24E1E" />} />
          <SkillIcon icon={<SiGithub color="#ffffff" />} />
        </div>

        {/* RIGHT SIDE - CARDS */}
        <div className="md:w-1/2 space-y-6">

          <SkillCard
            title="Frontend Development"
            description="Building fast, responsive and interactive user interfaces."
            points={[
              "HTML, CSS, JavaScript (ES6+)",
              "React.js & reusable components",
              "Clean and maintainable UI code"
            ]}
          />

          <SkillCard
            title="UI & Styling"
            description="Creating pixel-perfect and responsive layouts."
            points={[
              "Tailwind CSS",
              "Mobile-first responsive design",
              "Figma to code workflow"
            ]}
          />

          <SkillCard
            title="Tools & Workflow"
            description="Modern tools for efficient frontend development."
            points={[
              "Git & GitHub version control",
              "Vite & modern bundlers",
              "Debugging with Chrome DevTools"
            ]}
          />

        </div>
      </div>
    </div>
  );
};

/* Components */

const SkillIcon = ({ icon }) => (
  <div
    className="
      w-20 h-20 md:w-24 md:h-24
      bg-black rounded-2xl
      flex items-center justify-center
      hover:scale-105 transition
    "
  >
    <span className="text-4xl md:text-5xl">{icon}</span>
  </div>
);

const SkillCard = ({ title, description, points }) => (
  <div className="bg-slate-950 bg-opacity-50 p-5 rounded-xl text-white">
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-sm text-gray-300 mt-1">{description}</p>
    <ul className="text-sm mt-2 space-y-1">
      {points.map((p, i) => (
        <li key={i}>• {p}</li>
      ))}
    </ul>
  </div>
);

export default Skills;
