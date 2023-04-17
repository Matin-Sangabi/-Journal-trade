import { HiPlus } from "react-icons/hi";
import SelectPlan from "../plans/selectPlan";
import CoinsActions from "./CoinsAction";
import FormHeader from "./formHeader";
import OrderDesc from "./orderDesc";

const Forms = ({
  tpSl,
  SelectOrder,
  onClick,
  SLState,
  TPState,
  onChange,
  onDecHandler,
}) => {
  return (
    <form>
      <div className="flex flex-col gap-2  mt-3">
        <FormHeader title={"Coins"} />
        <div className="flex flex-col w-full px-2 gap-y-2">
          <CoinsActions
            name={"coin price"}
            placeHolder={"45.22 $"}
            isSmall={true}
          />
        </div>
        <FormHeader title={"Margin"} />
        <div className="flex flex-col w-full px-2 gap-y-2">
          <CoinsActions
            name={"margin price"}
            placeHolder={"80.22 $"}
            isSmall={true}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2  mt-3 mb-20">
        <FormHeader title={"Tp or SL"} />
        <div className="flex flex-col gap-y-4 px-4 relative ">
          <div
            className={`flex   gap-x-4 pt-2 ${
              tpSl.isSelected ? "w-16 justify-start" : "w-full"
            } transition-all ease-in-out duration-300  `}
          >
            <SelectPlan
              selectPlan={tpSl}
              plans={SelectOrder}
              onClick={onClick}
              isSmall={tpSl.isSelected ? true : false}
            />
          </div>
          {tpSl.isSelected &&
            (tpSl.id === 1
              ? TPState.map((_, i) => {
                  return (
                    <OrderDesc
                      key={i}
                      index={i}
                      value={TPState}
                      onChange={onChange}
                      type={"Tp"}
                    />
                  );
                })
              : SLState.map((_, i) => {
                  return (
                    <OrderDesc
                      key={i}
                      index={i}
                      value={SLState}
                      onChange={onChange}
                      type={"SL"}
                    />
                  );
                }))}
          {tpSl.isSelected && tpSl.name === "Tp" && (
            <button
              onClick={onDecHandler}
              className="absolute right-1 -bottom-3 text-sm flex items-center justify-center w-5 h-5 bg-violet-200 rounded-full ring-1 ring-violet-400 text-violet-900"
            >
              <HiPlus />
            </button>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="py-[6px]  w-full rounded-xl bg-slate-800 text-center mx-auto  text-sm  text-slate-50"
      >
        Add Task
      </button>
    </form>
  );
};

export default Forms;
/**
 * <CoinsActions
            name={"margin"}
            placeHolder={"60.00 $"}
            isSmall={true}
          />
 */
