import { getSortedPostsData, getPostData } from "@/lib/posts";
import Link from "next/link";
import { Card, CardAction, CardContent, CardDescription, CardTitle, CardFooter, CardHeader } from "@/components/ui/card";



export default async function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="bg-background">
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">My Blog</h1>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {allPostsData.map((post) => (
              <Card key={post.slug} className="hover:shadow-md transition-shadow">
                <Link href={`/posts/${post.slug}`}>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      <time dateTime={post.date}>
                        {post.date} • {post.author}
                      </time>
                      <p className="mt-2">
                        {post.description}
                      </p>
                    </CardDescription>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}