import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  House,
  Users,
  NotebookText,
  ShoppingBag,
  Grid2X2,
  TrendingUp,
  Gift,
  Settings,
} from "lucide-react";
import NavItem from "../NavItem";
import { ScrollArea } from "../ui/scroll-area";

function Sidebar() {
  return (
    <>
      <ScrollArea
        className="w-0 sm:w-24 md:w-28 bg-primary h-screen fixed left-0 top-0 pb-2"
        style={{ position: "fixed" }}
      >
        <NavigationMenu className="mx-auto pt-4 my-24" orientation="vertical">
          <NavigationMenuList className="flex-col gap-4 justify-center">
            <NavItem link={"/"} tooltipText={"Dashboard"}>
              <House />
            </NavItem>
            <NavItem link={"/orders"} tooltipText={"Orders"}>
              <NotebookText />
            </NavItem>
            <NavItem link={"/products"} tooltipText={"Products"}>
              <ShoppingBag />
            </NavItem>
            <NavItem link={"/categories"} tooltipText={"Categories"}>
              <Grid2X2 />
            </NavItem>
            <NavItem link={"/customers"} tooltipText={"Customers"}>
              <Users />
            </NavItem>
            <NavItem link={"/reports"} tooltipText={"Reports"}>
              <TrendingUp />
            </NavItem>
            <NavItem link={"/promotions"} tooltipText={"Promotions"}>
              <Gift />
            </NavItem>
            <NavItem link={"/settings"} tooltipText={"Settings"}>
              <Settings />
            </NavItem>
          </NavigationMenuList>
        </NavigationMenu>
      </ScrollArea>
    </>
  );
}

export default Sidebar;
