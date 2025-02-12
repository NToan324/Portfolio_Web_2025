import Star from "../CustomIcon/starCustom";
import Lottie from "lottie-react";
import AnimationTechnology from "../../assets/AnimationTechnology.json";
import { HomeSkills, HomeActionButton, HomeSocials } from "./index";

const Home = () => {
  return (
    <div className="pt-20 px-8 text-white md:px-[100px] md:pt-24">
      <main className="flex flex-col md:flex-row items-center justify-between">
        <section className="w-full space-y-5 md:w-1/2 md:space-y-10">
          <div className="flex justify-center items-center gap-2 relative p-3 border border-[#ffffff1a] w-fit rounded-3xl">
            <Star fillColor="rgb(99 102 241 / 30%)" />
            <span className="font-semibold text-xs gradient-text-nav md:text-sm">
              Welcome to my website
            </span>
            <div className="absolute top-0 left-0 w-full h-full bg-gray-100 custom-blur-bold rounded-3xl hover:opacity-40 custom-transition-all duration-700 ease-in-out"></div>
          </div>
          <div className="flex flex-col justify-between items-start gap-5">
            <h1 className="text-titleText font-bold flex flex-col justify-center items-start relative leading-tight">
              <span>Frontend</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-blue-500 to-indigo-700">
                Developer
              </span>
              <div className="w-full h-full bg-gray-100 absolute custom-blur opacity-30"></div>
            </h1>
            <div className="flex">
              <p className="text-xl md:text-2xl typing">
                Network and Telecom Student
              </p>
              <span className="blinking-cursor">|</span>
            </div>
            <p className="text-base md:text-lg text-[#9f9f9f]">
              Creating an innovative, functional, and user-friendly website for
              digital solutions.
            </p>
            <HomeSkills />
            <HomeActionButton />
          </div>
          <HomeSocials />
        </section>
        <section className="flex justify-center items-center w-full md:w-1/2">
          <Lottie
            animationData={AnimationTechnology}
            className="w-[350px] md:w-[500px] custom-transition-all hover:rotate-3 hover:scale-110 duration-500"
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
