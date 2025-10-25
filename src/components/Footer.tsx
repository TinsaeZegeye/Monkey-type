import React from "react";
import { CiMail } from "react-icons/ci";
import { FaAffiliatetheme, FaCode, FaDiscord, FaTwitter } from "react-icons/fa";
import { ImTree } from "react-icons/im";
import { MdOutlineSupportAgent, MdSecurity } from "react-icons/md";
import { SiGnuprivacyguard, SiIterm2 } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-5 px-2 py-1 mt-9">
      <div className="flex flex-col items-center justify-center gap-3 text-sm">
        <p className="text-[#646669] text-sm ">
          <span className="footer-span">tab</span> +{" "}
          <span className="footer-span">enter</span> - restart test
        </p>
        <p className="text-[#646669] text-sm whitespace-pre">
          <span className="footer-span">esc</span> or{" "}
          <span className="footer-span">ctrl</span> +{" "}
          <span className="footer-span">shift</span> +{" "}
          <span className="footer-span">p</span> - command line
        </p>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center justify-between gap-3">
          <button className="flex items-center justify-between gap-2 p-2 transition-colors duration-200 ease-in-out rounded-md cursor-pointer w-full group">
            <CiMail className="icons group-hover:text-[#d1d0c5]" />
            <span className="span group-hover:text-[#d1d0c5]">contact</span>
          </button>
          <button className="flex items-center justify-between gap-2 p-2 transition-colors duration-200 ease-in-out rounded-md cursor-pointer w-full group">
            <MdOutlineSupportAgent className="icons group-hover:text-[#d1d0c5]" />
            <span className="span group-hover:text-[#d1d0c5]">support</span>
          </button>
          <button className="flex items-center justify-between gap-2 p-2 transition-colors duration-200 ease-in-out rounded-md cursor-pointer w-full group">
            <FaCode className="icons group-hover:text-[#d1d0c5]" />
            <span className="span group-hover:text-[#d1d0c5]">github</span>
          </button>
          <button className="flex items-center justify-between gap-2 p-2 transition-colors duration-200 ease-in-out rounded-md cursor-pointer w-full group">
            <FaDiscord className="icons group-hover:text-[#d1d0c5]" />
            <span className="span group-hover:text-[#d1d0c5]">discord</span>
          </button>
          <button className="flex items-center justify-between gap-2 p-2 transition-colors duration-200 ease-in-out rounded-md cursor-pointer w-full group">
            <FaTwitter className="icons group-hover:text-[#d1d0c5]" />
            <span className="span group-hover:text-[#d1d0c5]">twitter</span>
          </button>
          <button className="flex items-center justify-between gap-2 p-2 transition-colors duration-200 ease-in-out rounded-md cursor-pointer w-full group">
            <SiIterm2 className="icons group-hover:text-[#d1d0c5]" />
            <span className="span group-hover:text-[#d1d0c5]">terms</span>
          </button>
          <button className="flex items-center justify-between gap-2 p-2 transition-colors duration-200 ease-in-out rounded-md cursor-pointer w-full group">
            <MdSecurity className="icons group-hover:text-[#d1d0c5]" />
            <span className="span group-hover:text-[#d1d0c5]">security</span>
          </button>
          <button className="flex items-center justify-between gap-2 p-2 transition-colors duration-200 ease-in-out rounded-md cursor-pointer w-full group">
            <SiGnuprivacyguard className="icons group-hover:text-[#d1d0c5]" />
            <span className="span group-hover:text-[#d1d0c5]">privacy</span>
          </button>
        </div>

        <div className="flex items-center justify-center text-sm gap-3">
          <button className="flex items-center justify-between gap-2 p-2 transition-colors duration-200 ease-in-out rounded-md cursor-pointer w-full group text-xs">
            <FaAffiliatetheme className="icons group-hover:text-[#d1d0c5]" />
            <span className="span group-hover:text-[#d1d0c5]">serika</span>
          </button>
          <button className="flex items-center justify-between gap-2 p-2 transition-colors duration-200 ease-in-out rounded-md cursor-pointer w-full group">
            <ImTree className="icons w-3 h-3 group-hover:text-[#d1d0c5]" />
            <span className="span group-hover:text-[#d1d0c5]">v25.36.0</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
