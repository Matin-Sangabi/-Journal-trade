import { HiOutlineArrowRight } from "react-icons/hi2";
import PairInputs from "src/components/formActions/PairInputs";
import ChoosePlan from "src/components/formActions/choosePlan";

const AddJournal = () => {
  return (
    <>
      <div className="max-w-screen-sm px-4 mx-auto">
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
        <div className="flex flex-col gap-y-2 mt-10 ">
          <h1 className="text-slate-800  font-bold">Pair</h1>
          <div className="flex items-center  gap-x-2 ">
            <PairInputs name={"from"} />
            <PairInputs name={"to"} />
          </div>
        </div>
        <ChoosePlan />
        <div className="flex items-center w-full my-4 px-4 ">
          <button className="p-2 w-full  bg-slate-800 text-sm hover:shadow-xl hover:shadow-slate-400   rounded-lg flex items-center justify-center gap-x-2 group text-white transition-all ease-in-out duration-300">
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
