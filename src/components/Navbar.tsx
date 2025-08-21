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
import { LayoutDashboard, LogOut, User, Menu, X } from "lucide-react";
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
          className="absolute top-0 left-0 z-[100] bg-upro-green text-black px-4 py-2 rounded-br-md focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <a
          href="#navigation"
          className="absolute top-0 left-32 z-[100] bg-upro-green text-black px-4 py-2 rounded-br-md focus:outline-none focus:ring-2 focus:ring-white"
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
        <div className="container mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">

          <div className="flex-1 flex justify-start items-center gap-4">
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
                  className="w-56 bg-black border-white/20 m-4"
                  align="end"
                  forceMount
                >
                  {
                    siteConfig.navItems.map((navItem) => (
                     <div key={navItem.label}>
                       <DropdownMenuLabel className="font-normal text-white">
                         <Link
                           href={navItem.href}
                           className={`text-sm lg:text-base ${
                             isActiveLink(navItem.href) ? "text-[#00FF3C]" : "text-white hover:text-[#00FF3C]"
                           }`}
                           role="menuitem"
                         >
                           {navItem.label}
                         </Link>
                       </DropdownMenuLabel>
                     </div>
                    ))
                  }
                </DropdownMenuContent>
              </DropdownMenu>

            </div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/uproLogo.svg"
                alt="U-Pro logo"
                width={300}
                height={117}
                className="h-8 lg:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Center - Desktop navigation links */}
          <div className="flex-1 hidden lg:flex justify-center gap-8">
            {
              siteConfig.navItems.map((navItem) => (
                <Link key={navItem.label}
                  href={navItem.href}
                  className={`text-sm lg:text-base ${
                    isActiveLink(navItem.href) ? "text-[#00FF3C]" : "text-white hover:text-[#00FF3C]"
                  }`}
                  role="menuitem"
                >
                  {navItem.label}
                </Link>
              ))
            }
          </div>

          {/* Right - Secondary actions */}
          <div className="flex-1 flex justify-end items-center gap-4 lg:gap-6">
            {/* Auth Section */}
            {loading ? (
              <div className="w-8 h-8 animate-pulse bg-white/20 rounded-full" />
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full hover:bg-white/10"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-black">
                        {getInitials(user.email || "U")}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 bg-black border-white/20"
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
                    className="cursor-pointer text-red-400 hover:text-red-300 hover:bg-white/10 focus:text-red-300 focus:bg-white/10"
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
                <span className="hidden lg:inline-block h-5 w-px bg-white/20" />

                <Link
                  href="/auth?mode=signin"
                  className={`text-sm lg:text-base ${
                    pathname.startsWith("/auth") ? "text-[#00FF3C]" : "text-white hover:text-[#00FF3C]"
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