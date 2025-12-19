export default function About() {
  return (
    <main className="bg-background">
      <section className="py-16 px-4 sm:px-6 flex min-h-full items-center justify-center">
        <div className="max-w-3xl mx-auto bg-card text-card-foreground border border-border rounded-2xl shadow-sm p-8">
          <h1 className="text-foreground text-3xl font-bold tracking-tight">About Me</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I’m a web developer sharing concise notes on performance, tooling, and modern
            front‑end practices. This blog is a collection of guides and tips to help you build
            faster, more reliable web apps.
          </p>
        </div>
      </section>
    </main>
  )
}