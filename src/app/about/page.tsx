import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function About() {
    return(
        <main className="min-h-screen text-zinc-100 py-20">
            <Navbar />
            <div className="max-w-2xl">
                <header className="mb-12">
                    <h1 className="text-5xl font-bold tracking-tight mb-8">About Me</h1>
                </header>
                <div className="text-zinc-400 text-lg leading-relaxed flex flex-col gap-6">
                    <p>I&apos;m Logan. I&apos;m a software systems engineer based in Kansas City. I spend a lot of time thinking about ideas and then figuring out how to build them. That gap between concept and working thing is what keeps me going.</p>
                    <p>Outside of work I cook, hike, camp, and game. I think all of those scratch the same itch: problem solving, patience, and getting a satisfying result at the end.</p>
                    <p>I have a lot of ideas. This site is where I put the ones that make it off the whiteboard.</p>
                </div>
                <div className="mt-16">
                    <Link href="/contact" className="text-zinc-100 font-semibold hover:text-zinc-400">
                        Get in touch →
                    </Link>
                </div>
            </div>
        </main>
    );
}