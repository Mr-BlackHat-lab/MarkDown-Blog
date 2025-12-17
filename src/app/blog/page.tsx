import { getSortedPostsData, getPostData } from "@/lib/posts";
import Link from "next/link";
import { Card, CardAction, CardContent, CardDescription, CardTitle, CardFooter, CardHeader } from "@/components/ui/card";



export default async function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <main>
      <section>
        <h1 >My Blog</h1>


        <ul >

          {allPostsData.map((post) => (

            <Card key={post.slug}>
              <Link href={`/posts/${post.slug}`} >
                <CardHeader>
                  <CardTitle >
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardDescription>
                  <time dateTime={post.date} >
                    {post.date} • {post.author}
                  </time>
                  <p>
                    {post.description}
                  </p>
                </CardDescription>
              </Link>
            </Card>
          ))}
        </ul>
      </section>
    </main>
  );
}