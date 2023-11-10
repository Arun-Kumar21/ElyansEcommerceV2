"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { User2Icon, UserCircle, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/app/(dashboard)/_components/dark-mode";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { useToast } from "@/components/ui/use-toast";

const menuItems = [
  {
    name: "Profile",
    path: "/user/profile",
    icon: UserCircle,
  },
  {
    name: "Settings",
    path: "/user/settings",
    icon: Settings,
  },
];

const productsRoutes = [
  {
    name: "Shoes",
    path: "/Products/shoes",
  },
  {
    name: "T-Shirts",
    path: "/Products/tshirts",
  },
  {
    name: "Pants",
    path: "/Products/pants",
  },
  {
    name: "Mugs",
    path: "/Products/mugs",
  },
  {
    name: "Hoodies",
    path: "/Products/hoodies",
  },
];

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const activePage = pathname?.split("/")[2];

  const { toast } = useToast();

  const [user, setUser] = useState({ value: "" });
  const [key, setKey] = useState(0);
  const [name, setName] = useState("");

  const [userMenu, setuserMenu] = useState(false);

  const menuLinks = menuItems;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name: any = localStorage.getItem("name");
    if (token) {
      setUser({ value: token });
      setKey(Math.random());
      setName(name);
    }
  }, []);

  const toggleUserMenu = () => {
    setuserMenu(!userMenu);
  };

  const logout = () => {
    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      setUser({ value: "" });
      setKey(Math.random());
      setName("");
      toast({
        title: "Logged Out",
        description: "You have been logged out successfully",
      });
    }, 500);
  };

  return (
    <div className="flex gap-x-2 ml-auto items-center">
      <div className="hidden md:flex xl:mr-52 md:mr-1 lg:mr-32 items-center gap-x-4">
        {productsRoutes.map((route) => {
          return (
            <Link
              key={route.path}
              className={cn(
                "px-2 text-sm  transition-all hover:text-slate-600 hover:bg-slate-300/20 py-1 rounded-md dark:hover:bg-blue-500 dark:hover:text-white",
                activePage === route.name.toLowerCase() &&
                  "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
              )}
              href={route.path}
            >
              {route.name}
            </Link>
          );
        })}
      </div>

      <div>
        {user.value === "" ? (
          <Link href="/signup">
            <Button size="sm" variant="ghost">
              <User2Icon size={24} className={cn("h-4 w-4 mr-2")} />
              SignIn
            </Button>
          </Link>
        ) : (
          <div>
            {
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button size="sm" variant="ghost" onClick={toggleUserMenu}>
                    <UserCircle size={24} className={cn("h-4 w-4 mr-2")} />
                    {name}
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {menuItems.map((link) => {
                    return (
                      <DropdownMenuItem key={link.path}>
                        <Link href={link.path}>
                          <div className="flex items-center gap-x-4">
                            <link.icon
                              size={24}
                              className={cn("h-4 w-4 mr-2")}
                            />
                            {link.name}
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                  <DropdownMenuItem>
                    <div className="flex items-center gap-x-4" onClick={logout}>
                      <LogOut size={24} className={cn("h-4 w-4 mr-2")} />
                      Log Out
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            }
          </div>
        )}
      </div>

      <ModeToggle />
    </div>
  );
};
