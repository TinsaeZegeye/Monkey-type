import { CiAt } from "react-icons/ci";
import { FaHashtag, FaClock, FaQuoteLeft } from "react-icons/fa";
import { TbLetterA } from "react-icons/tb";
import { SiZend } from "react-icons/si";

export default function TestControlBar() {
  const timeConstants = ["all", "short", "medium", "long"];
  return (
    <div className="flex items-center justify-between mx-[15%] mt-4 px-3 py-1 bg-[#2c2e31] rounded-md gap-6 flex-nowrap text-sm">
      <div className="flex items-center justify-between gap-4">
        <button className="btn group">
          <CiAt className="icons group-hover:text-[#e2b755]" />
          <span className="span group-hover:text-[#e2b755]">punctuations</span>
        </button>
        <button className="btn group">
          <FaHashtag className="icons group-hover:text-[#e2b755]" />
          <span className="span group-hover:text-[#e2b755]">numbers</span>
        </button>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button className="btn group">
          <FaClock className="icons group-hover:text-[#e2b755]" />
          <span className="span group-hover:text-[#e2b755]">time</span>
        </button>
        <button className="btn group">
          <TbLetterA className="icons group-hover:text-[#e2b755]" />
          <span className="span group-hover:text-[#e2b755]">words</span>
        </button>
        <button className="btn group">
          <FaQuoteLeft className="icons group-hover:text-[#e2b755]" />
          <span className="span group-hover:text-[#e2b755]">quote</span>
        </button>
        <button className="btn group">
          <SiZend className="icons group-hover:text-[#e2b755]" />
          <span className="span group-hover:text-[#e2b755]">zen</span>
        </button>
      </div>

      <div className="flex items-center gap-4 justify-between">
        {timeConstants.map((item) => (
          <button
            key={item}
            className="text-[#666469] hover:text-[#e2b755] transition-colors duration-200 ease-in-out cursor-pointer p-1 font-mono"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
