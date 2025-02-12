import Avatar from "../../assets/avatar.svg";
const AboutAvatar = () => {
  return (
    <section className="relative w-full md:w-1/2 flex justify-center items-center">
      <div className="relative group border overflow-hidden border-gray-200 rounded-full w-[300px] h-[300px] flex justify-center items-center shadow-[0_0_60px_10px_rgba(93,21,227,0.4)] custom-transition-all duration-500 ease-in-out hover:border-transparent">
        <img
          src={Avatar}
          alt="avatar"
          className="w-full h-full group-hover:-rotate-3 group-hover:scale-110 custom-transition-all duration-500 ease-in-out group-hover:bg-gray-200 object-cover"
        />
        <div className="absolute scale-0 border-8 opacity-50 border-gray-200 rounded-full w-full h-full group-hover:scale-100 transition-transform duration-500 ease-in-out"></div>
        <div className="absolute w-full h-full bg-white opacity-30 top-0 -translate-x-full group-hover:translate-x-full custom-transition-all duration-700 ease-out"></div>
        <div className="absolute w-full h-full bg-white opacity-30 top-0 -translate-y-full group-hover:translate-y-full custom-transition-all duration-700 ease-out"></div>
      </div>
    </section>
  );
};

export default AboutAvatar;
