"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";

import Logo from "../svg/svg.logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggleButton } from "./ThemeSwitch";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ContactModal from "../contact/ContactModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/", "");
      lenis?.scrollTo(targetId);
    }
    setIsOpen(false);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { href: "/#home", label: "Home" },
    { href: "/#tech", label: "Tech" },
    { href: "/#work", label: "Work" },
    { href: "/#projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <Link href="/" className="z-50">
            <Logo width={45} height={45} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.href === "/contact" ? (
                      <ContactModal>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "cursor-pointer",
                          )}
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </ContactModal>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={navigationMenuTriggerStyle()}
                          onClick={(e) => handleScroll(e, item.href)}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side (Theme & Mobile Toggle) */}
          <div className="flex items-center gap-4">
            <ThemeToggleButton variant="circle" start="top-right" blur />

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden z-50 relative"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[70] h-full w-3/4 max-w-sm bg-background border-l shadow-2xl transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-lg font-bold">Menu</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Sidebar Links */}
          <div className="flex flex-col p-4 gap-4 overflow-y-auto">
            {navItems.map((item) =>
              item.href === "/contact" ? (
                <ContactModal key={item.label}>
                  <div
                    className="hover:bg-accent hover:text-accent-foreground w-full cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </div>
                </ContactModal>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:bg-accent hover:text-accent-foreground rounded-md px-4 py-2 text-lg font-medium transition-colors"
                  onClick={(e) => handleScroll(e, item.href)}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
