"use client";
import React, { useState } from "react";
import logo from "@/public/images/gymbff-logo-white.png";
import { CgMenu } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-20 text-white backdrop-blur-sm bg-transparent/5">
      <div className="flex px-6 py-2 sm:py-3 justify-between relative items-center">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" className="w-14 mr-2" />
          <span className="font-bold text-xl">GymBff</span>
        </Link>
        <nav className="absolute left-1/2 -translate-x-1/2 hidden sm:flex gap-6 font-medium text-sm">
          <Link href={"/about"}>About</Link>
          <Link href={"#subscribe"}>Subscribe</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
        <button className="text-3xl sm:hidden mr-3" onClick={toggleSidebar}>
          <CgMenu />
        </button>
      </div>
      <Sidebar open={sidebarOpen} toggleFunction={toggleSidebar} />
    </header>
  );
};

export default Header;
