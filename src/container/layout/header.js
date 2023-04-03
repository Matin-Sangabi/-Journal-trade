import { HiOutlineBell, HiBars3, HiMagnifyingGlass } from "react-icons/hi2";
import { BsArrowRightShort } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <header className="p-4 rounded-b-3xl shadow-md shadow-slate-800  bg-slate-800 w-full flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <span className="w-14 h-14 rounded-full flex items-center justify-center bg-slate-600"></span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-400">
              Hi there ,
            </span>
            <div className="flex items-center gap-x-1 ">
              <h1 className="text-xl font-bold text-white">Matin ! </h1>
              <img
                src="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png"
                srcSet="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png 2x"
                alt="Waving Hand on Microsoft Teams 1.0"
                width="26"
                height="26"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <button className="flex relative stroke-2 w-9 h-9 items-center justify-center p-1 rounded-full text-slate-100  bg-slate-700">
            <HiOutlineBell className="text-2xl" />
            <span className="absolute w-2 h-2 rounded-full bg-violet-700 right-2 top-2"></span>
          </button>
          <button className="flex stroke-2 w-9 h-9 items-center justify-center rounded-full text-slate-100  bg-slate-700">
            <HiBars3 className="text-xl" />
          </button>
        </div>
      </div>
      <div className="mt-2 px-1">
        <div className="p-[6px] flex text-slate-300  items-center gap-x-4 justify-between rounded-lg bg-slate-700">
          <CiSearch className="text-xl stroke-1" />
          <input
            type="text"
            placeholder="search ..."
            className="flex-1 bg-transparent outline-none border-none font-semibold text-slate-300 placeholder:text-slate-300 "
          />
          <button className="p-1 group transition-all ease-in-out duration-300 rounded-lg   bg-slate-500 flex items-center rounded-lg` justify-center text-slate-200">
            <span className="translate-x-0 text-xl stroke-2 group-hover:translate-x-1 transition-all ease-in-out duration-300">
              <BsArrowRightShort />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
