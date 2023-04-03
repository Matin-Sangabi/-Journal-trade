import {
  HiOutlineBell,
  HiBars3,
  HiMagnifyingGlass,
  HiChevronDown,
} from "react-icons/hi2";
import { BsArrowRightShort } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
const Header = () => {
  const [openHeader, setOpenMenu] = useState(true);
  let touchCounter = 0;
  const touchHandler = (e) => {
    touchCounter += 1;
    if (touchCounter >= 50) {
      setOpenMenu(true);
      return;
    }
  };
  return (
    <header
      className={`${
        openHeader ? "p-2" : "p-4"
      } transition-all ease-in-out duration-300 rounded-b-3xl relative shadow-md shadow-slate-800  bg-slate-800 w-full flex flex-col gap-y-4`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <span
            className={`${
              openHeader ? "w-10 h-10" : "w-14 h-14"
            } rounded-full flex items-center justify-center bg-slate-600 transition-all ease-in-out duration-300`}
          ></span>
          <div className={`${openHeader ? "" : "flex flex-col gap-0"}`}>
            <span
              className={`${
                openHeader ? "text-xs" : "text-sm"
              } transition-all ease-in-out duration-300 font-semibold text-slate-400`}
            >
              Hi there ,
            </span>
            <div className="flex items-center gap-x-1 ">
              <h1
                className={`${
                  openHeader ? "text-base" : "text-xl"
                } transition-all ease-in-out duration-300 font-bold text-white`}
              >
                Matin !{" "}
              </h1>
              <img
                src="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png"
                srcSet="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png 2x"
                alt="Waving Hand on Microsoft Teams 1.0"
                width={openHeader ? "20" : "26"}
                height={openHeader ? "20 " : "26"}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <button className="flex relative stroke-2 w-8 h-8 items-center justify-center p-1 rounded-full text-slate-100  bg-slate-700">
            <HiOutlineBell className="text-2xl" />
            <span className="absolute w-2 h-2 rounded-full bg-violet-700 right-2 top-2"></span>
          </button>
          <button className="flex stroke-2 w-8 h-8 items-center justify-center rounded-full text-slate-100  bg-slate-700">
            <HiBars3 className="text-xl" />
          </button>
        </div>
      </div>
      <div
        className={`${
          openHeader ? "hidden" : "block mt-2 px-1"
        } transition-all ease-in-out duration-300 `}
      >
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
      <span
        className={`w-20 h-[2px] bg-slate-100 absolute bottom-0 left-[40%] ${
          openHeader ? "hidden" : ""
        }`}
        onTouchMove={touchHandler}
        onTouchStart={() => (touchCounter = 0)}
      ></span>
      <span
        onClick={() => setOpenMenu(false)}
        className={`${
          openHeader
            ? "-bottom-2 p-1 rounded-full text-sm left-[45%] bg-slate-600 flex items-center justify-center absolute  text-slate-100"
            : "hidden"
        } transition-all ease-in-out duration-300`}
      >
        <HiChevronDown />
      </span>
    </header>
  );
};

export default Header;
