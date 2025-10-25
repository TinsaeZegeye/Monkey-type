import { GrLanguage } from "react-icons/gr";

export default function Language() {
  return (
    <div className="flex items-center justify-between mx-[15%] rounded-md p-2 mt-5">
      <button className="btn group max-w-xs justify-center">
        <GrLanguage className="icons group-hover:text-[#e2b755]" />
        <span className="span group-hover:text-[#e2b755]">english</span>
      </button>
    </div>
  );
}
