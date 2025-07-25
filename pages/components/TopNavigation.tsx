"use client";
import React from 'react'
import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from 'next/link';

export default function TopNavigation({ className }: { className?: string }) {
      const [active, setActive] = useState<string | null>(null);
  return (
    <div  className={cn("top-10 inset-x-0 max-w-5xl z-50", className)}>
      <Menu setActive={setActive}>
         <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Web Development">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-design">Web Development</HoveredLink>
            <HoveredLink href="/ui-ux-design">UI/UX Design</HoveredLink>
            <HoveredLink href="/video-dev-and-integration">Video dev and integration</HoveredLink>
            <HoveredLink href="/mobile-development">Mobile development</HoveredLink>
          </div>
        </MenuItem>

         <MenuItem setActive={setActive} active={active} item="ECOMMERCE">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>

         <MenuItem setActive={setActive} active={active} item="Digital Marketing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="work">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Support">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>

         <MenuItem setActive={setActive} active={active} item=" About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/blog">Blog</HoveredLink>
            <HoveredLink href="/about-us">About Us</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact-us"}>
        <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
        </Link>
        </Menu>
    </div>
  )
}
