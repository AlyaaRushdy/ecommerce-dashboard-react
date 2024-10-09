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
{/* End of Header Component */}
import { Users, UserPlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


import { customers } from "@/test arrays/customers";
import { columns } from "@/data table columns/customersColumns";
import DataTable from "@/components/shared/DataTable";

function Customers() {
  return (
    <>
      <div className="p-5">
      <header className="sticky top-0 flex z-50 h-16 items-center gap-4 border-b bg-background px-4 md:px-6">

<nav className="hidden w-28 gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"></nav>
<NavSheet />
<HeaderBreadcrumb currentPage='Customers'/>


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

        <div className="flex flex-col md:flex-row gap-4 py-4">
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                All Customers
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">2500</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                New Customers
              </CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">20</div>
              <p className="text-xs text-muted-foreground">
                +150.1% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <DataTable
          data={customers}
          columns={columns}
          tableTitle={"All Customers"}
        />
      </div>
    </>
  );
}

export default Customers;
