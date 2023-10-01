import Logo from "./Logo";
import SidebarRoutes from "./Sidebar-routes";

const Sidebar = () => {
  return (
    <div className="border-r flex flex-col bg-white overflow-y-auto shadow-lg h-full dark:bg-black">
        <div className="px-8 py-3">
            <Logo />
        </div>

        <div className="flex flex-col w-full">
            <SidebarRoutes />
        </div> 

    </div>
  );
};

export default Sidebar;
