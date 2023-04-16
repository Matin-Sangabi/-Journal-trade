const SelectPlan = ({
  selectPlan,
  onClick,
  plans,
  type = false,
  isSmall = false,
}) => {
  return plans.map((plan, i) => {
    return (
      <button
        key={i}
        onClick={(e) => onClick(plan, type ? type : e)}
        className={` ${isSmall ? "p-1" : "py-4"}  rounded-lg ${
          selectPlan.id === plan.id
            ? "bg-violet-200 ring-2 ring-violet-400"
            : "bg-violet-100"
        } transition-all ease-in-out duration-200 delay-100 flex flex-col justify-between items-center flex-1`}
      >
        <span className={`${isSmall ? "hidden" : "block"}`}>{plan.icon()}</span>
        <h1 className={`text-slate-800 ${isSmall ? 'text-xs' : 'pt-2 text-sm'} font-bold`}>{plan.name}</h1>
      </button>
    );
  });
};

export default SelectPlan;
