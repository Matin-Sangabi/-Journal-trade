import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

const TradeDesc = ({ title, path }) => {
  return (
    <div className="flex items-center justify-between text-slate-800">
      <h1 className="text-base font-bold">{title} Plan</h1>
      <Link
        href={path}
        className="inline-flex items-center justify-center hover:text-sky-700 font-semibold group transition-all ease-in-out duration-300 "
      >
        <span className="flex  items-center justify-center text-sm font-bold ">See All</span>
        <span className="text-xl flex items-center justify-center pt-1 group-hover:translate-x-1 transition-all ease-in-out duration-300 ">
          <BsArrowRightShort />
        </span>
      </Link>
    </div>
  );
};

export default TradeDesc;
