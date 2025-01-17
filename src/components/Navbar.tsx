"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Theory</HoveredLink>
            <HoveredLink href="/courses">Composition</HoveredLink>
            <HoveredLink href="/courses">Writing</HoveredLink>
            <HoveredLink href="/courses">Production</HoveredLink>
          </div>
        </MenuItem>
        <Link target="_blank" href={"https://www.udemy.com/course/fullstack-web-development-course-projects-base/?couponCode=24T6MT62024"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Buy Course"
          ></MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
