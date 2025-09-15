"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Guide({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-screen bg-[#F4E3C1]">
      {/* Mobile menu button */}
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded bg-[#3B5435]/80 text-[#DBC491]"
      >
        ☰
      </button>

      {/* Overlay when menu is open on mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 p-4 bg-[#3B5435]/95 flex flex-col min-h-screen h-full transform transition-transform duration-200 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-6 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt=""
            height={764}
            width={1080}
            className="w-3/5"
          />
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="md:hidden text-[#DBC491]"
          >
            ✕
          </button>
        </div>
        <div className="space-y-4 flex-1 px-1">
          <SidebarLink href={"/guide/invitation"} label={"🏺 Invitation"} />
          <SidebarLink href={"/guide/parents"} label={"ℹ️ For parents"} />
          <SidebarLink href={"/guide/travel"} label={"✈️ Travel Guide"} />
          <SidebarLink href={"/guide/packing"} label={"🧳 Packing List"} />
          <SidebarLink
            href={"/guide/participants"}
            label={"🚧 Under Construction"}
          />
        </div>
        <div className="mt-auto pt-4">
          <Link href="/">
            <button className="w-full px-4 py-2 rounded bg-[#DBC491] text-[#3B5435] font-bold uppercase hover:bg-[#F4E3C1] transition">
              Back to Home
            </button>
          </Link>
        </div>
      </nav>

      <main className="grow p-5 md:ml-64">{children}</main>
    </div>
  );
}

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
  );
}
