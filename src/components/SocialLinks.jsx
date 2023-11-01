import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      href: "https://linkedin.com/in/temesgen-asmamaw21",
      child: (
        <>
          {" "}
          LinkedIn
          <SiLinkedin className="hover:scale-105 duration-300" size={30} />
        </>
      ),
      style: "rounded-tr-md",
      download: false,
    },
    {
      id: 2,
      href: "https://github.com/temesgenasmamaw",
      child: (
        <>
          {" "}
          Github
          <SiGithub className="hover:scale-105 duration-300" size={30} />
        </>
      ),
      download: false,
    },
    {
      id: 3,
      href: "mailto:asmamawtemesgen16@gmail.com",
      child: (
        <>
          Mail{" "}
          <MdOutlineMailOutline
            className="hover:scale-105 duration-300"
            size={30}
          />
        </>
      ),
      download: false,
    },
    {
      id: 4,
      href: "https://docs.google.com/document/d/1ideAigNM7xMUNMfa1BJkVxeGvd0UKKs3Xvasdg-HgQU/edit?usp=drivesdk",
      child: (
        <>
          Resume{" "}
          <BsFillPersonLinesFill
            className="hover:scale-105 duration-300"
            size={30}
          />
        </>
      ),
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="">
      <div className="ml-80 flex-row top-[35%] left-0 fixed text-white hidden xl:flex z-40">
        <ul>
          {links.map((link) => {
            return (
              <li
                key={link.id}
                className={
                  "flex justify-between  items-center w-40 h-14 px-4 bg-gray-600 ml-[-65%] hover:ml-[-5%] duration-300 hover:rounded-md" +
                  " " +
                  link.style
                }
              >
                <a
                  href={link.href}
                  className="mainli flex justify-between items-center w-full"
                  target="_blank"
                  rel="noreferrer"
                  download={link.download}
                >
                  {link.child}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
