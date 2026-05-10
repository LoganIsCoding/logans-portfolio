"use client";
import Link from "next/link";

type Props = {
    sections: string[]
}
export default function ProjectSidebar ({ sections }: Props) {
    return(
        <nav className="flex gap-8 items-start">
            <Link href="/" className="text-zinc-500 hover:text-zinc-100 mt-[3px]">
                Home
            </Link>
            <div>
                {sections.map((section) => (
                    <a key={section} href={`#${section}`} className="block capitalize text-zinc-400 hover:text-zinc-100 py-1">
                        {section}
                    </a>
                ))}
            </div>
        </nav>
    );
}