import { PiPhoneCall } from "react-icons/pi";
import Facebook from "../../assets/Contact/facebook-svgrepo-com.svg";
import Github from "../../assets/Contact/github-svgrepo-com (1).svg";
import Instagram from "../../assets/Contact/instagram-svgrepo-com.svg";
import Tiktok from "../../assets/Contact/tiktok-svgrepo-com.svg";
import { HiOutlineExternalLink } from "react-icons/hi";

const ContactSocial = () => {
  return (
    <div className="border-t-[0.5px] border-[#ffffff1a] mt-10">
      <div className="mt-10 p-5 rounded-2xl bg-[#ffffff1a]">
        <div className="flex justify-start items-center gap-5">
          <PiPhoneCall className="text-white text-2xl" />
          <h1 className="text-xl text-white font-bold">Connect with me</h1>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <a
            href="https://www.facebook.com/NToan324/"
            target="_blank"
            className="group overflow-hidden relative w-full flex gap-4 justify-start items-center p-4 border border-gray-400 rounded-2xl bg-[#ffffff1a] hover:bg-gradient-to-r hover:from-[#006eff]/20 hover:to-[#02c4ff]/20 custom-transition-all"
          >
            <img
              src={Facebook}
              alt="Facebook"
              className="w-[40px] h-[40px] bg-[#006eff]/10 p-2 rounded-lg group-hover:scale-105 custom-transition-all"
            />
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-base font-bold text-slate-200 group-hover:text-white custom-transition-all">
                Let's Connect
              </h2>
              <span className="text-sm text-gray-400 group-hover:text-gray-200 custom-transition-all">
                on Facebook
              </span>
            </div>
            <HiOutlineExternalLink className="absolute right-5 opacity-0 text-xl text-white group-hover:right-4 group-hover:opacity-100 custom-transition-all" />
            <div className="absolute w-[50px] h-[100px] bg-white rotate-12 blur-2xl opacity-0 group-hover:translate-x-[500px] group-hover:opacity-70 custom-transition-all duration-500 ease-in-out"></div>
          </a>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <a
              href="https://www.facebook.com/NToan324/"
              target="_blank"
              className="group overflow-hidden relative w-full flex gap-4 justify-start items-center p-4 border border-gray-400 rounded-2xl bg-[#ffffff1a] hover:bg-gradient-to-r hover:from-[#ff3d67]/20 hover:to-[#6dfff8]/20 custom-transition-all"
            >
              <img
                src={Tiktok}
                alt="Tiktok"
                className="w-[40px] h-[40px] bg-[#13f1e6]/10 p-2 rounded-lg group-hover:scale-105 custom-transition-all"
              />
              <div className="flex flex-col items-start justify-center">
                <h2 className="text-base font-bold text-slate-200 group-hover:text-white custom-transition-all">
                  Tiktok
                </h2>
                <span className="text-sm text-gray-400 group-hover:text-gray-200 custom-transition-all">
                  @ChillNo
                </span>
              </div>
              <HiOutlineExternalLink className="absolute right-5 opacity-0 text-xl text-white group-hover:right-4 group-hover:opacity-100 custom-transition-all" />
              <div className="absolute w-[50px] h-[100px] bg-white rotate-12 blur-2xl opacity-0 group-hover:translate-x-[500px] group-hover:opacity-70 custom-transition-all duration-500 ease-in-out"></div>
            </a>
            <a
              href="https://www.facebook.com/NToan324/"
              target="_blank"
              className="group overflow-hidden relative w-full flex gap-4 justify-start items-center p-4 border border-gray-400 rounded-2xl bg-[#ffffff1a] hover:bg-gradient-to-r hover:from-[#ff1f8f]/20 hover:to-[#ff6cb6]/20 custom-transition-all"
            >
              <img
                src={Instagram}
                alt="Instagram"
                className="w-[40px] h-[40px] bg-[#ff1f8f]/10 p-2 rounded-lg group-hover:scale-105 custom-transition-all"
              />
              <div className="flex flex-col items-start justify-center">
                <h2 className="text-base font-bold text-slate-200 group-hover:text-white custom-transition-all">
                  Instagram
                </h2>
                <span className="text-sm text-gray-400 group-hover:text-gray-200 custom-transition-all">
                  @NToan324
                </span>
              </div>
              <HiOutlineExternalLink className="absolute right-5 opacity-0 text-xl text-white group-hover:right-4 group-hover:opacity-100 custom-transition-all" />
              <div className="absolute w-[50px] h-[100px] bg-white rotate-12 blur-2xl opacity-0 group-hover:translate-x-[500px] group-hover:opacity-70 custom-transition-all duration-500 ease-in-out"></div>
            </a>
            <a
              href="https://www.facebook.com/NToan324/"
              target="_blank"
              className="group overflow-hidden relative w-full flex gap-4 justify-start items-center p-4 border border-gray-400 rounded-2xl bg-[#ffffff1a] hover:bg-gradient-to-r hover:from-[#000000]/20 hover:to-[#5d5d5d]/20 custom-transition-all"
            >
              <img
                src={Github}
                alt="Github"
                className="w-[40px] h-[40px] bg-[#000000]/10 p-2 rounded-lg group-hover:scale-105 custom-transition-all"
              />
              <div className="flex flex-col items-start justify-center">
                <h2 className="text-base font-bold text-slate-200 group-hover:text-white custom-transition-all">
                  Github
                </h2>
                <span className="text-sm text-gray-400 group-hover:text-gray-200 custom-transition-all">
                  @Ntoan324
                </span>
              </div>
              <HiOutlineExternalLink className="absolute right-5 opacity-0 text-xl text-white group-hover:right-4 group-hover:opacity-100 custom-transition-all" />
              <div className="absolute w-[50px] h-[100px] bg-white rotate-12 blur-2xl opacity-0 group-hover:translate-x-[500px] group-hover:opacity-70 custom-transition-all duration-500 ease-in-out"></div>
            </a>
            <a
              href="https://www.facebook.com/NToan324/"
              target="_blank"
              className="group overflow-hidden relative w-full flex gap-4 justify-start items-center p-4 border border-gray-400 rounded-2xl bg-[#ffffff1a] hover:bg-gradient-to-r hover:from-[#006eff]/20 hover:to-[#02c4ff]/20 custom-transition-all"
            >
              <img
                src={Facebook}
                alt="Facebook"
                className="w-[40px] h-[40px] bg-[#006eff]/10 p-2 rounded-lg group-hover:scale-105 custom-transition-all"
              />
              <div className="flex flex-col items-start justify-center">
                <h2 className="text-base font-bold text-slate-200 group-hover:text-white custom-transition-all">
                  Let's Connect
                </h2>
                <span className="text-sm text-gray-400 group-hover:text-gray-200 custom-transition-all">
                  on Facebook
                </span>
              </div>
              <HiOutlineExternalLink className="absolute right-5 opacity-0 text-xl text-white group-hover:right-4 group-hover:opacity-100 custom-transition-all" />
              <div className="absolute w-[50px] h-[100px] bg-white rotate-12 blur-2xl opacity-0 group-hover:translate-x-[500px] group-hover:opacity-70 custom-transition-all duration-500 ease-in-out"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSocial;
