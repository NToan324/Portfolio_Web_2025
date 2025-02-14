import { LuCodeXml } from "react-icons/lu";
import { FiCode } from "react-icons/fi";

const ProjectTechUsed = () => {
  return (
    <div className="">
      <div className="flex justify-start items-center gap-4 mt-4">
        <LuCodeXml size={25} className="text-[#76abff]" />
        <h2 className="font-bold text-xl">Technology Used</h2>
      </div>
      <div className="mt-4">
        <button className="group text-[#76abff] bg-[#ffffff0d] flex justify-center items-center gap-2 p-3 border border-[#ffffff0d]/10 rounded-lg hover:border-[#ffffff0d]/20 hover:bg-[#ffffff0d]/10 hover:text-[#95bdff] hover:scale-105 custom-transition-all">
          <FiCode />
          <span className="text-sm">Python</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectTechUsed;
