import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function SheetNavItem({ link, text, children }) {
  const navLinkClassList =
    "flex items-center gap-4 text-muted-foreground hover:text-foreground navsheet";
  return (
    <>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <NavLink to={link} className={navLinkClassList}>
            {children} {text}
          </NavLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </>
  );
}

export default SheetNavItem;
