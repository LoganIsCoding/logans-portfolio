"use client";
import { useState } from "react";
type Props = {
    sections: string[]
}
export default function ProjectSidebar ({ sections }: Props) {

    return(
        <div>
            <nav>
                {sections.map((section) => (
                    <a key={section} href={`#${section}`} className="block capitalize text-zinc-400 hover:text-zinc-100 py-1">
                        {section}
                    </a>
                ))}
            </nav>
        </div>
    );
}