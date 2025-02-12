import { GoShareAndroid } from "react-icons/go";
import { LuMessageCircle } from "react-icons/lu";
import { ContactMessage, ContactSocial, ContactComment } from "./index";

const Contact = () => {
  return (
    <div className="mt-14 md:mt-32 px-8 md:px-[100px] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-titleText font-bold gradient-text text-center">
          Contact Me
        </h1>
        <div className="flex justify-center items-center gap-2">
          <p className="text-gray-400 text-base max-w-2xl text-center">
            Got a question? Send me a message, and I'll get back to you soon.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-10 rounded-2xl w-full lg:grid-cols-2">
        <div className="bg-[#ffffff0d] p-5 md:p-10 rounded-3xl">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center ">
              <h1 className="gradient-text text-4xl font-bold">Get in Touch</h1>
              <GoShareAndroid className="text-4xl text-[#685bff]/70" />
            </div>
            <p className="text-gray-400 text-base">
              Have something to discuss? Send me a message and let's talk.
            </p>
          </div>
          <ContactMessage />
          <ContactSocial />
        </div>
        <div className="bg-[#ffffff0d] p-5 md:p-10 rounded-3xl">
          <div className="bg-[#ffffff1a] p-5 rounded-2xl">
            <div className="flex justify-start items-center gap-4">
              <div className="bg-[#685bff]/20 p-2 rounded-xl">
                <LuMessageCircle className="text-2xl text-[#685bff]/70" />
              </div>
              <h1 className="text-white text-xl font-medium">
                Comments <span className="text-purple">(190)</span>
              </h1>
            </div>
            <ContactComment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
