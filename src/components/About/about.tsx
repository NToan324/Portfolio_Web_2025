import Star from "../CustomIcon/starCustom";
import { AboutActionButton, AboutAvatar, AboutAchievements } from "./index";
import { motion } from "framer-motion";
import { FadeZoom, FadeIn } from "../Motion/Variants";

const About = () => {
  return (
    <div
      id="about"
      className="mt-14 md:mt-32 px-8 md:px-[100px] flex flex-col justify-center items-center"
    >
      <motion.div
        variants={FadeZoom({ direction: "up" })}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: false }}
        className="flex flex-col justify-center items-center"
      >
        <motion.h1
          variants={FadeZoom({ direction: "up" })}
          className="text-titleText font-bold gradient-text"
        >
          About Me
        </motion.h1>
        <motion.div
          variants={FadeZoom({ direction: "up", delay: 0.25 })}
          className="flex justify-center items-center gap-2"
        >
          <Star fillColor="rgb(192 132 252)" />
          <p className="text-gray-400 text-base">
            Transforming ideas into digital experiences
          </p>
          <Star fillColor="rgb(192 132 252)" />
        </motion.div>
      </motion.div>
      <div className="flex flex-col-reverse justify-between items-center gap-10 mt-10 lg:flex-row md:mt-20">
        <section className="w-full lg:w-1/2 flex flex-col justify-between items-start gap-5">
          <motion.div
            variants={FadeIn({ direction: "right" })}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: false }}
            className="space-y-5"
          >
            <h2 className="font-bold text-titleText flex justify-center items-center md:justify-start md:items-start flex-col leading-tight">
              <motion.span
                variants={FadeIn({ direction: "right" })}
                className="gradient-text"
              >
                Hello, I'm
              </motion.span>
              <motion.span
                variants={FadeIn({ direction: "right", delay: 0.25 })}
                className="font-bold text-white"
              >
                Nhat Toan
              </motion.span>
            </h2>
            <p className="text-gray-400 text-lg text-justify">
              A computer and telecommunications network engineering student who
              is interested in the development of front-end. I focus on creating
              an interesting digital experience and always trying to provide the
              best solution in every project.
            </p>
          </motion.div>
          <AboutActionButton />
        </section>
        <AboutAvatar />
      </div>
      <AboutAchievements />
    </div>
  );
};

export default About;
