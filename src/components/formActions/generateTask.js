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
      <div className="flex flex-col gap-y-4 mt-3 max-w-screen-lg px-4 pb-10 ">
        <div>
          <h1 className="text-slate-800 font-bold tracking-wide ">Task Form</h1>
          <div className="p-2 flex flex-col gap-2 bg-indigo-50 rounded-3xl shadow ">
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
        </div>
        <h1 className="text-slate-800 font-bold tracking-wide ">
          upload a File
        </h1>
        <UploadDataForm />
      </div>
    </>
  );
};

export default GenerateTask;
