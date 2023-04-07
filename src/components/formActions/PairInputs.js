const PairInputs = ({ name }) => {
  return (
    <>
      <input
        placeholder={name}
        className="p-2 focus:shadow-lg focus:ring-1 focus:ring-violet-300 flex-1 rounded-xl bg-violet-100 placeholder:text-gray-500 text-gray-700 font-semibold text-sm border-none outline-none text-center "
      />
    </>
  );
};

export default PairInputs;
