import Header from "./header";
import BottomNav from "./navigation/bottomNav";

const Layout = ({children }) => {
    return ( <>
        <Header/>
        {children}
        <BottomNav/>
    </> );
}
 
export default Layout;