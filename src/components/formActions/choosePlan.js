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
const ChoosePlan = ({
  selectPlan,
  onClick,
  rangeSlide,
  setRangeSlide,
  selectRelated,
}) => {
  return (
    <div className="flex flex-col gap-y-4 mt-10 overflow-x-hidden">
      <h1 className="text-slate-800  font-bold"> Transaction type</h1>
      <div className="flex items-center gap-x-4 px-2 ">
        <SelectPlan
          plans={plans}
          selectPlan={selectPlan}
          onClick={onClick}
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
            onClick={onClick}
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
