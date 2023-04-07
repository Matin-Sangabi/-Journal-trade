import { useEffect, useState } from "react";
import PairInputs from "src/components/formActions/PairInputs";
import Feature from "src/components/icons/Feature";
import Spot from "src/components/icons/Spot";
const plans = [
  { name: "Feature", icon: () => Feature(), selected: false },
  { name: "spot", icon: () => Spot(), selected: false },
];
const AddJournal = () => {
  const [selectPlan, setSelectPlan] = useState(-1);

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
        <div className="flex flex-col gap-y-2 mt-10 ">
          <h1 className="text-slate-800  font-bold">Pair</h1>
          <div className="flex items-center w-full gap-x-2 ">
            <PairInputs name={"from"} />
            <PairInputs name={"to"} />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-10 ">
          <h1 className="text-slate-800  font-bold"> Transaction type</h1>
          <div className="flex items-center gap-x-4 px-2 ">
            {plans.map((plan, i) => {
              return (
                <TradePlan
                  plan={plan}
                  i={i}
                  selectPlan={selectPlan}
                  setSelectPlan={setSelectPlan}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddJournal;

const TradePlan = ({ plan, i, selectPlan, setSelectPlan }) => {
  return (
    <button
      onClick={() => setSelectPlan(i)}
      className={`py-4 rounded-lg ${
        selectPlan === i
          ? "bg-violet-200 ring-2 ring-violet-400"
          : "bg-violet-100"
      } transition-all ease-in-out duration-300 flex flex-col justify-between items-center flex-1`}
    >
      <span>{plan.icon()}</span>
      <h1 className="text-slate-800 pt-2 text-sm font-bold">{plan.name}</h1>
    </button>
  );
};
