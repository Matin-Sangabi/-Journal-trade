import { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import PairInputs from "src/components/formActions/PairInputs";
import ChoosePlan from "src/components/formActions/choosePlan";
import GenerateTask from "src/components/formActions/generateTask";
import BottomNav from "src/container/layout/navigation/bottomNav";

const AddJournal = () => {
  const [openGenerateTask, setOpenGenerateTask] = useState(false);
  return (
    <>
      <div
        className={`w-full h-full bg-violet-50 z-50 block absolute left-0 top-0   overflow-y-hidden ${
          openGenerateTask
            ? "translate-y-0 block"
            : "-translate-y-full invisible"
        } transition-all ease-out delay-500 duration-300`}
      >
        <GenerateTask setOpenGenerateTask = {setOpenGenerateTask} />
        <BottomNav />
      </div>
      <div
        className={`${
          openGenerateTask
            ? "-translate-y-full h-screen "
            : "translate-y-0 h-full "
        } max-w-screen-sm px-4 mx-auto overflow-hidden transition-all ease-in-out delay-500 duration-300`}
      >
        <div className="p-2 flex flex-col items-center ">
          <img
            src="/images/icons/7532727.png"
            alt="passion"
            className="object-cover object-center aspect-auto"
          />
          <div className="flex flex-col items-center gap-y-2">
            <h1 className="text-slate-800 font-extrabold text-3xl ">
              Follow your passion
            </h1>
            <h2 className="text-gray-500  font-bold line-clamp-2 w-72 text-center">
              Quickly generate task tailored to your needs-at zero cast
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-4 ">
          <h1 className="text-slate-800  font-bold">Pair</h1>
          <div className="flex items-center  gap-x-2 ">
            <PairInputs name={"from"} />
            <PairInputs name={"to"} />
          </div>
        </div>
        <ChoosePlan />
        <div className="flex items-center w-full my-4 px-4 ">
          <button
            onClick={() => {
              setOpenGenerateTask(true);
            }}
            className="p-2 w-full  bg-slate-800 text-sm hover:shadow-lg hover:shadow-slate-200   rounded-lg flex items-center justify-center gap-x-2 group text-white transition-all ease-in-out duration-300"
          >
            <span>Generate My Task</span>
            <span className="group-hover:translate-x-4 translate-x-0  transition-all ease-in-out duration-300">
              <HiOutlineArrowRight />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddJournal;
