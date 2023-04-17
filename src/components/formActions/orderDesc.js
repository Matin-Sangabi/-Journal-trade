const OrderDesc = ({ value, onChange, index, type }) => {
    return (
      <div className="flex items-center gap-x-2  ">
        <input
          type="text"
          value={value[index].order}
          name={`order`}
          id={index}
          className="border-none w-24 font-bold outline-none bg-violet-100 text-ceneter placeholder:text-gray-400 text-gray-700 rounded-xl focus:ring-1 focus:ring-violet-400 focus:bg-violet-200 transition-all ease-in-out duration-300 px-2 py-[3px] text-sm text-center delay-100"
          placeholder="38.00 $"
          onChange={(e) => onChange(e, type)}
        />
        <input
          type="text"
          value={value[index].desc}
          name={`desc`}
          id={index}
          className="border-none font-bold outline-none bg-violet-100 text-ceneter placeholder:text-gray-400 text-gray-700 rounded-xl focus:ring-1 focus:ring-violet-400 focus:bg-violet-200 transition-all ease-in-out duration-300 px-2 py-[3px] text-sm delay-100 flex-1 "
          placeholder="why ? "
          onChange={(e) => onChange(e, type)}
        />
      </div>
    );
  };

  export default OrderDesc;