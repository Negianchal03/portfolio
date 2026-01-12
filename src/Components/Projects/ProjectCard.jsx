import React from "react";
import bannerImg from "../../assets/img1.jpg";

const ProjectCard = ({ title, main, demoLink, sourceLink }) => {
  return (
    <div className="w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl 
                    grid grid-rows-[auto_auto_1fr_auto] overflow-hidden">

      <img className="p-4 rounded-xl" src={bannerImg} alt={title} />

      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white">
        {title}
      </h3>

      <p className="px-4 text-sm md:text-md leading-relaxed py-2 text-slate-300">
        {main}
      </p>

      <div className="p-4 flex justify-center gap-4 bg-[#0c0e19]">
        
        {/* Demo Button */}
        {demoLink ? (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="text-white py-2 px-4 rounded-3xl bg-[#465697] hover:scale-105 duration-300">
              Demo
            </button>
          </a>
        ) : (
          <button className="text-white py-2 px-4 rounded-3xl bg-gray-600 cursor-not-allowed">
            Demo
          </button>
        )}

        {/* Source Code Button */}
        {sourceLink ? (
          <a href={sourceLink} target="_blank" rel="noopener noreferrer">
            <button className="text-white py-2 px-4 rounded-3xl bg-[#465697] hover:scale-105 duration-300">
              Source Code
            </button>
          </a>
        ) : (
          <button className="text-white py-2 px-4 rounded-3xl bg-gray-600 cursor-not-allowed">
            Source Code
          </button>
        )}

      </div>
    </div>
  );
};

export default ProjectCard;
