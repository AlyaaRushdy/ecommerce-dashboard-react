import * as React from "react";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/shared/modeToggle";
import {
  Package2,
  Menu,
  Search,
  CircleUser,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavSheet from "./shared/NavSheet";
import HeaderBreadcrumb from "./HeaderBreadcrumb";
import DateRangePicker from "./DateRangePicker";


const Header = () => {
  return (
    <header className="sticky top-0 flex z-50 h-16 items-center gap-4 border-b bg-background px-4 md:px-6">

      <nav className="hidden w-28 gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"></nav>
      <NavSheet />
      <HeaderBreadcrumb currentPage='Dashboard'/>
      

      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <DateRangePicker />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
