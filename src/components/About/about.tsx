import Star from "../../components/CustomIcon/starCustom";
import { faFileLines } from "@fortawesome/free-solid-svg-icons/faFileLines";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import Avatar from "../../assets/avatar.svg";
const About = () => {
  return (
    <div className="mt-32 px-[100px]">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-6xl font-bold gradient-text">About Me</h1>
        <div className="flex justify-center items-center gap-2">
          <Star fillColor="rgb(192 132 252)" />
          <p className="text-gray-400 text-base">
            Transforming ideas into digital experiences
          </p>
          <Star fillColor="rgb(192 132 252)" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center gap-10 mt-20">
        <section className="w-1/2 flex flex-col justify-between items-start gap-5">
          <div className="space-y-5">
            <h2 className="font-bold text-5xl flex flex-col gap-4">
              <span className="gradient-text">Hello, I'm</span>
              <span className="font-bold text-white">Nhat Toan</span>
            </h2>
            <p className="text-gray-400 text-lg">
              A computer and telecommunications network engineering student who
              is interested in the development of front-end. I focus on creating
              an interesting digital experience and always trying to provide the
              best solution in every project.
            </p>
          </div>
          <div className="flex justify-start items-center gap-5 font-medium">
            <button className="button-custom text-white bg-gradient-to-r  from-[#9124ff] to-[#02c4ff]">
              <FontAwesomeIcon icon={faFileLines} className="mr-2" />
              Download CV
            </button>
            <button className="button-custom border border-[#9124ff] text-purple hover:bg-hover">
              <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
              View Project
            </button>
          </div>
        </section>
        <section className="relative w-1/2 flex justify-center items-center">
          <div className="relative group border overflow-hidden border-gray-200 rounded-full w-[300px] h-[300px] flex justify-center items-center shadow-[0_0_60px_10px_rgba(93,21,227,0.4)] transition-all duration-500 ease-in-out hover:border-transparent">
            <img
              src={Avatar}
              alt="avatar"
              className="w-[300px] group-hover:-rotate-3 group-hover:scale-110 transition-all duration-500 ease-in-out group-hover:bg-gray-200"
            />
            <div className="absolute scale-0 border-8 opacity-50 border-gray-200 rounded-full w-[300px] h-[300px] group-hover:scale-100 transition-transform duration-500 ease-in-out"></div>
            <div className="absolute w-[300px] h-[300px] bg-white opacity-30 top-0 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-out"></div>
            <div className="absolute w-[300px] h-[300px] bg-white opacity-30 top-0 -translate-y-full group-hover:translate-y-full transition-all duration-700 ease-out"></div>
          </div>
        </section>
      </div>
      <section className="grid grid-cols-3 gap-5 mt-20">
        <div className="group relative overflow-hidden max-w-[400px] rounded-2xl p-5 flex flex-col gap-5 hover:scale-105 transition-transform duration-500 ease-in-out">
          <div className="absolute inset-0 w-full h-full background-gradient opacity-10 group-hover:opacity-20 transition-all duration-300 ease-in-out"></div>
          <div className="flex justify-between items-center">
            <FontAwesomeIcon
              icon={faCode}
              className="text-white w-[30px] h-[30px] p-4 rounded-full bg-gray-600 group-hover:rotate-6 transition-all duration-300 ease-in-out"
            />
            <span className="font-bold text-4xl text-white">11</span>
          </div>
          <div className="text-white flex justify-between items-end">
            <div className="flex flex-col justify-between items-start gap-2">
              <p className="text-base">TOTAL PROJECT</p>
              <p className="text-sm">Inovative web solutions crafted</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="-rotate-45" />
          </div>
        </div>
        <div className="group relative overflow-hidden max-w-[400px] rounded-2xl p-5 flex flex-col gap-5 hover:scale-105 transition-transform duration-500 ease-in-out">
          <div className="absolute inset-0 w-full h-full background-gradient opacity-10 group-hover:opacity-20 transition-all duration-300 ease-in-out"></div>
          <div className="flex justify-between items-center">
            <FontAwesomeIcon
              icon={faAward}
              className="text-white w-[30px] h-[30px] p-4 rounded-full bg-gray-600 group-hover:rotate-6 transition-all duration-300 ease-in-out"
            />
            <span className="font-bold text-4xl text-white">7</span>
          </div>
          <div className="text-white flex justify-between items-end">
            <div className="flex flex-col justify-between items-start gap-2">
              <p className="text-base">CERTIFICATES</p>
              <p className="text-sm">Professional skills validated</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="-rotate-45" />
          </div>
        </div>
        <div className="group relative overflow-hidden max-w-[400px] rounded-2xl p-5 flex flex-col gap-5 hover:scale-105 transition-transform duration-500 ease-in-out">
          <div className="absolute inset-0 w-full h-full background-gradient opacity-10 group-hover:opacity-20 transition-all duration-300 ease-in-out"></div>
          <div className="flex justify-between items-center">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-white w-[30px] h-[30px] p-4 rounded-full bg-gray-600 group-hover:rotate-6 transition-all duration-300 ease-in-out"
            />
            <span className="font-bold text-4xl text-white">1</span>
          </div>
          <div className="text-white flex justify-between items-end">
            <div className="flex flex-col justify-between items-start gap-2">
              <p className="text-base">YEARS OF EXPERIENCE</p>
              <p className="text-sm">Continous learning journey</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="-rotate-45" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
