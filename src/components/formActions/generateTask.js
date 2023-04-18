import { useState } from "react";
import WeekDate from "../date/CalculateWeek";
import FormHeader from "./formHeader";
import { HiArrowRight } from "react-icons/hi";
import Forms from ".";
import UploadDataForm from "./uploadForm";
import FormBreadCrumbs from "./formBreadCrumb";

const GenerateTask = ({
  setOpenGenerateTask,
  tpSl,
  SelectOrder,
  onChange,
  onClick,
  onDecHandler,
  TPState,
  SLState,
  onInput,
  inputValue,
  selectPlan,
  selectRelated,
  rangeSlide,
}) => {
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <>
      <WeekDate setOpenGenerateTask={setOpenGenerateTask} />
      <div className="flex flex-col gap-y-4 mt-3 max-w-screen-lg px-4 pb-6 overflow-hidden ">
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
              <FormBreadCrumbs
                inputValue={inputValue}
                selectPlan={selectPlan}
                selectRelated={selectRelated}
                rangeSlide={rangeSlide}
              />
              <Forms
                SLState={SLState}
                SelectOrder={SelectOrder}
                TPState={TPState}
                onClick={onClick}
                tpSl={tpSl}
                onChange={onChange}
                onDecHandler={onDecHandler}
                onInput={onInput}
                inputValue={inputValue}
              />
            </div>
          </div>
          <div
            className={`${
              toggleForm ? "translate-x-0 " : "translate-x-[120%]"
            } transition-all ease-in-out duration-500 w-full absolute top-0 mt-4`}
          >
            <UploadDataForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default GenerateTask;
