import { FiFileText } from "react-icons/fi";
import { MdCode } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FadeIn } from "../Motion/Variants";

const AboutActionButton = () => {
  return (
    <motion.div
      variants={FadeIn({ direction: "up" })}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: false }}
      className="w-full flex justify-start items-center gap-5 font-medium"
    >
      <motion.button
        variants={FadeIn({ direction: "up" })}
        className="flex !w-[185px] justify-center items-center gap-2 button-custom text-white bg-gradient-to-r from-[#9124ff] to-[#02c4ff] cursor-pointer"
      >
        <FiFileText size={20} />
        <span>Download CV</span>
      </motion.button>
      <motion.div variants={FadeIn({ direction: "up", delay: 0.25 })}>
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          offset={100}
          className="flex justify-center items-center gap-2 button-custom border border-[#9124ff] text-purple hover:bg-hover cursor-pointer"
        >
          <MdCode size={20} />
          <span>View Project</span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default AboutActionButton;
