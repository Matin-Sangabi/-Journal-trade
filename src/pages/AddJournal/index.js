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
      </div>
    </>
  );
};

export default AddJournal;
