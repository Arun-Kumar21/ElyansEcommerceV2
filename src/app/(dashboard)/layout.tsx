import Sidebar from "./_components/Sidebar";
import { Navbar } from "./_components/navbar";

const DashboardLayout = (
    { children } : { children: React.ReactNode }
    ) => {
        return (
        <div className="h-full">
            <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full">
                <Navbar />
            </div>
            
            <div className="h-full">
                <div className="hidden md:flex h-full w-56 inset-y-0 flex-col fixed z-50">
                    <Sidebar />
                </div>
               
                <main className="md:pl-60 h-full pt-[100px]">
                    {children}
                </main>

            </div>
        </div>
        )
}

export default DashboardLayout;