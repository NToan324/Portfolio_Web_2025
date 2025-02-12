import Modal from "../Modal/modal";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import Certificate from "../../assets/certificate.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Certificates = () => {
  const [open, setOpen] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleVisibleCount = () => {
    setSeeMore(!seeMore);
    if (!seeMore) {
      setVisibleCount(10); //temporary fix
    } else {
      setVisibleCount(6);
    }
  };

  return (
    <div className="">
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {[...Array(10).slice(0, visibleCount)].map((_, i) => (
          <div className="group relative overflow-hidden" key={i}>
            <Modal open={open} setOpen={setOpen} />
            <img
              src={Certificate}
              alt="Certificate"
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute w-full h-full inset-0 group-hover:bg-gray-950 group-hover:opacity-50 custom-transition-all duration-500 ease-in-out"></div>
            <div className="absolute font-bold text-white inset-0 flex flex-col justify-center items-center gap-4">
              <FontAwesomeIcon
                icon={faExpand}
                className="text-white text-3xl"
              />
              <span>View Certificate</span>
            </div>
          </div>
        ))}
      </div>
      <button
        className="group mt-10 overflow-hidden relative w-[140px] py-2 px-4 rounded-xl space-x-4 border-[#ffffff1a] border hover:border-[#ffffff47] custom-transition-all"
        onClick={() => handleVisibleCount()}
      >
        <span className="text-white">{seeMore ? "See Less" : "See More"}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`text-white group-hover:translate-y-1 custom-transition-all ${
            seeMore ? "rotate-180" : ""
          }`}
        />
        <div className="absolute w-full bottom-0 -left-4 h-[2px] bg-[#5a189a] custom-transition-all -translate-x-full group-hover:translate-x-0"></div>
      </button>
    </div>
  );
};

export default Certificates;
