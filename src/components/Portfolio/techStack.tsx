import Tailwind from "../../assets/TechStack/tailwind-svgrepo-com.svg";
import CSS from "../../assets/TechStack/css3-svgrepo-com.svg";
import HTML from "../../assets/TechStack/html-5-svgrepo-com.svg";
import Docker from "../../assets/TechStack/docker-svgrepo-com.svg";
import Github from "../../assets/TechStack/github-svgrepo-com.svg";
import Firebase from "../../assets/TechStack/firebase-svgrepo-com.svg";
import Java from "../../assets/TechStack/java-svgrepo-com.svg";
import JavaScript from "../../assets/TechStack/javascript-svgrepo-com.svg";
import React from "../../assets/TechStack/react-javascript-js-framework-facebook-svgrepo-com.svg";
import Nextjs from "../../assets/TechStack/nextjs-fill-svgrepo-com.svg";
import Python from "../../assets/TechStack/python-svgrepo-com.svg";
import Vercel from "../../assets/TechStack/vercel-fill-svgrepo-com.svg";
import Vite from "../../assets/TechStack/vite-svgrepo-com.svg";
import NodeJs from "../../assets/TechStack/nodejs-icon-svgrepo-com.svg";
import MaterialUi from "../../assets/TechStack/material-ui-svgrepo-com.svg";
import Figma from "../../assets/TechStack/figma-svgrepo-com.svg";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const TechStack = () => {
  const techStack = [
    {
      title: "Tailwind CSS",
      icon: Tailwind,
    },
    {
      title: "CSS",
      icon: CSS,
    },
    {
      title: "HTML",
      icon: HTML,
    },
    {
      title: "Docker",
      icon: Docker,
    },
    {
      title: "Github",
      icon: Github,
    },
    {
      title: "Firebase",
      icon: Firebase,
    },
    {
      title: "Java",
      icon: Java,
    },
    {
      title: "JavaScript",
      icon: JavaScript,
    },
    {
      title: "React",
      icon: React,
    },
    {
      title: "Next.js",
      icon: Nextjs,
    },
    {
      title: "Python",
      icon: Python,
    },
    {
      title: "Vercel",
      icon: Vercel,
    },
    {
      title: "Vite",
      icon: Vite,
    },
    {
      title: "Node.js",
      icon: NodeJs,
    },
    {
      title: "Material UI",
      icon: MaterialUi,
    },
    {
      title: "Figma",
      icon: Figma,
    },
  ];
  const [seeMore, setSeeMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  const handleVisibleCount = () => {
    setSeeMore(!seeMore);
    if (!seeMore) {
      setVisibleCount(techStack.length);
    } else {
      setVisibleCount(12);
    }
  };
  return (
    <div className="">
      <div className="mt-10 grid grid-cols-2 gap-5 justify-items-center content-center lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3">
        {techStack.slice(0, visibleCount).map((item, index) => (
          <div
            className="relative overflow-hidden group rounded-2xl w-[140px] h-[140px] bg-[#1e293b80] flex flex-col justify-center items-center gap-2 p-4 hover:bg-[#3e485a75] hover:scale-105 transition-all duration-500 ease-in-out"
            key={index}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-[70px] relative z-10"
            />
            <span className="text-gray-400 group-hover:text-white transition-all duration-500 ease-in-out">
              {item.title}
            </span>
            <div className="z-0 absolute w-[80px] h-[80px] blur-xl bg-gradient-to-r from-[#9124ff] to-[#02c4ff] opacity-0 rounded-full group-hover:opacity-70 transition-all duration-500 ease-in-out"></div>
          </div>
        ))}
      </div>
      {techStack.length > 12 && (
        <button
          className="group mt-10 overflow-hidden relative w-[140px] py-2 px-4 rounded-xl space-x-4 border-[#ffffff1a] border hover:border-[#ffffff47] transition-all duration-300 ease-in-out"
          onClick={() => handleVisibleCount()}
        >
          <span className="text-white">
            {seeMore ? "See Less" : "See More"}
          </span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-white group-hover:translate-y-1 transition-all duration-300 ease-in-out ${
              seeMore ? "rotate-180" : ""
            }`}
          />
          <div className="absolute w-full bottom-0 -left-4 h-[2px] bg-[#5a189a] transition-all duration-300 ease-in-out -translate-x-full group-hover:translate-x-0"></div>
        </button>
      )}
    </div>
  );
};

export default TechStack;
