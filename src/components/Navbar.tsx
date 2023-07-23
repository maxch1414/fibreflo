"use client";

import { Disclosure } from "@headlessui/react";
import Search from "./Search";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  const pathname = usePathname();
  const navigation = [
    {
      name: "About",
      href: "/about",
      current: pathname === "/about",
    },
    {
      name: "Contact",
      href: "/contact",
      current: pathname === "/contact",
    },
    {
      name: "Services",
      href: "/services",
      current: pathname === "/services",
    },
    {
      name: "News",
      href: "/news",
      current: pathname.startsWith("/news"),
    },
  ];
  return (
    <Disclosure as="nav" className="bg-background">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Icons.menuClose
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <Icons.menuOpen
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link
                  href="/"
                  className="flex flex-shrink-0 items-center font-bold text-2xl"
                >
                  Fibre Flo
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={cn(
                          buttonVariants({ variant: "ghost" }),
                          item.current ? "bg-slate-100 dark:bg-slate-800" : ""
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Search />
                <ThemeToggle />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={cn(buttonVariants({ variant: "ghost" }), "flex")}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
