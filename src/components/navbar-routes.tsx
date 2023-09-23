"use client";

import { usePathname } from "next/navigation";

import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isAdminPage = pathname?.startsWith("/admin");
  const isDashboardPage = pathname?.startsWith("/user");

  return (
    <div className="flex gap-x-2 ml-auto ">
      {isAdminPage || isDashboardPage ? (
        <Link href="/">
          <Button>
            <LogOut size={24} className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/admin/products">
          <Button size="sm" variant="ghost">
            Admin
          </Button>
        </Link>
      )}

      {/* <UserButton /> */}
    </div>
  );
};
