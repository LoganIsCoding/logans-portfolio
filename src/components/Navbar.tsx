"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex gap-6 text-sm text-zinc-500 mb-12">
            <Link href="/" className="hover:text-zinc-100">Home</Link>
            <Link href="/about" className="hover:text-zinc-100">About Me</Link>
            <Link href="/contact" className="hover:text-zinc-100">Contact</Link>
        </nav>
    );
}
