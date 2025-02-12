import { FiFileText } from "react-icons/fi";
import { MdCode } from "react-icons/md";
import { Link } from "react-scroll";

const AboutActionButton = () => {
  return (
    <div className="w-full flex justify-start items-center gap-5 font-medium">
      <button className="flex !w-[185px] justify-center items-center gap-2 button-custom text-white bg-gradient-to-r from-[#9124ff] to-[#02c4ff]">
        <FiFileText size={20} />
        <span>Download CV</span>
      </button>
      <Link
        to="portfolio"
        smooth={true}
        duration={500}
        offset={100}
        className="flex justify-center items-center gap-2 button-custom border border-[#9124ff] text-purple hover:bg-hover"
      >
        <MdCode size={20} />
        <span>View Project</span>
      </Link>
    </div>
  );
};

export default AboutActionButton;
