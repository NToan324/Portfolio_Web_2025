import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Project_1 from "../../assets/project_1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeZoom } from "../Motion/Variants";
import { NavLink } from "react-router-dom";

const Projects = () => {
  const project = [
    {
      title: "Food Explorer",
      description:
        "Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.",
    },
    {
      title: "Support IT",
      description:
        "Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.",
    },
    {
      title: "App To Do",
      description:
        "Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.",
    },
    {
      title: "Food Explorer",
      description:
        "Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.",
    },
    {
      title: "Support IT",
      description:
        "Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.",
    },
    {
      title: "App To Do",
      description:
        "Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.",
    },
    {
      title: "Support IT",
      description:
        "Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.",
    },
  ];

  const [seeMore, setSeeMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleVisibleCount = () => {
    setSeeMore(!seeMore);
    if (!seeMore) {
      setVisibleCount(project.length);
    } else {
      setVisibleCount(4);
    }
  };

  return (
    <div className="">
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {project.slice(0, visibleCount).map((item, index) => (
          <motion.div
            variants={FadeZoom({
              direction: `${index % 2 === 0 ? "left" : "right"}`,
              duration: 2,
            })}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: false }}
            key={index}
          >
            <div className="group border border-gray-700 rounded-2xl p-4 flex flex-col justify-between items-start gap-5 bg-[#554e6b35] hover:border-purple-800 hover:shadow-purple custom-transition-all">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={Project_1}
                  alt="Project_1"
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="space-y-4">
                <h1 className="text-xl font-bold text-white">{item.title}</h1>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center">
                  <span className="text-blue text-sm">Live Demo</span>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-blue text-sm"
                  />
                </div>
                <NavLink
                  to={`/project/${item.title}`}
                  className="flex justify-between items-center !py-2 !px-4 !rounded-xl gap-2 !bg-[#ffffff0d] !normal-case"
                >
                  <span className="text-white text-sm">Details</span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-white text-sm"
                  />
                </NavLink>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {project.length > 4 && (
        <button
          className="group mt-10 overflow-hidden relative w-[140px] py-2 px-4 rounded-xl space-x-4 border-[#ffffff1a] border hover:border-[#ffffff47] custom-transition-all"
          onClick={() => handleVisibleCount()}
        >
          <span className="text-white">
            {seeMore ? "See Less" : "See More"}
          </span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-white group-hover:translate-y-1 custom-transition-all ${
              seeMore ? "rotate-180" : ""
            }`}
          />
          <div className="absolute w-full bottom-0 -left-4 h-[2px] bg-[#5a189a] custom-transition-all -translate-x-full group-hover:translate-x-0"></div>
        </button>
      )}
    </div>
  );
};

export default Projects;
