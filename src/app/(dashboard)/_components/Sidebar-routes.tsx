"use client";
import { Layout , Compass , ShoppingBag , BarChart , ShoppingCart} from "lucide-react"
import {SidebarItem} from "./Sidebar-item";
import { usePathname } from "next/navigation";

const userRoutes = [
    {
        icon: Layout,
        label: "Home Page",
        href: "/",
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search",
    },
    {
        icon: ShoppingCart,
        label: "Cart Items",
        href: "/shoppingcart",
    }
];




const SidebarRoutes = () => {

    const pathname = usePathname();

    const routes = userRoutes;

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
