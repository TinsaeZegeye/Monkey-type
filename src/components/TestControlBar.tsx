"use client";

import { CiAt } from "react-icons/ci";
import { FaHashtag, FaClock, FaQuoteLeft } from "react-icons/fa";
import { TbLetterA } from "react-icons/tb";
import { SiZend } from "react-icons/si";
import {
  setMode,
  setPunctuation,
  setNumbers,
  setValue,
  setWords,
  setWordsCount,
  setQuote,
  setIsTestCompleted,
  setIsTestRunning,
  setLanguage,
  setTimeLeft,
} from "@/lib/features/testConfigSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { AnimatePresence, easeInOut, motion } from "motion/react";

export default function TestControlBar() {
  const controlConstants: {
    time?: number[];
    words?: number[];
    quote?: string[];
  }[] = [
    { time: [15, 30, 60, 120] },
    { words: [10, 25, 50, 100] },
    { quote: ["all", "short", "medium", "long"] },
  ];

  const config = useAppSelector((state) => state.testConfig);
  const dispatch = useAppDispatch();

  return (
    <AnimatePresence mode="wait">
      <div className="flex items-center justify-between mx-[15%] mt-4 px-3 py-1 bg-[#2c2e31] rounded-md gap-6 flex-nowrap text-sm">
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -30, scale: 0.98 }}
          transition={{ duration: 0.3, ease: easeInOut }}
          className={`flex items-center justify-between gap-4 ${
            config.mode === "quote" || config.mode === "zen" ? "hidden" : ""
          }`}
        >
          <button
            className="btn group"
            onClick={() => dispatch(setPunctuation())}
          >
            <CiAt
              className={`icons group-hover:text-[#e2b755] ${
                config.punctuation ? "text-[#e2b755]" : ""
              }`}
            />
            <span
              className={`span group-hover:text-[#e2b755] ${
                config.punctuation ? "text-[#e2b755]" : ""
              }`}
            >
              punctuations
            </span>
          </button>
          <button className="btn group" onClick={() => dispatch(setNumbers())}>
            <FaHashtag
              className={`icons group-hover:text-[#e2b755] ${
                config.numbers ? "text-[#e2b755]" : ""
              }`}
            />
            <span
              className={`span group-hover:text-[#e2b755] ${
                config.numbers ? "text-[#e2b755]" : ""
              }`}
            >
              numbers
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -30, scale: 0.98 }}
          transition={{ duration: 0.3, ease: easeInOut }}
          className="flex items-center justify-center gap-4"
        >
          <button
            className="btn group"
            onClick={() => dispatch(setMode("time"))}
          >
            <FaClock
              className={`icons ${
                config.mode === "time"
                  ? "text-[#e2b755]"
                  : "roup-hover:text-[#e2b755] "
              }`}
            />
            <span
              className={`span ${
                config.mode === "time"
                  ? "text-[#e2b755]"
                  : "group-hover:text-[#e2b755] "
              }`}
            >
              time
            </span>
          </button>
          <button
            className="btn group"
            onClick={() => dispatch(setMode("words"))}
          >
            <TbLetterA
              className={`icons ${
                config.mode === "words"
                  ? "text-[#e2b755]"
                  : "group-hover:text-[#e2b755] "
              }`}
            />
            <span
              className={`span ${
                config.mode === "words"
                  ? "text-[#e2b755]"
                  : "group-hover:text-[#e2b755] "
              }`}
            >
              words
            </span>
          </button>
          <button
            className="btn group"
            onClick={() => dispatch(setMode("quote"))}
          >
            <FaQuoteLeft
              className={`icons ${
                config.mode === "quote"
                  ? "text-[#e2b755]"
                  : "group-hover:text-[#e2b755] "
              }`}
            />
            <span
              className={`span ${
                config.mode === "quote"
                  ? "text-[#e2b755]"
                  : "group-hover:text-[#e2b755] "
              }`}
            >
              quote
            </span>
          </button>
          <button
            className="btn group"
            onClick={() => dispatch(setMode("zen"))}
          >
            <SiZend
              className={`icons ${
                config.mode === "zen"
                  ? "text-[#e2b755]"
                  : "group-hover:text-[#e2b755] "
              }`}
            />
            <span
              className={`span ${
                config.mode === "zen"
                  ? "text-[#e2b755]"
                  : "group-hover:text-[#e2b755] "
              }`}
            >
              zen
            </span>
          </button>
        </motion.div>

        {controlConstants.map((items, index) => {
          const [category, values] = [
            Object.keys(items)[0],
            Object.values(items)[0],
          ];

          if (config.mode != category) return null;

          return (
            <motion.div
              className="flex items-center gap-4 justify-between"
              key={category}
              initial={{ opacity: 0, x: 30, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -30, scale: 0.98 }}
              transition={{ duration: 0.3, ease: easeInOut }}
            >
              {values.map((val) => (
                <button
                  className={`text-[#646669] font-mono p-1 transition-colors duration-200 ease-in-out cursor-pointer rounded-md ${
                    config.value === val ||
                    config.quote === val ||
                    config.words === val
                      ? "text-[#e2b755]"
                      : "hover:text-[#e2b755]"
                  }  w-full`}
                  onClick={() => {
                    if (typeof val === "number" && config.mode === "time")
                      dispatch(setValue(val));
                    else if (typeof val === "number" && config.mode === "words")
                      dispatch(setWords(val));
                    else if (
                      val === "all" ||
                      val === "short" ||
                      val === "medium" ||
                      (val === "long" && config.mode === "quote")
                    )
                      dispatch(setQuote(val));
                  }}
                  key={val}
                >
                  {val}
                </button>
              ))}
            </motion.div>
          );
        })}
      </div>
    </AnimatePresence>
  );
}
