import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import pythonlogo from "../assets/pythonlogo.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mySql from "../assets/mySql.png";
import ideasmodeler from "../assets/ideasmodeler.jpg";
import powerBi from "../assets/powerBi.png";
import nodejs from "../assets/nodejs.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500 hover:bg-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500 hover:bg-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500 hover:bg-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-500 hover:bg-cyan-500",
    },
    {
      id: 5,
      src: nextjs,
      title: "Next JS",
      style: "shadow-gray-500 hover:bg-gray-500",
    },
    {
      id: 6,
      src: pythonlogo,
      title: "Python",
      style: "shadow-green-500 hover:bg-green-500",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400 hover:bg-gray-600",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400 hover:bg-sky-500",
    },
    {
      id: 9,
      src: mySql,
      title: "MySQL",
      style: "shadow-indigo-500 hover:bg-indigo-500",
    },
    {
      id: 10,
      src: ideasmodeler,
      title: "Software Ideas Modeler",
      style: "shadow-purple-500 hover:bg-purple-500",
    },
    {
      id: 11,
      src: powerBi,
      title: "Power BI",
      style: "shadow-yellow-400 hover:bg-yellow-400",
    },
    {
        id: 12,
        src: nodejs,
        title: "Node.js",
        style: "shadow-purple-500 hover:bg-purple-500",
    }
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-auto"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            These are the technologies I have worked with:
          </p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12
          sm:px-0"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-500 py-4 rounded-lg ${style} transition ease-in-out`}
            >
              <img
                src={src}
                alt={title}
                className="w-20 mx-auto transition duration-300 transform hover:scale-110"
              />
              <p className="mt-4 font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
