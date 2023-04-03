import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import {
  HiCalendar,
  HiEllipsisVertical,
  HiOutlineClipboardDocumentList,
  HiOutlineClock,
} from "react-icons/hi2";
import { RiAddLine } from "react-icons/ri";
const TradePlan = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between text-slate-800">
        <h1 className="text-base font-semibold">Trade Plan</h1>
        <Link
          href={"/"}
          className="inline-flex items-center justify-center hover:text-sky-700 font-semibold group transition-all ease-in-out duration-300 "
        >
          <span className="flex  items-center justify-center  ">see more</span>
          <span className="text-xl flex items-center justify-center pt-1 group-hover:translate-x-1 transition-all ease-in-out duration-300 ">
            <BsArrowRightShort />
          </span>
        </Link>
      </div>
      <div className="mx-1 py-2 px-2 flex flex-col gap-y-4 bg-indigo-50 rounded-xl shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1">
            {[1, 2, 3, 4].map((_, i) => {
              return (
                <span
                  key={i}
                  className="w-8 h-8 ring-1 ring-indigo-300 ring-offset-2 rounded-full bg-indigo-300"
                ></span>
              );
            })}
          </div>
          <div className="flex items-center gap-x-2">
            <button className="p-2 rounded-xl bg-violet-200 text-slate-800 text-sm font-bold flex items-center justify-center gap-x-2">
              <span className="">Add</span>
              <span>
                <RiAddLine />
              </span>
            </button>
            <button className="text-slate-800 text-2xl">
              <HiEllipsisVertical />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-2">
          <h1 className="text-slate-800 font-bold text-sm">Task Detail</h1>
          <div className="flex items-center flex-wrap justify-around p-1 gap-2">
            <div className="flex gap-x-1">
              <div className="flex items-center p-2 text-2xl rounded-md bg-violet-200 text-salte-700">
                <HiCalendar />
              </div>
              <div className="flex flex-col ">
                <span className="font-bold text-slate-800 ">8 jan</span>
                <spnn className="text-xs text-slate-500 font-semibold ">
                  Task Date
                </spnn>
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className="flex items-center p-2 text-2xl rounded-md bg-violet-200 text-salte-700">
                <HiOutlineClock />
              </div>
              <div className="flex flex-col ">
                <span className="font-bold text-slate-800 ">4 pm</span>
                <spnn className="text-xs text-slate-500 font-semibold ">
                  Task Time
                </spnn>
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className="flex items-center p-2 text-2xl rounded-md bg-violet-200 text-salte-700">
                <HiOutlineClipboardDocumentList />
              </div>
              <div className="flex flex-col ">
                <span className="font-bold text-slate-800 ">Buy</span>
                <spnn className="text-xs text-slate-500 font-semibold ">
                  Task plan
                </spnn>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-2 ">
          <button className="bg-violet-200 text-slate-800 font-bold text-sm px-14 py-2 rounded-lg">
            Edit
          </button>
          <button className="bg-slate-800 text-slate-50 px-4 py-2 font-medium text-sm rounded-lg flex-1">
            See Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradePlan;
