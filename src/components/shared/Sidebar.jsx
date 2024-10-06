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
  CircleUser,
} from "lucide-react";
import NavItem from "../NavItem";
import ModeToggle from "./modeToggle";

function Sidebar() {
  return (
    <>
      <aside className="lg:w-28 w-0 bg-primary min-h-screen fixed left-0">
        <NavigationMenu className="mx-auto pt-4" orientation="vertical">
          <NavigationMenuList className="flex-col gap-4">
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
            <NavItem link={"/profile"} tooltipText={"Profile"}>
              <CircleUser />
            </NavItem>

            <ModeToggle className="mt-auto" />
          </NavigationMenuList>
        </NavigationMenu>
      </aside>
    </>
  );
}

export default Sidebar;
