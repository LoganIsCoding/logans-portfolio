import CategoryAccordion from "@/components/CategoryAccordion";
import projects from "@/data/projects.json";
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-8 py-20 max-w-3xl mx-auto">
      <header className="mb-16">
        <div className="text-zinc-500 text-sm mb-12">[LOGO]</div>
        <h1 className="text-5xl font-bold tracking-tight mb-8">
          I&apos;m Logan! I like building neat things that work.
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
          {/* TODO: write this in your own voice */}
          Lorem ipsum placeholder — something direct, enthusiastic, no fluff.
          What you build, why you build it, what drives you. Keep it short.
        </p>
      </header>
      <CategoryAccordion
        title="Robotics"
        projects={projects.filter(p => p.category === "Robotics")}
      />
      <CategoryAccordion
        title="APIs"
        projects={projects.filter(p => p.category === "APIs")}
      />
      <CategoryAccordion
        title="Webapps"
        projects={projects.filter(p => p.category === "Webapps")}
      />
      <CategoryAccordion
        title="Games"
        projects={projects.filter(p => p.category === "Games")}
      />
    </main>
  );
}
