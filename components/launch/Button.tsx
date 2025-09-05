import { AnchorHTMLAttributes } from "react";

export default function Button({ children, className, href }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} className={`block bg-[#222] text-white p-1 ${className}`}>
      <span className="border border-[#DBC491]/50 py-2 px-4 md:py-1 md:px-3 block font-serif uppercase text-sm md:text-base">{children}</span>
    </a>
  )
}