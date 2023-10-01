import { ThemeProvider } from "@/components/ui/theme-provider";
import Sidebar from "./_components/Sidebar";
import { Navbar } from "./_components/navbar";
import Footer from "./_components/footer";
import { Toaster } from "@/components/ui/toaster";

import ProgressBar from "./_components/ProgressBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div>
        <ProgressBar />
      </div>

      <div className="h-full">
        <div className="h-[80px] fixed inset-y-0 w-full z-10">
          <Navbar />
        </div>

        <div>
          <Toaster />
        </div>

        <div className="h-full">
          <div className="hidden md:flex h-full w-36 xl:w-56 inset-y-0 flex-col fixed z-50">
            <Sidebar />
          </div>

          <main className="md:pl-36 xl:pl-56 h-full pt-[100px]">
            {children}
          </main>
        </div>

        <div className="md:pl-36 xl:pl-56 h-full inset-y-0 w-full">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashboardLayout;
