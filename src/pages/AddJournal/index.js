import { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import PairInputs from "src/components/formActions/PairInputs";
import ChoosePlan from "src/components/formActions/choosePlan";
import GenerateTask from "src/components/formActions/generateTask";
import HeaderSection from "src/components/headerSection/headerSection";
import SlIcon from "src/components/icons/sl";
import TPIcon from "src/components/icons/tp";
const SelectOrder = [
  {
    id: 1,
    name: "Tp",
    icon: () => TPIcon(),
    child: [{ order: "", desc: "" }],
  },
  {
    id: 2,
    name: "SL",
    icon: () => SlIcon(),
    child: [{ order: "", desc: "" }],
  },
];
const AddJournal = () => {
  const [openGenerateTask, setOpenGenerateTask] = useState(false);
  const [inputValue, setInputValue] = useState({
    from: "",
    to: "",
    coinPrice: "",
    marginPrice: "",
  });
  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const [tpSl, setTpSl] = useState({ id: 0 });
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
  const [TPState, setTpState] = useState([{ order: "", desc: "" }]);
  const [SLState, setSLState] = useState([{ order: "", desc: "" }]);
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
  const orderClickHandler = (plan, e) => {
    e.preventDefault();
    setTpSl({ ...plan, isSelected: true });
  };

  const profitInputHandler = (e, type) => {
    const { id, value, name } = e.target;
    let profit = [];
    switch (type) {
      case "SL": {
        profit = [...SLState];
        name === "order"
          ? (profit[id].order = value)
          : (profit[id].desc = value);
        setSLState(profit);
        break;
      }
      default: {
        profit = [...TPState];
        name === "order"
          ? (profit[id].order = value)
          : (profit[id].desc = value);
        setTpState(profit);
        break;
      }
    }
  };
  const AddDescHandler = (e, type) => {
    e.preventDefault();
    const element = [...TPState];
    element.push({ order: "", desc: "" });
    setTpState(element);
  };
  return (
    <>
      <div
        className={`w-full h-full  bg-violet-50 z-50 block absolute left-0 top-0  ${
          openGenerateTask ? "translate-y-0 block" : "-translate-y-[120%] "
        } transition-all ease-out delay-500 duration-300`}
      >
        <GenerateTask
          SelectOrder={SelectOrder}
          tpSl={tpSl}
          onClick={orderClickHandler}
          onChange={profitInputHandler}
          onDecHandler={AddDescHandler}
          setOpenGenerateTask={setOpenGenerateTask}
          TPState={TPState}
          SLState={SLState}
          onInput={changeInputHandler}
          inputValue={inputValue}
          selectPlan={selectPlan}
          selectRelated={selectRelated}
          rangeSlide={rangeSlide}
        />
      </div>
      <div
        className={`${
          openGenerateTask
            ? "-translate-y-[120%] h-screen "
            : "translate-y-0 h-full "
        } max-w-screen-sm px-4 mx-auto overflow-hidden transition-all ease-in-out delay-500 duration-300`}
      >
        <HeaderSection
          imgURI={"7532727.png"}
          desc={"Quickly generate task tailored to your needs-at zero cast"}
          title={"Follow your passion"}
        />
        <div className="flex flex-col gap-y-2 mt-4 ">
          <h1 className="text-slate-800  font-bold">Pair</h1>
          <div className="flex items-center  gap-x-2 ">
            <PairInputs
              placeholder={"BTC"}
              name={"from"}
              onInput={changeInputHandler}
              inputValue={inputValue.from}
            />
            <PairInputs
              placeholder={"USD"}
              name={"to"}
              onInput={changeInputHandler}
              inputValue={inputValue.to}
            />
          </div>
        </div>
        <ChoosePlan
          onClick={planClickHandler}
          rangeSlide={rangeSlide}
          setRangeSlide={setRangeSlide}
          selectPlan={selectPlan}
          selectRelated={selectRelated}
        />
        <div className="flex items-center w-full my-4 px-4 ">
          <button
            onClick={() => {
              setOpenGenerateTask(true);
            }}
            className="p-2 w-full  bg-slate-800 text-sm hover:shadow-lg hover:shadow-slate-200   rounded-lg flex items-center justify-center gap-x-2 group text-white transition-all ease-in-out duration-300"
          >
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
