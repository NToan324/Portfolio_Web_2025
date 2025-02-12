import { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

import DeveloperIcon from "../../assets/developer.svg";
import GithubIcon from "../../assets/github.svg";
import UserIcon from "../../assets/user.svg";
import EarthIcon from "../../assets/earth.svg";

const Introduce = () => {
  useEffect(() => {
    const titleSplit = new SplitType(".title_split");
    const portfoTextSplit = new SplitType(".portfo_text", { types: "words" });
    const textTypingSplit = new SplitType(".text_typing");
    const ctx = gsap.context(() => {
      // Context cho GSAP
      // Animation cho .icon-img
      gsap.from(".icon-img", {
        opacity: 0,
        duration: 2,
        y: -100,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Animation cho .title_split
      gsap.from(".title_split .char", {
        duration: 1,
        delay: 0.2,
        y: 10,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.1,
      });

      // Animation cho .portfo_text
      gsap.from(".portfo_text .word", {
        duration: 1,
        y: 20,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.3,
        delay: 0.4,
      });

      // Animation cho .text_typing
      gsap.from(".text_typing .char", {
        yoyo: true,
        repeat: -1,
        duration: 0.2,
        opacity: 0,
        display: "none",
        ease: "power3.out",
        stagger: 0.2,
      });

      // Animation cho .container
      gsap.from(".container", {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power3.inout",
      });
    });

    gsap
      .timeline()
      .to(".wrapper", {
        scale: 1.2,
        delay: 4,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        ".wrapper",
        {
          filter: "blur(10px)",
          opacity: 0,
          display: "none",
          duration: 1,
          ease: "power3.out",
        },
        "-=1"
      );

    // Cleanup function
    return () => {
      ctx.revert();
      titleSplit.revert();
      portfoTextSplit.revert();
      textTypingSplit.revert();
    };
  }, []);

  const iconImage = [
    {
      src: DeveloperIcon,
      alt: "devops",
    },
    {
      src: UserIcon,
      alt: "user",
    },
    {
      src: GithubIcon,
      alt: "github",
    },
  ];
  return (
    <div className="wrapper w-full h-screen flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center gap-10">
        <div className="flex justify-center items-center gap-5">
          {iconImage.map((icon, index) => (
            <img
              src={icon.src}
              alt={icon.alt}
              className="icon-img lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[55px] h-[55px]"
              key={index}
            />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center text-center font-bold text-titleText">
          <h1 className="title_split  text-white word-spacing text-center leading-tight flex w-[550px]">
            Welcome To My
          </h1>
          <span className="portfo_text  bg-clip-text bg-gradient-to-r from-purple-700 via-blue-500 to-indigo-700">
            Portfolio Website
          </span>
        </div>
        <div className="container w-fit relative flex px-3 justify-center items-center rounded-3xl">
          <img
            src={EarthIcon}
            alt="earth"
            className="icon_gradient w-[20px] h-[20px] mr-2"
          />
          <p className="text_typing text-linkText gradient-text">
            www.eki.my.id
          </p>
          <span className="blinking-cursor">|</span>
          <div className="w-full h-full bg-gray-100 absolute custom-blur"></div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
