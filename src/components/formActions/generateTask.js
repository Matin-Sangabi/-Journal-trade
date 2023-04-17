import { useState } from "react";
import WeekDate from "../date/CalculateWeek";
import FormHeader from "./formHeader";
import { HiArrowRight } from "react-icons/hi";
import Forms from ".";
import UploadDataForm from "./uploadForm";

const GenerateTask = ({ setOpenGenerateTask, tpSl, setTpSl, SelectOrder }) => {
  const [TPState, setTpState] = useState([{ order: "", desc: "" }]);
  const [SLState, setSLState] = useState([{ order: "", desc: "" }]);
  const [toggleForm, setToggleForm] = useState(false);
  const planClickHandler = (plan, e) => {
    e.preventDefault();
    setTpSl({ ...plan, isSelected: true });
  };

  const profitInputHandler = (e, type) => {
    const { id, value, name } = e.target;
    let profit = [];
    switch (type) {
      case "SL": {
        profit = [...SLState];
        name === "order"
          ? (profit[id].order = value)
          : (profit[id].desc = value);
        setSLState(profit);
        break;
      }
      default: {
        profit = [...TPState];
        name === "order"
          ? (profit[id].order = value)
          : (profit[id].desc = value);
        setTpState(profit);
        break;
      }
    }
  };
  const AddDescHandler = (e, type) => {
    e.preventDefault();
    const element = [...TPState];
    element.push({ order: "", desc: "" });
    setTpState(element);
  };
  return (
    <>
      <WeekDate setOpenGenerateTask={setOpenGenerateTask} />
      <div className="flex flex-col gap-y-4 mt-3 max-w-screen-lg px-4  overflow-hidden ">
        <div className="flex items-center justify-between">
          <h1
            className={`${
              !toggleForm
                ? "text-indigo-400 text-xs hover:underline  "
                : "text-slate-800"
            } font-bold tracking-wide transition-all ease-in-out duration-300 `}
            onClick={() => setToggleForm(!toggleForm)}
          >
            Task Form
          </h1>
          <h1
            className={`${
              toggleForm
                ? "text-indigo-400 text-xs hover:underline "
                : "text-slate-800 text-base"
            }  transition-all ease-in-out duration-300 font-bold tracking-wide `}
            onClick={() => setToggleForm(!toggleForm)}
          >
            upload a File
          </h1>
        </div>
        <div className="relative">
          <div
            className={`p-2  flex flex-col gap-2 bg-indigo-50 rounded-3xl shadow transition-all ease-in-out duration-500 ${
              toggleForm ? "-translate-x-[120%]" : "translate-x-0"
            }`}
          >
            <FormHeader title={"Transaction"} />
            <div className="flex flex-col gap-y-2">
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
              <Forms
                SLState={SLState}
                SelectOrder={SelectOrder}
                TPState={TPState}
                onClick={planClickHandler}
                tpSl={tpSl}
                onChange={profitInputHandler}
                onDecHandler={AddDescHandler}
              />
            </div>
          </div>
          <div
            className={`${
              toggleForm
                ? "translate-x-0 absolute top-0 mt-4"
                : "translate-x-[120%]"
            } transition-all ease-in-out duration-500 w-full`}
          >
            <UploadDataForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateTask;
