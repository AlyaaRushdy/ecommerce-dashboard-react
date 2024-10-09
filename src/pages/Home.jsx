"use client";
import * as React from "react";

{/* Header Components */}

import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/shared/modeToggle";
import {
  CircleUser,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import NavSheet from "@/components/shared/NavSheet";
import HeaderBreadcrumb from "@/components/HeaderBreadcrumb";
import DateRangePicker from "@/components/DateRangePicker";



{/*Other Components*/}
import FirstRowMainPage from "@/components/FirstRowMainPage";
import SalesStatistics from "@/components/SalesStatistics";
import RecentSales from "@/components/RecentSales";


import CustomerSatisfaction from "@/components/CustomerSatisfaction";




function Home() {

  return (
    <div className="flex min-h-screen w-full flex-col z-50">
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
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <FirstRowMainPage />
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-1 xl:grid-cols-2">
            <SalesStatistics />
            <RecentSales />
            <CustomerSatisfaction />
        </div>
      </main>
    </div>
  );
}
export default Home;
