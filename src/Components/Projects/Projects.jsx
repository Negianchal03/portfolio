import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">
        Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-6">

       <ProjectCard 
       title="E-Commerce Website"  
       main="This is a static e-commerce website created using HTML and CSS. It includes product cards, category sections, and a responsive layout design."
       demoLink="https://e-commerce-ecru-xi-61.vercel.app/"
      sourceLink="https://github.com/Negianchal03/E-Commerce"
      />


      <ProjectCard 
      title="Calculator"  
      main="A simple calculator built using JavaScript. It performs basic arithmetic operations like addition, subtraction, multiplication, and division with a clean UI."
      demoLink="https://calculator-sigma-teal.vercel.app/"
      sourceLink="https://github.com/Negianchal03/calculator"
      />
      
      
      <ProjectCard
       title="Todo List"
       main="A simple yet interactive Todo List application built using React and Tailwind CSS. It allows users to add, delete, and manage tasks with real-time state updates and a clean user interface."
       demoLink="https://todo-list-phi-blond.vercel.app/"
       sourceLink="https://github.com/Negianchal03/todo-list"
       />

        
      <ProjectCard 
      title="Weather App"  
      main="A modern weather application developed using React and Tailwind CSS. It provides real-time weather information with a clean and responsive design."
      demoLink="https://weatherapplication-eta-two.vercel.app/"
      sourceLink="https://github.com/Negianchal03/weatherapplication"
      />

      </div>
    </div>
  )
}

export default Projects
