import PairInputs from "./PairInputs";

const CoinsActions = ({ name, placeHolder, isSmall, onInput, inputValue }) => {
  return (
    <div className="flex-1 flex flex-col gap-2 relative">
      <span className="text-xs text-slate-800 font-bold">{name}</span>
      <PairInputs
        name={name}
        placeholder={placeHolder}
        isSmall={isSmall}
        onInput={onInput}
        inputValue={inputValue}
      />
      <span className="absolute right-2 bottom-0 text-violet-700 z-50  text-lg font-extrabold">
        $
      </span>
    </div>
  );
};

export default CoinsActions;
