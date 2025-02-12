import { FaCode } from "react-icons/fa6";
import { LiaAwardSolid } from "react-icons/lia";
import { FiGlobe } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const AboutAchievements = () => {
  const content = [
    {
      icon: FaCode,
      number: 11,
      title: "TOTAL PROJECT",
      description: "Innovative web solutions crafted",
    },
    {
      icon: LiaAwardSolid,
      number: 7,
      title: "CERTIFICATES",
      description: "Professional skills validated",
    },
    {
      icon: FiGlobe,
      number: 1,
      title: "YEARS OF EXPERIENCE",
      description: "Continous learning journey",
    },
  ];
  return (
    <section className="grid grid-cols-1 gap-5 mt-20 w-full md:grid-cols-3">
      {content.map((item, index) => (
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          offset={100}
          className="group relative overflow-hidden rounded-2xl p-5 flex flex-col gap-5 hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
          key={index}
        >
          <div className="absolute inset-0 w-full h-full background-gradient opacity-10 group-hover:opacity-20 custom-transition-all"></div>
          <div className="flex justify-between items-center">
            <div className="p-3 rounded-full bg-gray-600 group-hover:rotate-6 custom-transition-all">
              <item.icon size={35} className="text-white" />
            </div>
            <span className="font-bold text-4xl text-white">{item.number}</span>
          </div>
          <div className="text-white flex justify-between items-end">
            <div className="flex flex-col justify-between items-start gap-2">
              <p className="text-base">{item.title}</p>
              <p className="text-sm">{item.description}</p>
            </div>
            <FaArrowRight className="-rotate-45" />
          </div>
        </Link>
      ))}
    </section>
  );
};

export default AboutAchievements;
