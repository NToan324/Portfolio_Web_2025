import Star from "../CustomIcon/starCustom";
import Lottie from "lottie-react";
import AnimationTechnology from "../../assets/AnimationTechnology.json";
import { HomeSkills, HomeActionButton, HomeSocials } from "./index";
import { motion } from "framer-motion";
import { FadeIn } from "../Motion/Variants";

const Home = () => {
  return (
    <div id="home" className="mt-5 px-8 text-white md:px-[100px] md:mt-10">
      <main className="flex flex-col md:flex-row items-center justify-between">
        <motion.section
          variants={FadeIn({ direction: "right" })}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false }}
          className="w-full space-y-5 md:w-1/2 md:space-y-10"
        >
          <motion.div
            variants={FadeIn({ direction: "right" })}
            className="flex justify-center items-center gap-2 relative p-3 border border-[#ffffff1a] w-fit rounded-3xl"
          >
            <Star fillColor="rgb(99 102 241 / 30%)" />
            <span className="font-semibold text-xs gradient-text-nav md:text-sm">
              Welcome to my website
            </span>
            <div className="absolute top-0 left-0 w-full h-full bg-gray-100 custom-blur-bold rounded-3xl hover:opacity-40 custom-transition-all duration-700 ease-in-out"></div>
          </motion.div>
          <div className="flex flex-col justify-between items-start gap-5">
            <h1 className="text-titleText font-bold flex flex-col justify-center items-start relative leading-tight">
              <motion.span variants={FadeIn({ direction: "right" })}>
                Frontend
              </motion.span>
              <motion.span
                variants={FadeIn({ direction: "right" })}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-blue-500 to-indigo-700"
              >
                Developer
              </motion.span>
              <div className="w-full h-full bg-gray-100 absolute custom-blur opacity-30"></div>
            </h1>
            <motion.div
              variants={FadeIn({ direction: "right" })}
              className="flex"
            >
              <p className="text-xl md:text-2xl typing">
                Network and Telecom Student
              </p>
              <span className="blinking-cursor">|</span>
            </motion.div>
            <motion.p
              variants={FadeIn({ direction: "right" })}
              className="text-base md:text-lg text-[#9f9f9f]"
            >
              Creating an innovative, functional, and user-friendly website for
              digital solutions.
            </motion.p>
            <HomeSkills />
            <HomeActionButton />
          </div>
          <HomeSocials />
        </motion.section>
        <motion.section
          variants={FadeIn({ direction: "left" })}
          initial="hidden"
          whileInView={"visible"}
          className="flex justify-center items-center w-full md:w-1/2"
        >
          <Lottie
            animationData={AnimationTechnology}
            className="w-[350px] md:w-[500px] custom-transition-all hover:rotate-3 hover:scale-110 duration-500"
          />
        </motion.section>
      </main>
    </div>
  );
};

export default Home;
