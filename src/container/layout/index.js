import { useRouter } from "next/router";
import Header from "./header";
import BottomNav from "./navigation/bottomNav";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      {(router.pathname === "/" || router.pathname === "/wallet") && <Header />}
      <div className="max-w-screen-xl px-4 mt-4 overflow-hidden mb-40 md:hidden ">
        {children}
      </div>
      <div className="w-full flex  items-center mt-8 justify-center">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-slate-800">App Development</h1>
          <h1 className="text-slate-500 text-2xl font-semibold">
            App building ...{" "}
          </h1>
        </div>
        <img src="/images/icons/app-building.png" />
      </div>
      <BottomNav />
    </>
  );
};

export default Layout;
