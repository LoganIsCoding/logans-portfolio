"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard"
import type { Project } from "@/types/project"
type Props = {
    title: string;
    projects: Project[];
}

export default function CategoryAccordion({ title, projects }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                <h2 className="text-3xl font-bold tracking-tight mb-8">
                    {title}
                </h2>
            </button>
            
            <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
}