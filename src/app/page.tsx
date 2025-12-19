import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <main className="bg-background">
      <section className="flex min-h-[70vh] items-center justify-center">
        <div className="flex flex-col items-center text-center max-w-md sm:max-w-lg md:max-w-2xl gap-8 md:gap-10 px-4">
          <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground rounded-2xl animate-scale-bounce">
            Markdown Blog
          </p>

          <p className="text-base text-muted-foreground">
            Welcome to my corner of the web where I share notes on web development,
            performance, and the tools I am learning along the way.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 pt-8 pb-16">
        <div className="max-w-3xl mx-auto bg-card text-card-foreground border border-border rounded-2xl shadow-sm p-8">
          <h2 className="text-foreground text-3xl font-bold tracking-tight">About This Blog</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I write concise guides, tips, and walkthroughs aimed at helping developers
            build faster and more reliable web apps. If you are curious about my
            background, visit the about page to learn more.
          </p>

          <div className="mt-8">
            <Button asChild>
              <Link href="/about">Learn more about me</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
