import Link from "next/link";
import Logo from "../svg/svg.logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggleButton } from "./ThemeSwitch";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            {/*  */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="#home">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/*  */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="#tech">Tech</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/*  */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="#work">Work</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/*  */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="#projects">Projects</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/*  */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="#contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/*  */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggleButton variant="circle" start="top-right" blur />
      </div>
    </div>
  );
}
