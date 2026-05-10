import Navbar from "@/components/Navbar";

export default function Contact() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100 px-8 py-20 max-w-3xl mx-auto">
            <div className="flex items-center gap-8 mb-12">
                <Navbar />
            </div>
            <header className="mb-12">
                <h1 className="text-5xl font-bold tracking-tight mb-8">Get In Touch With Me!</h1>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                    I&apos;m always open to collaborating on interesting projects. Reach out however works best for you.
                </p>
            </header>
            <div className="flex flex-col gap-4 text-lg">
                <a href="mailto:logancancode@gmail.com" className="text-zinc-400 hover:text-zinc-100">
                    logancancode@gmail.com
                </a>
                <a href="https://github.com/LoganIsCoding" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/logan-beyer-12b91b308/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-100">
                    LinkedIn
                </a>
            </div>
        </main>
    );
}
