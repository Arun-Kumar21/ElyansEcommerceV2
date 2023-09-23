"use client";
import { Layout , Compass , ShoppingBag , BarChart} from "lucide-react"
import {SidebarItem} from "./Sidebar-item";
import { usePathname } from "next/navigation";

const userRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search",
    }
    
];

const adminRoutes = [
    {
        icon: ShoppingBag,
        label: "Products",
        href: "/admin/products",
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/admin/analytics",
    }
];

const SidebarRoutes = () => {

    const pathname = usePathname();

    const isAdminPage = pathname?.startsWith("/admin");
    const routes = isAdminPage ? adminRoutes : userRoutes;

    return (
        <div className="flex flex-col w-full">
        {routes.map((route) => (
            <SidebarItem
                key={route.href}
                icon={route.icon}
                label={route.label}
                href={route.href}
            />
        ) as React.ReactNode)}
        </div>
    )
};


export default SidebarRoutes;
