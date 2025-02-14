import Project_1 from "../../assets/project_1.jpg";
import { FaRegStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { FadeIn } from "../Motion/Variants";

const ProjectPreview = () => {
  const features = [
    "Calculate certain terms of arithmetic sequence using the nth term formula.",
    "Determine the first or different term if only two tribes are known in arithmetic sequences.",
    "Menghitung jumlah n suku pertama dari deret aritmatika dengan langkah perhitungan yang jelas.",
  ];
  return (
    <motion.div
      variants={FadeIn({ direction: "left", delay: 0.25 })}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: false }}
      className=""
    >
      <div className="group rounded-2xl overflow-hidden w-full h-auto hover:border hover:border-gray-200 custom-transition-all bg-red-500">
        <img
          src={Project_1}
          alt="Project"
          className="rounded-2xl group-hover:scale-105 custom-transition-all"
        />
      </div>
      <div className="group mt-10 flex flex-col justify-between items-start gap-4 rounded-2xl border border-[#ffffff0d]/10 hover:border-[#ffffff0d]/20 p-8 custom-transition-all">
        <div className="flex justify-start items-center gap-2">
          <FaRegStar
            className="text-yellow-500 group-hover:rotate-180 custom-transition-all"
            size={20}
          />
          <h2 className="font-bold text-xl">Key Features</h2>
        </div>
        <ul className="space-y-4">
          {features.map((features, index) => (
            <li
              key={index}
              className="flex justify-start items-start gap-4 border border-transparent hover:border-[#ffffff0d]/20 hover:bg-[#ffffff0d]/5 px-4 py-2 rounded-xl custom-transition-all"
            >
              <FaCircle size={10} className="mt-2 text-[#c383ff]" />
              {features}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProjectPreview;
