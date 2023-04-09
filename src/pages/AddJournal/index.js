import { Fragment, useEffect, useState } from "react";
import PairInputs from "src/components/formActions/PairInputs";
import SelectPlan from "src/components/formActions/selectPlan";
import Feature from "src/components/icons/Feature";
import Spot from "src/components/icons/Spot";
const plans = [
  {
    id: 0,
    name: "Feature",
    icon: () => Feature(),
    related: [
      { id: 0, name: "Short", icon: () => Feature() },
      { id: 1, name: "Long", icon: () => Spot() },
    ],
  },
  { id: 1, name: "Spot", icon: () => Spot(), related: [] },
];
const AddJournal = () => {
  const [selectPlan, setSelectPlan] = useState({
    name: "",
    icon: "",
    related: [],
    id: -1,
  });
  const [selectRelated, setSelectRelated] = useState({
    name: "",
    icon: "",
    id: -1,
  });
  const planClickHandler = (plan, type) => {
    switch (type) {
      case "plan": {
        setSelectPlan(plan);
        break;
      }
      case "related": {
        setSelectRelated(plan);
      }
    }
  };
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
          <div className="flex items-center w-full gap-x-2 ">
            <PairInputs name={"from"} />
            <PairInputs name={"to"} />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 mt-10 overflow-hidden">
          <h1 className="text-slate-800  font-bold"> Transaction type</h1>
          <div className="flex items-center gap-x-4 px-2 ">
            <SelectPlan
              plans={plans}
              selectPlan={selectPlan}
              onClick={planClickHandler}
              type={"plan"}
            />
          </div>
          <div className={`flex flex-col gap-y-2 ${selectPlan.related.length !== 0 ? 'translate-x-0' : '-translate-x-full'} transition-all ease-in-out duration-300`}>
            <div className="flex items-center gap-x-4 px-6">
              <SelectPlan
                plans={selectPlan.related}
                selectPlan={selectRelated}
                onClick={planClickHandler}
                type={"related"}
              />
            </div>
            <input type="range" className={`${selectPlan.related.length !== 0 ? 'block' : 'hidden'}`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddJournal;

const TradePlan = ({ plan, selectPlan, setSelectPlan }) => {
  return (
    <div className="flex flex-col gap-y-3 w-full">
      <button
        onClick={() => setSelectPlan(plan)}
        className={`py-4 rounded-lg ${
          selectPlan.id === plan.id
            ? "bg-violet-200 ring-2 ring-violet-400"
            : "bg-violet-100"
        } transition-all ease-in-out duration-200 delay-100 flex flex-col justify-between items-center flex-1`}
      >
        <span>{plan.icon()}</span>
        <h1 className="text-slate-800 pt-2 text-sm font-bold">{plan.name}</h1>
      </button>
      {selectPlan.related.length !== 0 && (
        <div className="flex items-center gap-x-2">Matin</div>
      )}
    </div>
  );
};
