import {
  HiCalendar,
  HiEllipsisVertical,
  HiOutlineClipboardDocumentList,
  HiOutlineClock,
} from "react-icons/hi2";
import { RiAddLine } from "react-icons/ri";
import TradeDesc from "./tradeDesc";
const TradePlan = () => {
  return (
    <div className="flex flex-col gap-y-2 ">
      <TradeDesc title={'Trade'} path={"/"}/>
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
          <div className="flex items-center gap-x-1">
            <button className="p-2 rounded-xl bg-violet-200 text-slate-800 text-sm font-bold flex items-center justify-center gap-x-1">
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
          <h1 className="text-slate-600 tracking-wide font-bold text-sm">Task Detail</h1>
          <div className="flex items-center flex-wrap justify-around p-1 gap-2">
            <div className="flex gap-x-1">
              <div className="flex items-center p-2 text-xl rounded-md bg-violet-200 text-salte-700">
                <HiCalendar />
              </div>
              <div className="flex flex-col ">
                <span className="font-bold text-slate-800 text-sm ">8 jan</span>
                <span className="text-xs text-slate-500 font-semibold ">
                  Task Date
                </span>
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className="flex items-center p-2 text-xl rounded-md bg-violet-200 text-salte-700">
                <HiOutlineClock />
              </div>
              <div className="flex flex-col ">
                <span className="font-bold text-slate-800 text-sm ">4 pm</span>
                <span className="text-xs text-slate-500 font-semibold ">
                  Task Time
                </span>
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className="flex items-center p-2 text-xl rounded-md bg-violet-200 text-salte-700">
                <HiOutlineClipboardDocumentList />
              </div>
              <div className="flex flex-col ">
                <span className="font-bold text-slate-800 text-sm">Buy</span>
                <span className="text-xs text-slate-500 font-semibold ">
                  Task plan
                </span>
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
