import { Outlet } from "react-router-dom";
import { NavMenu } from "../components/NavMenu";

function Layout() {

    return (
        <div style={{ height: "100vh", width: "100vh" }}>
            <NavMenu />
            <Outlet />
        </div>
  );
}

export default Layout;