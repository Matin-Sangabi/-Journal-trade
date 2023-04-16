import { HiMenu, HiPlus } from "react-icons/hi";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import CalculateWeek, { MonthDate } from "src/utils/Date";
import CoinsActions from "./CoinsAction";
import SelectPlan from "../plans/selectPlan";
import { useState } from "react";

const GenerateTask = ({ setOpenGenerateTask, tpSl, setTpSl, SelectOrder }) => {
  const [TPState, setTpState] = useState([1]);
  const [SLState, setSLState] = useState([1]);
  const planClickHandler = (plan, e) => {
    e.preventDefault();
    setTpSl({ ...plan, isSelected: true });
  };
  const AddDescHandler = (e, type) => {
    e.preventDefault();
    const element = [...TPState];
    element.push(1);
    setTpState(element);
  };
  // console.log(tpSl);
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
      <div className="flex flex-col gap-y-4 mt-3 max-w-screen-lg px-4 pb-10 ">
        <h1 className="text-slate-800 font-bold tracking-wide ">Task Form</h1>
        <div className="p-2 flex flex-col gap-2 bg-indigo-50 rounded-3xl shadow ">
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
              <div className="flex flex-col gap-2  mt-3 mb-20">
                <FormHeader title={"Tp or SL"} />
                <div className="flex flex-col gap-y-4 px-4 relative ">
                  <div
                    className={`flex   gap-x-4 pt-2 ${
                      tpSl.isSelected ? "w-16 justify-start" : "w-full"
                    } transition-all ease-in-out duration-300  `}
                  >
                    <SelectPlan
                      selectPlan={tpSl}
                      plans={SelectOrder}
                      onClick={planClickHandler}
                      isSmall={tpSl.isSelected ? true : false}
                    />
                  </div>
                  {tpSl.isSelected &&
                    (tpSl.id === 1
                      ? TPState.map((_, i) => {
                          return <OrderDesc key={i} />;
                        })
                      : SLState.map((_, i) => {
                          return <OrderDesc key={i} />;
                        }))}
                  {tpSl.isSelected && tpSl.name === "Tp" && (
                    <button
                      onClick={AddDescHandler}
                      className="absolute right-1 -bottom-3 text-sm flex items-center justify-center w-5 h-5 bg-violet-200 rounded-full ring-1 ring-violet-400 text-violet-900"
                    >
                      <HiPlus />
                    </button>
                  )}
                </div>
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

const OrderDesc = () => {
  return (
    <div className="flex items-center gap-x-2  ">
      <input
        type="text"
        className="border-none w-24 font-bold outline-none bg-violet-100 text-ceneter placeholder:text-gray-400 text-gray-700 rounded-xl focus:ring-1 focus:ring-violet-400 focus:bg-violet-200 transition-all ease-in-out duration-300 px-2 py-[3px] text-sm text-center delay-100"
        placeholder="38.00 $"
      />
      <input
        type="text"
        className="border-none font-bold outline-none bg-violet-100 text-ceneter placeholder:text-gray-400 text-gray-700 rounded-xl focus:ring-1 focus:ring-violet-400 focus:bg-violet-200 transition-all ease-in-out duration-300 px-2 py-[3px] text-sm delay-100 flex-1 "
        placeholder="why ? "
      />
    </div>
  );
};
/**
 *  <div key={i} className="flex items-center gap-x-2  ">
                          <input
                            type="text"
                            className="border-none w-24 font-bold outline-none bg-violet-100 text-ceneter placeholder:text-gray-400 text-gray-700 rounded-xl focus:ring-1 focus:ring-violet-400 focus:bg-violet-200 transition-all ease-in-out duration-300 px-2 py-[3px] text-sm text-center delay-100"
                            placeholder="38.00 $"
                          />
                          <input
                            type="text"
                            className="border-none font-bold outline-none bg-violet-100 text-ceneter placeholder:text-gray-400 text-gray-700 rounded-xl focus:ring-1 focus:ring-violet-400 focus:bg-violet-200 transition-all ease-in-out duration-300 px-2 py-[3px] text-sm delay-100 flex-1 "
                            placeholder="why ? "
                          />
                        </div>
 */
