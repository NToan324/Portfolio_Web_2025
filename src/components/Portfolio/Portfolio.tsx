import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import { useState } from "react";
import { PortProjects, PortCertificates, PortTechStack } from "./index";

const PortfolioShowCase = () => {
  const content = [
    {
      icon: faCode,
      title: "Projects",
    },
    {
      icon: faAward,
      title: "Certificates",
    },
    {
      icon: faBoxesStacked,
      title: "Tech Stack",
    },
  ];

  const [seleted, setSelected] = useState(content[0].title);

  return (
    <div className="mt-14 md:mt-32 px-8 md:px-[100px]" id="portfolio">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-titleText font-bold gradient-text text-center">
          Portfolio Showcase
        </h1>
        <div className="flex justify-center items-center gap-2">
          <p className="text-gray-400 text-base max-w-2xl text-center">
            Explore my journey through projects, certifications, and technical
            expertise. Each section represents a milestone in my continuous
            learning path.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden grid grid-cols-3 gap-5 mt-10 rounded-2xl p-4">
        <div className="absolute background-gradient w-full h-full opacity-10"></div>
        {content.map((item, index) => (
          <Button
            className="group relative overflow-hidden !p-2 !rounded-xl !normal-case"
            key={index}
            onClick={() => setSelected(item.title)}
          >
            <div className="relative flex flex-col justify-between items-center gap-2 p-2 z-10">
              <FontAwesomeIcon
                icon={item.icon}
                className={`group-hover:rotate-6 text-xl group-hover:text-white custom-transition-all ${
                  seleted === item.title ? "text-purple" : "text-gray-400"
                }`}
              />
              <span
                className={`font-bold group-hover:text-white text-base ${
                  seleted == item.title ? "text-white" : "text-gray-400"
                }`}
              >
                {item.title}
              </span>
            </div>
            <div
              className={`absolute background-gradient w-full h-full inset-0 z-0 ${
                seleted === item.title ? "opacity-30" : "opacity-0"
              }`}
            ></div>
          </Button>
        ))}
      </div>
      {seleted === "Projects" && <PortProjects />}
      {seleted === "Certificates" && <PortCertificates />}
      {seleted === "Tech Stack" && <PortTechStack />}
    </div>
  );
};

export default PortfolioShowCase;
