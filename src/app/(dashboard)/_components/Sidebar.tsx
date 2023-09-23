import Logo from "./Logo";
import SidebarRoutes from "./Sidebar-routes";

const Sidebar = () => {
  return (
    <div className="border-r flex flex-col bg-white overflow-y-auto shadow-lg h-full">
        <div className="p-6">
            <Logo />
        </div>

        <div className="flex flex-col w-full">
            <SidebarRoutes />
        </div> 

    </div>
  );
};

export default Sidebar;
