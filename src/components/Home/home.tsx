import { useEffect } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import DeveloperIcon from "../../assets/developer.svg";
import GithubIcon from "../../assets/github.svg";
import UserIcon from "../../assets/user.svg";
import Star from "../../components/CustomIcon/starCustom";
import Lottie from "lottie-react";
import AnimationTechnology from "../../assets/AnimationTechnology.json";

const Home = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".container_home", {
        display: "block",
        duration: 1,
        delay: 5.5,
        ease: "power3.out",
      });
    });
    return () => {
      ctx.clear();
    };
  });

  const buttonText = ["React", "TailwindCSS", "Node.js", "TypeScript"];
  return (
    <div className="pt-20 px-[100px] container_home text-white hidden">
      <main className="flex flex-col lg:flex-row items-center justify-between">
        <section className="w-1/2 space-y-10">
          <div className="flex gap-2 relative p-3 border border-[#ffffff1a] w-fit rounded-3xl">
            <Star fillColor="rgb(99 102 241 / 30%)" />
            <span className="font-semibold flex items-center justify-between gap-2 text-sm gradient-text-nav">
              Welcome to my website
            </span>
            <div className="absolute top-0 left-0 w-full h-full bg-gray-100 custom-blur-bold rounded-3xl hover:opacity-40 transition-all duration-700 ease-in-out"></div>
          </div>
          <div className="flex flex-col justify-between items-start gap-5">
            <h1 className="text-6xl font-bold flex flex-col gap-2 relative">
              <span>Frontend</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-blue-500 to-indigo-700">
                Developer
              </span>
              <div className="w-full h-full bg-gray-100 absolute custom-blur opacity-30"></div>
            </h1>
            <div className="flex">
              <p className="text-2xl typing">Network and Telecom Student</p>
              <span className="blinking-cursor">|</span>
            </div>
            <p className="text-lg text-[#9f9f9f]">
              Creating an innovative, functional, and user-friendly website for
              digital solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              {buttonText.map((item, index) => (
                <button
                  key={index}
                  className="text-sm border-[#ffffff1a] border px-4 py-2 rounded-2xl hover:bg-hover"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex justify-center items-center gap-4">
              <button className="slider-button overflow-hidden relative group text-sm w-[150px] bg-black rounded-lg py-3 px-10 flex justify-center items-center gap-2 shadow-gradient hover:gap-4 transition-all ease-in-out duration-300">
                <p>Project</p>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="transition-all ease-in-out duration-300 group-hover:rotate-45"
                />
              </button>
              <button className="slider-button overflow-hidden relative text-sm w-[150px] bg-black rounded-lg py-3 px-10 flex justify-center items-center gap-2 shadow-gradient hover:gap-4 transition-all ease-in-out duration-300">
                <p>Contact</p>
                <FontAwesomeIcon icon={faEnvelope} />
              </button>
            </div>
          </div>
          <div className="flex justify-start items-center gap-7 flex-wrap">
            <a
              href="https://facebook.com/NToan324"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={DeveloperIcon}
                alt="devops"
                className="
                w-[40px] h-[40px] p-2 border border-[#ffffff1a] 
                rounded-xl shadow-gradient 
                hover:shadow-[0_0_30px_5px_rgba(93,21,227,0.7)]
                transition-all ease-in-out duration-300
              "
              />
            </a>
            <a
              href="https://facebook.com/NToan324"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={UserIcon}
                alt="user"
                className="w-[40px] h-[40px] p-2 border border-[#ffffff1a] rounded-xl shadow-gradient hover:shadow-[0_0_30px_5px_rgba(93,21,227,0.7)]
                transition-all ease-in-out duration-300"
              />
            </a>
            <a
              href="https://facebook.com/NToan324"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GithubIcon}
                alt="github"
                className="w-[40px] h-[40px] p-2 border border-[#ffffff1a] rounded-xl shadow-gradient hover:shadow-[0_0_30px_5px_rgba(93,21,227,0.7)]
                transition-all ease-in-out duration-300"
              />
            </a>
          </div>
        </section>
        <section className="flex justify-center items-center w-1/2">
          <Lottie
            animationData={AnimationTechnology}
            className="w-[500px] transition-all hover:rotate-3 hover:scale-110 duration-500"
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
