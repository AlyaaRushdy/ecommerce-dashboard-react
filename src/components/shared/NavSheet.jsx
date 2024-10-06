import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Gift,
  Grid2X2,
  House,
  NotebookText,
  Package2,
  PanelLeft,
  Settings,
  ShoppingBag,
  TrendingUp,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import SheetNavItem from "../SheetNavItem";
import { VisuallyHidden } from "radix-ui";

function NavSheet() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <SheetTitle asChild>
            <VisuallyHidden>Navigation Menu</VisuallyHidden>
          </SheetTitle>
          <NavigationMenu orientation="vertical">
            <NavigationMenuList className="grid gap-6 text-lg font-medium">
              <NavigationMenuItem>
                <NavLink
                  to={"/"}
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">SK Cosmatics</span>
                </NavLink>
              </NavigationMenuItem>

              <SheetNavItem link={"/"} text={"Dashboard"}>
                <House />
              </SheetNavItem>
              <SheetNavItem link={"/orders"} text={"Orders"}>
                <NotebookText />
              </SheetNavItem>
              <SheetNavItem link={"/products"} text={"Products"}>
                <ShoppingBag />
              </SheetNavItem>
              <SheetNavItem link={"/categories"} text={"Categories"}>
                <Grid2X2 />
              </SheetNavItem>
              <SheetNavItem link={"/customers"} text={"Customers"}>
                <Users />
              </SheetNavItem>
              <SheetNavItem link={"/reports"} text={"Reports"}>
                <TrendingUp />
              </SheetNavItem>
              <SheetNavItem link={"/promotions"} text={"Promotions"}>
                <Gift />
              </SheetNavItem>
              <SheetNavItem link={"/settings"} text={"Settings"}>
                <Settings />
              </SheetNavItem>
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default NavSheet;
