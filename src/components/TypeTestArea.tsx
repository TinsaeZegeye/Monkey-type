"use client";
import { useRef, useState } from "react";
import { MdRestartAlt } from "react-icons/md";

export default function TypeTestArea() {
  const sampleTest: string =
    "too between each also however late man they from hand group help while both any here when at for so during again people just person by one place a be fact little plan man face life well";

  const [userInput, setUserInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = () => {};

  const renderTest = () => {
    return sampleTest.split("").map((char, index) => (
      <span
        key={index}
        className={`text-[#646669] ${char === " " ? "inline-block w-3" : ""}`}
      >
        {index === 0 && (
          <span className="absolute -left-1 top-0 w-0.5 h-7 bg-[#e2b714] animate-blink">
            |
          </span>
        )}
        {char}
      </span>
    ));
  };

  return (
    <div className="px-7 mt-2">
      <div className="text-[#e2b714] text-2xl font-mono mb-4">00</div>{" "}
      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          ref={inputRef}
          value={userInput}
          onChange={handleInputChange}
          className="opacity-0 absolute -top-[9999px] -left-[9999px]"
        />

        <div className="text-2xl leading-relaxed tracking-wide font-mono rounded-lg px-2 py-4 bg-[#2c2e31] w-full min-h-fit flex flex-wrap items-start">
          {renderTest()}
        </div>

        {/* Restart button */}
        <button className="flex flex-col items-center text-[#646669] hover:text-[#d1d0c5] cursor-pointer group mt-6 transition-colors duration-200">
          <MdRestartAlt className="text-2xl" />
          <span className="text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            restart test
          </span>
        </button>
      </div>
    </div>
  );
}
