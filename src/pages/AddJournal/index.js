import PairInputs from "src/components/formActions/PairInputs";

const AddJournal = () => {
  return (
    <>
      <div className="max-w-screen-sm px-4 mx-auto">
        <div className="p-2 flex flex-col items-center ">
          <img src="/images/icons/7532727.png" alt="passion" />
          <div className="flex flex-col items-center gap-y-2">
            <h1 className="text-slate-800 font-extrabold text-3xl ">
              Follow your passion
            </h1>
            <h2 className="text-gray-500  font-bold line-clamp-2 w-72 text-center">
              Quickly generate task tailored to your needs-at zero cast
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-10">
          <h1 className="text-slate-800  font-bold">Pair</h1>
          <div className="flex items-center gap-x-4">
            <PairInputs name={"from"} />
            <PairInputs name={"to"} />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-10">
          <h1 className="text-slate-800  font-bold"> Transaction type</h1>
          <div className="flex items-center gap-x-4">
            <div className="py-4 px-2 rounded-lg bg-violet-100 flex flex-col items-center flex-1">
                <img src="/images/icons/Feature.svg" />
                <h1 className="text-slate-800 text-sm font-extrabold">Feature</h1>
            </div>
            <div className="py-4 px-2 rounded-lg bg-violet-100 flex flex-col items-center flex-1">
                <img src="/images/icons/Feature.svg" />
                <h1 className="text-slate-800 text-sm font-extrabold">Feature</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddJournal;
