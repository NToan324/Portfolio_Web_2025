import { TbStack2 } from "react-icons/tb";
import { TbExternalLink } from "react-icons/tb";
import { LuGithub } from "react-icons/lu";
import { LuCodeXml } from "react-icons/lu";

const ProjectButton = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <button className="flex min-w-[200px] w-full justify-start items-center gap-4 p-4 bg-[#ffffff0d] border border-[#ffffff0d]/10 rounded-lg hover:border-[#3b82f633] hover:bg-[#ffffff0d]/10 hover:scale-105 custom-transition-all">
          <div className="bg-[#3b82f633] p-2 rounded-full">
            <LuCodeXml size={25} className="text-[#76abff]" />
          </div>
          <div className="flex flex-col justify-between items-start">
            <span className="text-white">1</span>
            <p className="text-gray-200 text-xs">Total Technology</p>
          </div>
        </button>
        <button className="flex min-w-[200px] w-full justify-start items-center gap-4 p-4 bg-[#ffffff0d] border border-[#ffffff0d]/10 rounded-lg hover:border-[#a855f733] hover:bg-[#ffffff0d]/10 hover:scale-105 custom-transition-all">
          <div className="bg-[#a855f733] p-2 rounded-full">
            <TbStack2 size={25} className="text-[#c383ff]" />
          </div>
          <div className="flex flex-col justify-between items-start">
            <span className="text-white">3</span>
            <p className="text-gray-200 text-xs">Total Technology</p>
          </div>
        </button>
      </div>
      <div className="flex justify-start items-center gap-4 mt-4">
        <button className="group text-[#76abff] bg-[#ffffff0d] flex justify-center items-center gap-2 p-3 border border-[#ffffff0d]/10 rounded-lg hover:border-[#ffffff0d]/20 hover:bg-[#ffffff0d]/10 custom-transition-all">
          <TbExternalLink />
          <span>Live Demo</span>
        </button>
        <button className="group text-[#c383ff] bg-[#ffffff0d] flex justify-center items-center gap-2 p-3 border border-[#ffffff0d]/10 rounded-lg hover:border-[#ffffff0d]/20 hover:bg-[#ffffff0d]/10 custom-transition-all">
          <LuGithub />
          <span>Github</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectButton;
