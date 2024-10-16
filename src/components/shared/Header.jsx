/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/shared/modeToggle";
import { CircleUser } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import NavSheet from "./NavSheet";
import HeaderBreadcrumb from "../HeaderBreadcrumb";
import DateRangePicker from "../DateRangePicker";

function Header({ currentPage, prevPage, prevPageLink }) {
  return (
    <header className="flex justify-between items-center pb-1 gap-2">
      <NavSheet />
      <HeaderBreadcrumb
        currentPage={currentPage}
        prevPage={prevPage}
        prevPageLink={prevPageLink}
      />

      <div className="flex items-center justify-end gap-2 md:ml-auto md:gap-3 lg:gap-4">
        <DateRangePicker />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-background dark:bg-neutral-900 border"
            >
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
}

export default Header;
