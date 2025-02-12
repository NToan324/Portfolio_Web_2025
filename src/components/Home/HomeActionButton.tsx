import { HiOutlineExternalLink } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
const HomeActionButton = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Link
        to="portfolio"
        smooth={true}
        duration={500}
        offset={100}
        className="slider-button overflow-hidden relative group w-[150px] bg-black rounded-lg py-3 px-4 flex justify-center items-center gap-2 shadow-gradient hover:gap-4 custom-transition-all "
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
        offset={100}
        className="slider-button overflow-hidden relative w-[150px] bg-black rounded-lg py-3 px-4 flex justify-center items-center gap-2 shadow-gradient hover:gap-4 custom-transition-all "
      >
        <p className="text-sm">Contact</p>
        <HiOutlineMail size={20} />
      </Link>
    </div>
  );
};

export default HomeActionButton;
