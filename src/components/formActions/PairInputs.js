const PairInputs = ({ name }) => {
  return (
    <>
      <input
        placeholder={name}
        className="p-2 flex-auto focus:shadow-lg  focus:bg-violet-200 focus:ring-1 focus:ring-violet-400 transition-all ease-in-out duration-300  w-full rounded-lg bg-violet-100 placeholder:text-gray-500 text-gray-700 font-semibold text-sm border-none outline-none text-center "
      />
    </>
  );
};

export default PairInputs;
