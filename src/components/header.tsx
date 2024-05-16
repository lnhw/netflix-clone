"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiSearch, HiOutlineBell } from "react-icons/hi";
import Menu from "./menu";
import { Text } from "@radix-ui/themes";
import Notifycation from "./notify";
// import Search from "./search";
import SearchBar from "./search";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const navLinks = [
    { name: "Browse", href: "/browse" },
    { name: "Tv series", href: "/tv" },
    { name: "Movies", href: "/movies" },
  ];
  // Sử dụng giá trị độ trong suốt (0 - 1) thay vì boolean
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      // Cập nhật độ trong suốt dựa trên vị trí cuộn và chiều cao của header
      const newOpacity = Math.min(1, window.scrollY / headerHeight);
      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }} // Cập nhật độ trong suốt động
      className="fixed top-0 z-10 min-h-[50px] w-full px-2 md:px-[1.875rem] lg:w-full lg:px-[60px] lg:min-h-[68px] shadow-sm transition-colors duration-300"
      data-testid="header"
    >
      {/* nav */}
      <nav
        role="navigation"
        className="h-full flex items-center justify-between lg:flex lg:items-center lg:w-full lg:min-h-[68px]"
        aria-label="Main"
      >
        <div className="flex flex-col md:flex-row lg:flex-row">
          <Image
            src={"/image/Netflix_Logo_PMS.png"}
            alt="Logo"
            width={84}
            height={24}
            quality={100}
          />
          <ul className="list-none flex items-center justify-between">
            {navLinks.map((link) => {
              return (
                <li key={link.href}>
                  <Link
                    className=" font-medium text-xs border border-solid border-black rounded-full px-3 py-1 md:text-sm md:border-none md:border-0 md:border-white"
                    href={link.href}
                  >
                    <Text as="span" className="text-white font-medium">
                      {link.name}
                    </Text>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-12">
          <div data-testid="search-bar">
            <React.Suspense>
              <SearchBar />
            </React.Suspense>
          </div>
          <div className="hidden md:block lg:block" data-testid="notification">
            <Notifycation />
          </div>
          <div className="hidden md:block lg:block" data-testid="menu">
            <Menu />
          </div>
        </div>
      </nav>
    </header>
  );
}
