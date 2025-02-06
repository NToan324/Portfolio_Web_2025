import { GoShareAndroid } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { PiChatText } from "react-icons/pi";
import { BsSend } from "react-icons/bs";
import { PiPhoneCall } from "react-icons/pi";
import Facebook from "../../assets/Contact/facebook-svgrepo-com.svg";
import Github from "../../assets/Contact/github-svgrepo-com (1).svg";
import Instagram from "../../assets/Contact/instagram-svgrepo-com.svg";
import Tiktok from "../../assets/Contact/tiktok-svgrepo-com.svg";
import { HiOutlineExternalLink } from "react-icons/hi";
import { LuMessageCircle } from "react-icons/lu";
import { IoMdImages } from "react-icons/io";
import Avatar from "../../assets/avatar-comment.svg";
const Contact = () => {
  return (
    <div className="mt-32 px-[100px]">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-6xl font-bold gradient-text text-center">
          Contact Me
        </h1>
        <div className="flex justify-center items-center gap-2">
          <p className="text-gray-400 text-base max-w-2xl text-center">
            Got a question? Send me a message, and I'll get back to you soon.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[45%_50%] gap-5 mt-10 rounded-2xl">
        <div className="bg-[#ffffff0d] p-10 rounded-3xl">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center ">
              <h1 className="gradient-text text-4xl font-bold">Get in Touch</h1>
              <GoShareAndroid className="text-4xl text-[#685bff]/70" />
            </div>
            <p className="text-gray-400 text-base">
              Have something to discuss? Send me a message and let's talk.
            </p>
          </div>
          <form action="" method="post" className="flex flex-col gap-5 mt-5">
            <div className="relative group w-full h-[60px] rounded-2xl border border-gray-400 bg-[#ffffff1a] hover:border-[#4338ca] transition-all duration-300 ease-in-out">
              <FaRegUser className="text-lg text-gray-400 absolute left-4 top-5 group-focus-within:text-[#685bff]" />
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent pl-12 pr-6 w-full h-full rounded-2xl border-none outline-none text-white focus:ring-2 focus:ring-[#685bff]/50 transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="relative group w-full h-[60px] rounded-2xl border border-gray-400 bg-[#ffffff1a] hover:border-[#4338ca] transition-all duration-300 ease-in-out">
              <MdOutlineEmail className="text-lg text-gray-400 absolute left-4 top-5 group-focus-within:text-[#685bff]" />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent pl-12 pr-6 w-full h-full rounded-2xl border-none outline-none text-white focus:ring-2 focus:ring-[#685bff]/50 transition-all duration-300 ease-in-out"
              />
            </div>
            <div className="relative group w-full h-[200px] rounded-2xl border border-gray-400 bg-[#ffffff1a] hover:border-[#4338ca] transition-all duration-300 ease-in-out">
              <PiChatText className="text-lg text-gray-400 absolute left-4 top-5 group-focus-within:text-[#685bff]" />
              <textarea
                placeholder="Your Message"
                className="bg-transparent pl-12 pr-6 py-4 w-full h-full rounded-2xl border-none outline-none text-white focus:ring-2 focus:ring-[#685bff]/50 transition-all duration-300 ease-in-out resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full h-[60px] bg-gradient-to-r from-[#9124ff] to-[#02c4ff] rounded-2xl flex justify-center items-center gap-2 hover:shadow-[0_0_15px_5px_rgba(93,21,227,0.3)] transition-all duration-300 ease-in-out"
            >
              <BsSend className="text-2xl text-white" />
              <span className="text-white font-semibold">Send Message</span>
            </button>
          </form>
          <div className="border-t-[0.5px] border-gray-400 mt-10">
            <div className="mt-10 p-5 rounded-2xl bg-[#ffffff1a]">
              <div className="flex justify-start items-center gap-5">
                <PiPhoneCall className="text-white text-2xl" />
                <h1 className="text-xl text-white font-bold">
                  Connect with me
                </h1>
              </div>
              <div className="flex flex-col gap-5 mt-5">
                <a
                  href="https://www.facebook.com/NToan324/"
                  target="_blank"
                  className="group overflow-hidden relative w-full flex gap-4 justify-start items-center p-4 border border-gray-400 rounded-2xl bg-[#ffffff1a] hover:bg-gradient-to-r hover:from-[#006eff]/20 hover:to-[#02c4ff]/20 transition-all duration-300 ease-in-out"
                >
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="w-[40px] h-[40px] bg-[#006eff]/10 p-2 rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                  <div className="flex flex-col items-start justify-center">
                    <h2 className="text-base font-bold text-slate-200 group-hover:text-white transition-all duration-300 ease-in-out">
                      Let's Connect
                    </h2>
                    <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-all duration-300 ease-in-out">
                      on Facebook
                    </span>
                  </div>
                  <HiOutlineExternalLink className="absolute right-5 opacity-0 text-xl text-white group-hover:right-4 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
                  <div className="absolute w-[50px] h-[100px] bg-white rotate-12 blur-2xl opacity-0 group-hover:translate-x-[500px] group-hover:opacity-70 transition-all duration-500 ease-in-out"></div>
                </a>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.facebook.com/NToan324/"
                    target="_blank"
                    className="group overflow-hidden relative w-full flex gap-4 justify-start items-center p-4 border border-gray-400 rounded-2xl bg-[#ffffff1a] hover:bg-gradient-to-r hover:from-[#ff3d67]/20 hover:to-[#6dfff8]/20 transition-all duration-300 ease-in-out"
                  >
                    <img
                      src={Tiktok}
                      alt="Tiktok"
                      className="w-[40px] h-[40px] bg-[#13f1e6]/10 p-2 rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                    <div className="flex flex-col items-start justify-center">
                      <h2 className="text-base font-bold text-slate-200 group-hover:text-white transition-all duration-300 ease-in-out">
                        Tiktok
                      </h2>
                      <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-all duration-300 ease-in-out">
                        @ChillNo
                      </span>
                    </div>
                    <HiOutlineExternalLink className="absolute right-5 opacity-0 text-xl text-white group-hover:right-4 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
                    <div className="absolute w-[50px] h-[100px] bg-white rotate-12 blur-2xl opacity-0 group-hover:translate-x-[500px] group-hover:opacity-70 transition-all duration-500 ease-in-out"></div>
                  </a>
                  <a
                    href="https://www.facebook.com/NToan324/"
                    target="_blank"
                    className="group overflow-hidden relative w-full flex gap-4 justify-start items-center p-4 border border-gray-400 rounded-2xl bg-[#ffffff1a] hover:bg-gradient-to-r hover:from-[#ff1f8f]/20 hover:to-[#ff6cb6]/20 transition-all duration-300 ease-in-out"
                  >
                    <img
                      src={Instagram}
                      alt="Instagram"
                      className="w-[40px] h-[40px] bg-[#ff1f8f]/10 p-2 rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                    <div className="flex flex-col items-start justify-center">
                      <h2 className="text-base font-bold text-slate-200 group-hover:text-white transition-all duration-300 ease-in-out">
                        Instagram
                      </h2>
                      <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-all duration-300 ease-in-out">
                        @NToan324
                      </span>
                    </div>
                    <HiOutlineExternalLink className="absolute right-5 opacity-0 text-xl text-white group-hover:right-4 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
                    <div className="absolute w-[50px] h-[100px] bg-white rotate-12 blur-2xl opacity-0 group-hover:translate-x-[500px] group-hover:opacity-70 transition-all duration-500 ease-in-out"></div>
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.facebook.com/NToan324/"
                    target="_blank"
                    className="group overflow-hidden relative w-full flex gap-4 justify-start items-center p-4 border border-gray-400 rounded-2xl bg-[#ffffff1a] hover:bg-gradient-to-r hover:from-[#000000]/20 hover:to-[#5d5d5d]/20 transition-all duration-300 ease-in-out"
                  >
                    <img
                      src={Github}
                      alt="Github"
                      className="w-[40px] h-[40px] bg-[#000000]/10 p-2 rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                    <div className="flex flex-col items-start justify-center">
                      <h2 className="text-base font-bold text-slate-200 group-hover:text-white transition-all duration-300 ease-in-out">
                        Github
                      </h2>
                      <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-all duration-300 ease-in-out">
                        @Ntoan324
                      </span>
                    </div>
                    <HiOutlineExternalLink className="absolute right-5 opacity-0 text-xl text-white group-hover:right-4 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
                    <div className="absolute w-[50px] h-[100px] bg-white rotate-12 blur-2xl opacity-0 group-hover:translate-x-[500px] group-hover:opacity-70 transition-all duration-500 ease-in-out"></div>
                  </a>
                  <a
                    href="https://www.facebook.com/NToan324/"
                    target="_blank"
                    className="group overflow-hidden relative w-full flex gap-4 justify-start items-center p-4 border border-gray-400 rounded-2xl bg-[#ffffff1a] hover:bg-gradient-to-r hover:from-[#006eff]/20 hover:to-[#02c4ff]/20 transition-all duration-300 ease-in-out"
                  >
                    <img
                      src={Facebook}
                      alt="Facebook"
                      className="w-[40px] h-[40px] bg-[#006eff]/10 p-2 rounded-lg group-hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                    <div className="flex flex-col items-start justify-center">
                      <h2 className="text-base font-bold text-slate-200 group-hover:text-white transition-all duration-300 ease-in-out">
                        Let's Connect
                      </h2>
                      <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-all duration-300 ease-in-out">
                        on Facebook
                      </span>
                    </div>
                    <HiOutlineExternalLink className="absolute right-5 opacity-0 text-xl text-white group-hover:right-4 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
                    <div className="absolute w-[50px] h-[100px] bg-white rotate-12 blur-2xl opacity-0 group-hover:translate-x-[500px] group-hover:opacity-70 transition-all duration-500 ease-in-out"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff0d] p-10 rounded-3xl">
          <div className="bg-[#ffffff1a] p-5 rounded-2xl">
            <div className="flex justify-start items-center gap-4">
              <div className="bg-[#685bff]/20 p-2 rounded-xl">
                <LuMessageCircle className="text-2xl text-[#685bff]/70" />
              </div>
              <h1 className="text-white text-xl font-medium">
                Comments <span className="text-purple">(190)</span>
              </h1>
            </div>
            <form action="" method="post" className="flex flex-col gap-5 mt-5">
              <div className="space-y-2">
                <div className="space-x-1">
                  <label htmlFor="name" className="text-white">
                    Name
                  </label>
                  <span className="text-red-400">*</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full h-[60px] px-6 pr-6 rounded-2xl border outline-none border-gray-400 bg-[#ffffff1a] hover:border-[#4338ca] text-white focus:ring-2 focus:ring-[#685bff]/50 transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="space-y-2">
                <div className="space-x-1">
                  <label htmlFor="name" className="text-white">
                    Message
                  </label>
                  <span className="text-red-400">*</span>
                </div>
                <textarea
                  placeholder="Write your message here..."
                  required
                  className="w-full h-[200px] px-6 py-4 rounded-2xl border outline-none border-gray-400 bg-[#ffffff1a] hover:border-[#4338ca] text-white focus:ring-2 focus:ring-[#685bff]/50 transition-all duration-300 ease-in-out resize-none"
                />
              </div>
              <div className="space-y-2 ">
                <div className="space-x-1">
                  <label htmlFor="name" className="text-white">
                    Profile Photo
                  </label>
                  <span className="text-gray-400">(Optional)</span>
                </div>
                <div className="text-center bg-[#ffffff1a] p-5 rounded-2xl border border-gray-400">
                  <input
                    type="file"
                    accept="image/*"
                    id="file"
                    className="hidden"
                  />
                  <label
                    htmlFor="file"
                    className="group flex justify-center text-[#818cf8] items-center gap-2 w-full h-[60px] rounded-2xl border border-[#818cf8]/50 border-dashed bg-[#818cf8]/20 hover:border-[#818cf8] hover:bg-[#818cf8]/40 transition-all duration-300 ease-in-out"
                  >
                    <IoMdImages className="text-xl group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 ease-in-out" />
                    <span>Choose Profile Photo</span>
                  </label>
                  <p className="text-gray-400 mt-2">Max file size: 5MB</p>
                </div>
              </div>
              <button
                type="submit"
                className="w-full h-[60px] bg-gradient-to-r from-[#9124ff] to-[#02c4ff] rounded-2xl flex justify-center items-center gap-2 hover:shadow-[0_0_15px_5px_rgba(93,21,227,0.3)] transition-all duration-300 ease-in-out"
              >
                <BsSend className="text-2xl text-white" />
                <span className="text-white font-semibold">Post Comment</span>
              </button>
              <div className="flex justify-start items-center gap-4 bg-[#ffffff1a] p-4 rounded-2xl">
                <div className="bg-[#818cf8]/40 p-2 rounded-full w-[35px] h-[35px] flex justify-center items-center">
                  <img
                    src={Avatar}
                    alt="Avatar"
                    className="w-[15px] h-[15px]"
                  />
                </div>
                <div className="w-full flex flex-col justify-start items-start text-white">
                  <div className="flex justify-between items-center w-full">
                    <h4 className="text-base">Nhat Toan</h4>
                    <p className="text-xs text-gray-400">4 hours ago</p>
                  </div>
                  <p className="text-sm text-gray-200">Nice</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
