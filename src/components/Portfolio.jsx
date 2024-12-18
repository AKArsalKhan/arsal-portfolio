import React from 'react'

import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg'; 
import todoapp from '../assets/portfolio/todoapp.png';

const Portfolio = () => {

    const portfolios =[
        {
        id:1,
        src:todoapp,
        demoLink:"https://my-final-project-hazel.vercel.app/",
        codeLink:"https://github.com/Owais-H/my_final_project",
        
        },
        {
        id:2,
        src:reactParallax,
        demoLink:"https://my-final-project-hazel.vercel.app/",
        codeLink:"https://github.com/Owais-H/my_final_project",
        },
        {
        id:3,   
        src:navbar,
        demoLink:"https://my-final-project-hazel.vercel.app/",
        codeLink:"https://github.com/Owais-H/my_final_project",
        },
        {
        id:4,
        src:reactSmooth,
        demoLink:"https://my-final-project-hazel.vercel.app/",
        codeLink:"https://github.com/Owais-H/my_final_project",
        },
        {
        id:5,
        src:installNode,
        demoLink:"https://my-final-project-hazel.vercel.app/",
        codeLink:"https://github.com/Owais-H/my_final_project",
        },
        {
        id:6,
        src:reactWeather,
        demoLink:"https://my-final-project-hazel.vercel.app/",
        codeLink:"https://github.com/Owais-H/my_final_project",
        }
          
        
]
return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Portfolio Header */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work!</p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg hover:shadow-lg"
            >
              {/* Project Image */}
              <img
                src={src}
                alt="Project Thumbnail"
                className="rounded-md duration-300 hover:scale-105"
              />

              {/* Buttons */}
              <div className="flex items-center justify-center">
                {demoLink && (
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-4 text-center duration-200 hover:scale-105 bg-blue-500 rounded-md"
                  >
                    Demo
                  </a>
                )}

                {codeLink && (
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-4 text-center duration-200 hover:scale-105 bg-gray-700 rounded-md"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;