import { HiArrowRight } from "react-icons/hi";

const FormBreadCrumbs = ({
  inputValue,
  selectPlan,
  selectRelated,
  rangeSlide,
}) => {
  console.log(selectPlan, selectRelated);
  if (selectPlan.id >= 0) {
    return (
      <div className="flex flex-col gap-2 px-4 text-xs font-semibold">
        <span className="text-slate-500">
          {inputValue.from}/{inputValue.to}
        </span>
        <div className="text-slate-500 flex items-center gap-x-2">
          <span className="">{selectPlan.name}</span>
          {selectRelated.id >= 0 && (
            <>
              <span>
                <HiArrowRight />
              </span>
              <span className="">{selectRelated.name}</span>
            </>
          )}
          {selectRelated.id >= 0 && selectPlan.name === "Feature" && (
            <>
              <span>
                <HiArrowRight />
              </span>
              <span>x{rangeSlide}</span>
            </>
          )}
        </div>
      </div>
    );
  }
};

export default FormBreadCrumbs;
