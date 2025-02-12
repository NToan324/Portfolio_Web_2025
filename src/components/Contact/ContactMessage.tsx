import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { PiChatText } from "react-icons/pi";
import { BsSend } from "react-icons/bs";

const ContactMessage = () => {
  return (
    <form action="" method="post" className="flex flex-col gap-5 mt-5">
      <div className="relative group w-full h-[60px] rounded-2xl border border-gray-400 bg-[#ffffff1a] hover:border-[#4338ca] custom-transition-all">
        <FaRegUser className="text-lg text-gray-400 absolute left-4 top-5 group-focus-within:text-[#685bff]" />
        <input
          type="text"
          placeholder="Your Name"
          className="bg-transparent pl-12 pr-6 w-full h-full rounded-2xl border-none outline-none text-white focus:ring-2 focus:ring-[#685bff]/50 custom-transition-all"
        />
      </div>
      <div className="relative group w-full h-[60px] rounded-2xl border border-gray-400 bg-[#ffffff1a] hover:border-[#4338ca] custom-transition-all">
        <MdOutlineEmail className="text-lg text-gray-400 absolute left-4 top-5 group-focus-within:text-[#685bff]" />
        <input
          type="email"
          placeholder="Your Email"
          className="bg-transparent pl-12 pr-6 w-full h-full rounded-2xl border-none outline-none text-white focus:ring-2 focus:ring-[#685bff]/50 custom-transition-all"
        />
      </div>
      <div className="relative group w-full h-[200px] rounded-2xl border border-gray-400 bg-[#ffffff1a] hover:border-[#4338ca] custom-transition-all">
        <PiChatText className="text-lg text-gray-400 absolute left-4 top-5 group-focus-within:text-[#685bff]" />
        <textarea
          placeholder="Your Message"
          className="bg-transparent pl-12 pr-6 py-4 w-full h-full rounded-2xl border-none outline-none text-white focus:ring-2 focus:ring-[#685bff]/50 custom-transition-all resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full h-[60px] bg-gradient-to-r from-[#9124ff] to-[#02c4ff] rounded-2xl flex justify-center items-center gap-2 hover:shadow-[0_0_15px_5px_rgba(93,21,227,0.3)] custom-transition-all"
      >
        <BsSend className="text-2xl text-white" />
        <span className="text-white font-semibold">Send Message</span>
      </button>
    </form>
  );
};

export default ContactMessage;
