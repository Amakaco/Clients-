import { Outlet } from "react-router-dom";

import Sider from "../Static/Sider";
const Layout = () => {
  return (
    <div className="border rounded-md m-4 h-[95vh] overflow-auto">
      <div className="fixed w-[300px] border-r h-[94.7vh]">
        <Sider />
      </div>
      <div className="w-full h-full flex justify-end">
        <div className="h-full w-[calc(100vw-350px)] bg-slate-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
