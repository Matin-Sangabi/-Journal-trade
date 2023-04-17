import { HiArrowLeft, HiMenu } from "react-icons/hi";
import CalculateWeek, { MonthDate } from "src/utils/Date";

const WeekDate = ({setOpenGenerateTask}) => {
  return (
    <div className="p-2 w-full bg-slate-800  shadow-2xl rounded-b-3xl flex flex-col ">
      <div className="flex items-center justify-between text-violet-50 w-full">
        <button className="group" onClick={() => setOpenGenerateTask(false)}>
          <HiArrowLeft className="group-hover:-translate-x-3 transition-all ease-in-out delay-300 duration-300" />
        </button>
        <h1 className="font-bold tracking-wide">{MonthDate}</h1>
        <button className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center">
          <HiMenu />
        </button>
      </div>
      <div className="flex items-center gap-x-3 flex-nowrap mt-5 pb-4 md:mx-auto px-2 overflow-x-scroll">
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
  );
};

export default WeekDate;
