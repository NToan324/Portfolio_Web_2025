import DeveloperIcon from "../../assets/developer.svg";
import GithubIcon from "../../assets/github.svg";
import UserIcon from "../../assets/user.svg";

const HomeSocial = () => {
  const Link = [
    {
      href: "https://facebook.com/NToan324",
      icon: DeveloperIcon,
    },
    {
      href: "https://facebook.com/NToan324",
      icon: UserIcon,
    },
    {
      href: "https://github.com/NToan324",
      icon: GithubIcon,
    },
  ];
  return (
    <div className="justify-start items-center gap-7 flex-wrap md:flex hidden">
      {Link.map((item, index) => (
        <a href={item.href} target="_blank" rel="noreferrer" key={index}>
          <img
            src={item.icon}
            alt={item.icon}
            className="
                w-[40px] h-[40px] p-2 border border-[#ffffff1a] 
                rounded-xl shadow-gradient 
                hover:shadow-[0_0_30px_5px_rgba(93,21,227,0.7)]
                custom-transition-all 
              "
          />
        </a>
      ))}
    </div>
  );
};

export default HomeSocial;
