import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { ProjectOverview, ProjectPreview } from "./index";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "../Motion/Variants";
const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  return (
    <div className="mt-14 px-8 md:px-[100px] flex flex-col justify-center items-center">
      <motion.div
        variants={FadeIn({ direction: "right" })}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: false }}
        className="flex justify-start items-center gap-4 w-full"
      >
        <button
          onClick={() => navigate("/portfolio", { preventScrollReset: true })}
          className="group text-white bg-[#ffffff0d] flex justify-center items-center gap-2 p-3 w-28 border border-[#ffffff0d]/10 rounded-lg hover:border-[#ffffff0d]/20 hover:bg-[#ffffff0d]/10 custom-transition-all"
        >
          <FaArrowLeft className="group-hover:-translate-x-1" />
          <span>Back</span>
        </button>
        <div className="flex justify-center items-center gap-2">
          <span className="text-gray-400">Project</span>
          <IoIosArrowForward size={20} className="text-white" />
          <span className="text-white">Food Explore</span>
        </div>
      </motion.div>
      <div className="text-white grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10">
        <ProjectOverview />
        <ProjectPreview />
      </div>
    </div>
  );
};

export default Project;
