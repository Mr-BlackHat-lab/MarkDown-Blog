import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <main className="bg-background">
      <section className="flex h-screen items-center justify-end pr-16">
        <div className="flex flex-col items-end text-right max-w-md gap-4">
          <p className="text-6xl font-extrabold text-foreground">
            Markdown Blog
          </p>

          <p className="text-base text-muted-foreground">
            Welcome to my corner of the web where I share notes on web development,
            performance, and the tools I am learning along the way.
          </p>
        </div>
      </section>


      <section className="">
        <h2 className="text-accent-foreground text-3xl font-bold">About This Blog</h2>
        <p>
          I write concise guides, tips, and walkthroughs aimed at helping developers
          build faster and more reliable web apps. If you are curious about my
          background, visit the about page to learn more.
        </p>
        <Button asChild>
          <Link href="/about">Learn more about me</Link>
        </Button>
      </section>
    </main>
  );
}
