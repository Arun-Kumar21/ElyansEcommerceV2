import { MobileSidebar } from "./mobile-sidebar"
import { NavbarRoutes } from "@/components/navbar-routes"

export const Navbar = () =>{
    return (
        <div className="p-4 borderb-b flex items-center bg-white shadow-sm h-full dark:bg-black">
            <MobileSidebar />
            
            <div className="flex items-center ml-auto">
                <NavbarRoutes />
            </div>
        </div>
    )
}