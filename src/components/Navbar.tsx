"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname()
    return(
        <nav className="flex gap-6 text-sm text-zinc-500">
            {pathname !== '/' && <Link href="/" className="hover:text-zinc-100">Home</Link>}
            <Link href="/about" className="hover:text-zinc-100">About Me</Link>
            <Link href="/contact" className="hover:text-zinc-100">Contact</Link>
        </nav>
    );
}