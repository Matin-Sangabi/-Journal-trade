import TradeDesc from "./tradeDesc";

const CurrentTrade = () => {
  return (
    <div className="flex flex-col gap-y-2 mt-10">
      <TradeDesc title={"Current"} path={"/"} />
      <div className="flex flex-col">
        <div className="flex items-center gap-x-2 mt-2">
          <span className="w-4 h-4 rounded-full bg-gray-700"></span>
          <span className="text-gray-700 text-xs font-bold">8am</span>
        </div>
        {[1, 2].map((_, i) => {
          return (
            <div key={i} className="flex flex-col gap-y-2 pt-4">
              <div className="p-2 bg-violet-200 flex items-center justify-between rounded-lg">
                <div className="flex items-center gap-x-2">
                  <span className="w-8 h-8 bg-violet-300 rounded-full flex items-center justify-center"></span>
                  <span className="text-gray-700 text-sm font-bold">
                    BTC to USD
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="text-slate-700 text-sm font-bold">
                    PNL :{" "}
                  </span>
                  <span className="text-slate-600 text-xs font-semibold">
                    1000$
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex items-center gap-x-2 pt-4">
          <span className="w-4 h-4 rounded-full ring-1 ring-gray-700"></span>
          <span className="text-gray-700 text-xs font-bold">9am</span>
        </div>
        {[1].map((_, i) => {
          return (
            <div key={i} className="flex flex-col gap-y-2 pt-2">
              <div className="p-2 bg-violet-100 flex items-center justify-between rounded-lg">
                <div className="flex items-center gap-x-2">
                  <span className="w-8 h-8 bg-violet-300 rounded-full flex items-center justify-center"></span>
                  <span className="text-gray-500 text-sm font-bold">
                    BTC to USD
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="text-slate-500 text-sm font-bold">
                    PNL :{" "}
                  </span>
                  <span className="text-slate-400 text-xs font-semibold">
                    1000$
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentTrade;
