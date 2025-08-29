import {
  ArrowBigDown,
  ArrowDown,
  ArrowDown01,
  ArrowDown10,
  ArrowDownCircle,
  ArrowDownIcon,
  Calendar,
  LocationEdit,
  Mail,
  Phone,
} from "lucide-react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
  FaGithub,
} from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import profileImage from "/images/profile.jpg";
import SidebarItem from "./SidebarItem";
import { useState } from "react";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-5 max-lg:gap-2 bg-lightgrayy px-7 py-10 max-lg:pt-5 max-lg:pb-2  rounded-2xl border border-[#383838] max-lg:px-4 relative ">
      <div className="flex flex-col max-lg:flex-row gap-3 items-center text-white border-b border-b-stone-500 pb-8 max-lg:pb-2 max-lg:border-none ">
        <img
          src={profileImage}
          alt=""
          className="h-40 w-40 rounded-4xl object-contain max-lg:rounded-full max-lg:object-cover max-lg:h-25 max-lg:w-25"
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold max-xs:text-xl">M. Ali Farooqi</h1>
          <span className="bg-xlightgray rounded-xl h-5  flex items-center justify-center text-xs px-2 py-3 text-stone-200 ">
            Full Stack Developer
          </span>
        </div>
      </div>
      <div
        className={`flex flex-col gap-5 text-white max-lg:flex-row flex-wrap transition-all duration-500 overflow-hidden 
        ${
          isOpen
            ? "max-lg:max-h-96 opacity-100"
            : "max-lg:max-h-0 opacity-0 lg:opacity-100 lg:max-h-none"
        }`}
      >
        <SidebarItem label="Email" content="alifarooqipnb@gmail" icon={Mail} />
        <SidebarItem label="Phone" content="+92 332 4471592" icon={Phone} />
        <SidebarItem label="Birthday" content="June 05, 2005" icon={Calendar} />
        <SidebarItem
          label="Location"
          content="Gujrat, Pakistan"
          icon={LocationEdit}
        />
      </div>
      <div
        className={`flex gap-4 max-lg:gap-1 items-center max-lg:items-start max-lg:justify-start justify-center mt-2 text-stone-400 cursor-pointer transition-all duration-500 overflow-hidden 
        ${
          isOpen
            ? "max-lg:max-h-32 opacity-100"
            : "max-lg:max-h-0 opacity-0 lg:opacity-100 lg:max-h-none"
        }`}
      >
        <div
          className="w-8 h-8 rounded-xl transition-all duration-300 hover:bg-blue hover:text-white flex items-center justify-center"
          onClick={() => window.open("https://github.com/Ali240-max", "_blank")}
        >
          <FaGithub size={20} className="cursor-pointer" />
        </div>
        <div
          className="w-8 h-8 rounded-xl transition-all duration-300 hover:bg-blue hover:text-white flex items-center justify-center"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/muhammad-ali-farooqi-6479811a1/",
              "_blank"
            )
          }
        >
          <FaLinkedin size={20} className="cursor-pointer" />
        </div>
        <div
          className="w-8 h-8 rounded-xl transition-all duration-300 hover:bg-blue hover:text-white flex items-center justify-center"
          onClick={() =>
            window.open(
              "https://www.instagram.com/alii.codess?igsh=MTQ4bDc5anZwdWd2ZA==",
              "_blank"
            )
          }
        >
          <LuInstagram size={20} className="cursor-pointer" />
        </div>
      </div>
      <div
        className="absolute top-0 right-0 px-4 py-1 shadow-md rounded-bl-4xl rounded-tr-lg bg-gradient-to-br from-blue/60 to-transparent flex items-center justify-center text-blue cursor-pointer lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ArrowDownIcon
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={20}
        />
      </div>
    </div>
  );
}

export default Sidebar;
