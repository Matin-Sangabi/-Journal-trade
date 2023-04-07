import { HiOutlineHome } from "react-icons/hi";
import { SlWallet } from "react-icons/sl";
import { RiBarChartGroupedFill, RiAddFill, RiUser6Line } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";
const navigation = [
  { name: "home", icon: () => HiOutlineHome(), path: "/" },
  { name: "wallet", icon: () => SlWallet(), path: "/wallet" },
  { name: "plus", icon: () => RiAddFill(), path: "/AddJournal" },
  { name: "trade", icon: () => RiBarChartGroupedFill(), path: "/trade" },
  { name: "users", icon: () => RiUser6Line(), path: "/profile" },
];
const BottomNav = () => {
  const router = useRouter();
  return (
    <nav className="block p-3 fixed md:hidden bottom-0 left-0 z-50 w-full">
      <div className="flex items-center  justify-between bg-gray-50 shadow-xl py-3 px-2 rounded-3xl">
        {navigation.map((navigate, i) => {
          if (i === 2) {
            return (
              <Link
                href={navigate.path}
                className="w-12 h-12 relative bottom-7 flex items-center justify-center text-3xl  rounded-full bg-violet-700 text-slate-100 hover:rotate-180 transition-all ease-in-out duration-300"
                key={i}
              >
                {navigate.icon()}
              </Link>
            );
          }
          return (
            <Link
              key={i}
              className="p-2 flex flex-col items-center  text-3xl text-slate-800 stroke-2"
              href={navigate.path}
            >
              <span>
                <navigate.icon />
              </span>
              <span
                className={`${
                  router.pathname === navigate.path
                    ? "w-3 h-3 rounded-full bg-violet-700 absolute bottom-4"
                    : "w-0 h-0 bg-white"
                } transition-all ease-in-out duration-300`}
              ></span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
