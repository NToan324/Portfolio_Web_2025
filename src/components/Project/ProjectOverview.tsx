import { ProjectButton, ProjectTechUsed } from "./index";
import { motion } from "framer-motion";
import { FadeIn } from "../Motion/Variants";

const ProjectOverview = () => {
  return (
    <motion.div
      variants={FadeIn({ direction: "right", delay: 0.25 })}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: false }}
      className="space-y-10"
    >
      <div className="">
        <h1 className="text-6xl font-bold gradient-text">Food Explore</h1>
        <div className="w-16 h-1 bg-white rounded-lg mt-2 bg-gradient-to-r from-[#5a189a] to-[#4338ca]"></div>
      </div>
      <p className="">
        Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan
        soal-soal Aritmatika secara otomatis dengan menggunakan bahasa
        pemrograman Python. Tujuan utama dari program ini adalah untuk membantu
        pengguna, terutama pelajar, dalam menyelesaikan soal-soal Aritmatika
        dengan lebih cepat dan mudah
      </p>
      <ProjectButton />
      <ProjectTechUsed />
    </motion.div>
  );
};

export default ProjectOverview;
