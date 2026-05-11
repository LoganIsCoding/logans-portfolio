import CategoryAccordion from "@/components/CategoryAccordion";
import projects from "@/data/projects.json";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen text-zinc-100 py-20">
      <header className="mb-16">
        <Navbar />
        <h1 className="text-5xl font-bold tracking-tight mb-8">
          I&apos;m Logan! I like building neat things that work.
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
          {/* TODO: write this in your own voice */}
          I'm a software systems engineer with a background in pharmacy automation. SQL,
          infrastructure as code, and building AI workflows. Before that I fixed Panasonic Toughbooks
          and built drones. I just really like building things. I'm always looking to collaborate, and
          below are some of the projects I've worked on and am currently building.
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
