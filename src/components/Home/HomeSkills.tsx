const HomeSkills = () => {
  const buttonText = ["React", "TailwindCSS", "Node.js", "TypeScript"];
  return (
    <div className="flex-wrap gap-2 md:flex hidden">
      {buttonText.map((item, index) => (
        <button
          key={index}
          className="text-sm border-[#ffffff1a] border px-4 py-2 rounded-2xl hover:bg-hover"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default HomeSkills;
