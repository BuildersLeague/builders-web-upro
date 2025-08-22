"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LayoutDashboard, LogOut, Menu, User } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const { user, signOut, loading } = useAuth();
  const pathname = usePathname();

  const getInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  const isActiveLink = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      {/* Skip Navigation Links */}
      <div className="sr-only focus-within:not-sr-only">
        <a
          href="#main-content"
          className="absolute top-0 left-0 rounded-br-md px-4 py-2 text-black z-[100] bg-upro-green focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <a
          href="#navigation"
          className="absolute top-0 left-32 rounded-br-md px-4 py-2 text-black z-[100] bg-upro-green focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to navigation
        </a>
      </div>

      <nav
        id="navigation"
        className="sticky top-0 z-50 w-full border-b bg-black"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-start gap-4">
            <div className="flex items-center justify-center lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-12 w-12 rounded-full hover:bg-white/10"
                  >
                    <Menu className="h-8 w-8 text-white" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="m-4 w-56 border-white/20 bg-black"
                  align="end"
                  forceMount
                >
                  {siteConfig.navItems.map(navItem => (
                    <DropdownMenuItem
                      asChild
                      key={navItem.label}
                      className={`px-4 py-2 text-sm lg:text-base ${
                        isActiveLink(navItem.href)
                          ? "text-[#00FF3C]"
                          : "text-white"
                      } hover:bg-white/10 focus:bg-white/10`}
                    >
                      <Link
                        href={navItem.href}
                        role="menuitem"
                        className={`block w-full ${
                          isActiveLink(navItem.href)
                            ? "text-[#00FF3C]"
                            : "text-white hover:text-[#00FF3C]"
                        }`}
                      >
                        {navItem.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/uproLogo.svg"
                alt="U-Pro logo"
                width={300}
                height={117}
                className="h-8 w-auto object-contain lg:h-12"
              />
            </Link>
          </div>

          {/* Center - Desktop navigation links */}
          <div className="hidden flex-1 justify-center gap-8 lg:flex">
            {siteConfig.navItems.map(navItem => (
              <Link
                key={navItem.label}
                href={navItem.href}
                className={`text-sm lg:text-base ${
                  isActiveLink(navItem.href)
                    ? "text-[#00FF3C]"
                    : "text-white hover:text-[#00FF3C]"
                }`}
                role="menuitem"
              >
                {navItem.label}
              </Link>
            ))}
          </div>

          {/* Right - Secondary actions */}
          <div className="flex flex-1 items-center justify-end gap-4 lg:gap-6">
            {/* Auth Section */}
            {loading ? (
              <div className="h-8 w-8 animate-pulse rounded-full bg-white/20" />
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full hover:bg-white/10"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-black bg-primary">
                        {getInitials(user.email || "U")}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 border-white/20 bg-black"
                  align="end"
                  forceMount
                >
                  <DropdownMenuLabel className="font-normal text-white">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Account
                      </p>
                      <p className="text-xs leading-none text-white/60">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/20" />
                  <DropdownMenuItem
                    asChild
                    className="text-white hover:bg-white/10 focus:bg-white/10"
                  >
                    <Link href="/dashboard" className="cursor-pointer">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    asChild
                    className="text-white hover:bg-white/10 focus:bg-white/10"
                  >
                    <Link href="/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/20" />
                  <DropdownMenuItem
                    className="cursor-pointer text-red-400 hover:bg-white/10 hover:text-red-300 focus:bg-white/10 focus:text-red-300"
                    onClick={signOut}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                {/* Vertical divider - hidden on mobile */}
                <span className="hidden h-5 w-px bg-white/20 lg:inline-block" />

                <Link
                  href="/auth?mode=signin"
                  className={`text-sm lg:text-base ${
                    pathname.startsWith("/auth")
                      ? "text-[#00FF3C]"
                      : "text-white hover:text-[#00FF3C]"
                  }`}
                >
                  Log in
                </Link>

                <Button
                  asChild
                  className=" px-4 lg:px-6 py-2 text-black hover:bg-[#00e636] text-sm lg:text-base"
                >
                  <Link href="/auth?mode=signup">Try it free</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
