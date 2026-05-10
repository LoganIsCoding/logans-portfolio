import projects from "@/data/projects.json";
import ProjectSidebar from "@/components/ProjectSidebar";
import Link from 'next/link';

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
        <div className="flex min-h-screen px-8 py-20 max-w-5xl mx-auto gap-12">
            <Link href="/" className="text-zinc-500 text-sm mb-12 block hover:text-zinc-100">
                [LOGO]
            </Link>
            <ProjectSidebar sections={sections} />
            <div className="prose prose-invert flex-1">
                <Content />
            </div>
        </div>
    );
}
