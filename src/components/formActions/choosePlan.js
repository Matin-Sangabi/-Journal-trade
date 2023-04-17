import { useState } from "react";
import Feature from "src/components/icons/Feature";
import Spot from "src/components/icons/Spot";
import SelectPlan from "../plans/selectPlan";

import InputSlider from "./inputSlide";
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
const ChoosePlan = () => {
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
  const [rangeSlide, setRangeSlide] = useState(0);
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
    <div className="flex flex-col gap-y-4 mt-10 overflow-x-hidden">
      <h1 className="text-slate-800  font-bold"> Transaction type</h1>
      <div className="flex items-center gap-x-4 px-2 ">
        <SelectPlan
          plans={plans}
          selectPlan={selectPlan}
          onClick={planClickHandler}
          type={"plan"}
        />
      </div>
      <div
        className={`flex flex-col gap-y-2 px-4 ${
          selectPlan.related.length !== 0
            ? "translate-x-0"
            : "-translate-x-full"
        } transition-all ease-in-out duration-300`}
      >
        <div className="flex items-center gap-x-4 px-2">
          <SelectPlan
            plans={selectPlan.related}
            selectPlan={selectRelated}
            onClick={planClickHandler}
            type={"related"}
          />
        </div>
        <div className="mt-8 px-4">
          <InputSlider rangeSlide={rangeSlide} setRangeSlide={setRangeSlide} />
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
