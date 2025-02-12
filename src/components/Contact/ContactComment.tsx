import { BsSend } from "react-icons/bs";
import { IoMdImages } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Avatar from "../../assets/avatar-comment.svg";
import { useState } from "react";

const ContactComment = () => {
  const [fileImage, setFileImage] = useState("");

  const handleFileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    //Review show image preview
    const file = e.target.files![0];
    setFileImage(file ? URL.createObjectURL(file) : "");
  };

  return (
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
          className="w-full h-[60px] px-6 pr-6 rounded-2xl border outline-none border-gray-400 bg-[#ffffff1a] hover:border-[#4338ca] text-white focus:ring-2 focus:ring-[#685bff]/50 custom-transition-all"
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
          className="w-full h-[200px] px-6 py-4 rounded-2xl border outline-none border-gray-400 bg-[#ffffff1a] hover:border-[#4338ca] text-white focus:ring-2 focus:ring-[#685bff]/50 custom-transition-all resize-none"
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
          {fileImage.length === 0 ? (
            <>
              <input
                type="file"
                accept="image/*"
                id="file"
                className="hidden"
                onChange={(e) => handleFileImage(e)}
              />
              <label
                htmlFor="file"
                className="group flex justify-center text-[#818cf8] items-center gap-2 w-full h-[60px] rounded-2xl border border-[#818cf8]/50 border-dashed bg-[#818cf8]/20 hover:border-[#818cf8] hover:bg-[#818cf8]/40 custom-transition-all"
              >
                <IoMdImages className="text-xl group-hover:scale-105 group-hover:rotate-3 custom-transition-all" />
                <span>Choose Profile Photo</span>
              </label>
              <p className="text-gray-400 mt-2">Max file size: 5MB</p>
            </>
          ) : (
            <div className="flex justify-start items-center gap-4">
              <img
                src={fileImage}
                alt=""
                className="w-16 h-16 rounded-full border border-[#818cf8]"
              />
              <div
                className="bg-[#F87171]/20 text-[#F87171] flex justify-center items-center gap-2 rounded-2xl p-4 h-[40px] cursor-pointer hover:bg-[#F87171]/30 custom-transition-all"
                onClick={() => setFileImage("")}
              >
                <IoMdClose />
                <span>Remove Photo</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full h-[60px] bg-gradient-to-r from-[#9124ff] to-[#02c4ff] rounded-2xl flex justify-center items-center gap-2 hover:shadow-[0_0_15px_5px_rgba(93,21,227,0.3)] custom-transition-all"
      >
        <BsSend className="text-2xl text-white" />
        <span className="text-white font-semibold">Post Comment</span>
      </button>
      <div className="space-y-4 max-h-[275px] overflow-y-auto">
        {[...Array(4)].map((_, index) => (
          <div
            className="flex justify-start items-center gap-4 bg-[#ffffff1a] p-4 rounded-2xl"
            key={index}
          >
            <div className="bg-[#818cf8]/40 p-2 rounded-full w-[35px] h-[35px] flex justify-center items-center">
              <img src={Avatar} alt="Avatar" className="w-[15px] h-[15px]" />
            </div>
            <div className="w-full flex flex-col justify-start items-start text-white">
              <div className="flex justify-between items-center w-full">
                <h4 className="text-base">Nhat Toan</h4>
                <p className="text-xs text-gray-400">4 hours ago</p>
              </div>
              <p className="text-sm text-gray-200">Nice</p>
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};

export default ContactComment;
