import { HiMenu } from "react-icons/hi";
import {
  HiArrowLeft,
  HiArrowRight,
  HiOutlineArrowRight,
} from "react-icons/hi2";
import CalculateWeek, { MonthDate } from "src/utils/Date";
import CoinsActions from "./CoinsAction";

const GenerateTask = ({ setOpenGenerateTask }) => {
  return (
    <>
      <div className="p-2 w-full bg-slate-800 shadow-2xl rounded-b-3xl flex flex-col ">
        <div className="flex items-center justify-between text-violet-50 w-full">
          <button className="group" onClick={() => setOpenGenerateTask(false)}>
            <HiArrowLeft className="group-hover:-translate-x-3 transition-all ease-in-out delay-300 duration-300" />
          </button>
          <h1 className="font-bold tracking-wide">{MonthDate}</h1>
          <button className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center">
            <HiMenu />
          </button>
        </div>
        <div className="flex items-center gap-x-2 flex-nowrap mt-5 pb-4 md:mx-auto px-2 overflow-x-scroll">
          {CalculateWeek(new Date()).map((week, i) => {
            return (
              <div
                key={i}
                className={`py-2 px-2 rounded-full ${
                  week.today ? "bg-slate-500" : "bg-slate-700"
                } flex flex-col items-center gap-y-1`}
              >
                <span className="text-xs w-7 text-center text-gray-300 ">
                  {week.weekday}
                </span>
                <span className="text-violet-50 font-semibold tracking-wide text-">
                  {week.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-3 max-w-screen-lg px-4">
        <h1 className="text-slate-800 font-bold tracking-wide ">Task Form</h1>
        <div className="p-2 flex flex-col gap-2 bg-indigo-50 rounded-2xl">
          <FormHeader title={"Transaction"} />
          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col gap-2 px-4 text-xs font-semibold">
              <span className="text-slate-500">Btc/Usd</span>
              <div className="text-slate-500 flex items-center gap-x-2">
                <span className="">Feature</span>
                <span>
                  <HiArrowRight />
                </span>
                <span className="">spot</span>
                <span>
                  <HiArrowRight />
                </span>
                <span className="">x10</span>
              </div>
            </div>
            <form>
              <div className="flex flex-col gap-2  mt-3">
                <FormHeader title={"Coins"} />
                <div className="flex items-center gap-x-2">
                  <CoinsActions
                    name={"coin price"}
                    placeHolder={"45.22 $"}
                    isSmall={true}
                  />
                  <CoinsActions
                    name={"margin"}
                    placeHolder={"60.00 $"}
                    isSmall={true}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2  mt-3">
                <FormHeader title={"Tp or SL"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateTask;

const FormHeader = ({ title }) => {
  return (
    <span className="text-sm text-slate-800 font-bold tracking-normal">
      {title}
    </span>
  );
};
