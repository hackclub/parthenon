'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Guide({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#F4E3C1]">
      {/* Sidebar */}
      <nav
        className="min-w-xs max-w-xs p-4 bg-[#3B5435]/80"
      >
        <div className="p-6 flex items-center">
          <Image src="/logo.png" alt="" height={764} width={1080} className="w-3/5" />
        </div>
        <div className="space-y-4">
          <SidebarLink href={"/guide/invitation"} label={"🏺 Invitation"} />
          <SidebarLink href={"/guide/parents"} label={"ℹ️ For parents"} />
          <SidebarLink href={"/guide/travel"} label={"✈️ Travel Guide"} />
        </div>
      </nav>
      
      <main className="grow p-5">
        {children}
      </main>
    </div>
  );
};

function SidebarLink({ href, label }: { href: string; label: string }) {
  const router = usePathname();
  const isActive = router === href;

  return (
    <Link
      href={href}
      className={`block px-4 py-2 rounded mb-2 uppercase text-[#DBC491] hover:bg-[#DBC491]/20 ${
        isActive ? "bg-[#DBC491]/30 font-bold" : "bg-[#DBC491]/10"
      }`}
    >
      {label}
    </Link>
  )
}