import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

export default function ProjectCard({ slug, name, description, thumbnail }: Project) {
    return (
        <div className="flex items-center gap-4 p-4">
            <Link href={`/projects/${slug}`} className="flex items-center gap-4">
                {thumbnail ? (
                    <Image alt={name} src={thumbnail} width={80} height={80} className="rounded object-cover w-20 h-20" />
                ) : (
                    <div className="w-20 h-20 bg-zinc-700 rounded" />
                )}
                <div className="flex flex-col">
                    <span className="font-semibold text-zinc-100">{name}</span>
                    <span className="text-sm text-zinc-400">{description}</span>
                </div>
            </Link>
        </div>
        
    );
}