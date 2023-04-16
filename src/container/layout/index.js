import { useRouter } from "next/router";
import Header from "./header";
import BottomNav from "./navigation/bottomNav";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      {(router.pathname === "/" || router.pathname === "/wallet") && <Header />}
      <div className="max-w-screen-xl px-4 mt-4 overflow-hidden mb-40">{children}</div>
      <BottomNav />
    </>
  );
};

export default Layout;
