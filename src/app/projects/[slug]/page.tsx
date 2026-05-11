import projects from "@/data/projects.json";
import ProjectSidebar from "@/components/ProjectSidebar";
import Comments from "@/components/Comments";
import Link from "next/link";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find(p => p.slug === slug);
    if (!project) return <div>Project not found.</div>;

    let Content: React.ComponentType
    let sections: string[] = []
    try {
        const mod = await import(`@/content/projects/${slug}.mdx`);
        Content = mod.default;
        sections = mod.sections ?? [];
    } catch {
        return <div>Content not found.</div>
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen py-20 gap-12 items-start max-w-6xl w-full">
            <Link href="/" className="md:hidden text-zinc-500 hover:text-zinc-100 text-sm">
                Home
            </Link>
            <div className="hidden md:block sticky top-8">
                <ProjectSidebar sections={sections} />
            </div>
            <div className="prose prose-invert flex-1">
                <Content />
                <Comments />
            </div>
        </div>
    );
}
