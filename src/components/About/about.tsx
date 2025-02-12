import Star from "../CustomIcon/starCustom";
import { AboutActionButton, AboutAvatar, AboutAchievements } from "./index";

const About = () => {
  return (
    <div className="mt-14 md:mt-32 px-8 md:px-[100px] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-titleText font-bold gradient-text">About Me</h1>
        <div className="flex justify-center items-center gap-2">
          <Star fillColor="rgb(192 132 252)" />
          <p className="text-gray-400 text-base">
            Transforming ideas into digital experiences
          </p>
          <Star fillColor="rgb(192 132 252)" />
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between items-center gap-10 mt-10 lg:flex-row md:mt-20">
        <section className="w-full lg:w-1/2 flex flex-col justify-between items-start gap-5">
          <div className="space-y-5">
            <h2 className="font-bold text-titleText flex justify-center items-center md:justify-start md:items-start flex-col leading-tight">
              <span className="gradient-text">Hello, I'm</span>
              <span className="font-bold text-white">Nhat Toan</span>
            </h2>
            <p className="text-gray-400 text-lg text-justify">
              A computer and telecommunications network engineering student who
              is interested in the development of front-end. I focus on creating
              an interesting digital experience and always trying to provide the
              best solution in every project.
            </p>
          </div>
          <AboutActionButton />
        </section>
        <AboutAvatar />
      </div>
      <AboutAchievements />
    </div>
  );
};

export default About;
