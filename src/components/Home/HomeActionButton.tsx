import { HiOutlineExternalLink } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FadeIn } from "../Motion/Variants";

const HomeActionButton = () => {
  return (
    <motion.div
      variants={FadeIn({ direction: "right" })}
      className="flex justify-center items-center gap-4"
    >
      <Link
        to="portfolio"
        smooth={true}
        duration={500}
        offset={-110}
        className="slider-button overflow-hidden relative group w-[150px] bg-black rounded-lg py-3 px-4 flex justify-center items-center gap-2 shadow-gradient hover:gap-4 custom-transition-all cursor-pointer"
      >
        <p className="text-sm">Project</p>
        <HiOutlineExternalLink
          size={20}
          className="custom-transition-all  group-hover:rotate-45"
        />
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        offset={-110}
        className="slider-button overflow-hidden relative w-[150px] bg-black rounded-lg py-3 px-4 flex justify-center items-center gap-2 shadow-gradient hover:gap-4 custom-transition-all cursor-pointer"
      >
        <p className="text-sm">Contact</p>
        <HiOutlineMail size={20} />
      </Link>
    </motion.div>
  );
};

export default HomeActionButton;
