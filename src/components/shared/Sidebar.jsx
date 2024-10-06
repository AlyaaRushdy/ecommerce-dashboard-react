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

function Sidebar() {
  return (
    <>
      <aside className="w-0 sm:w-24 md:w-28 bg-primary h-screen fixed left-0">
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
          </NavigationMenuList>
        </NavigationMenu>
      </aside>
    </>
  );
}

export default Sidebar;
