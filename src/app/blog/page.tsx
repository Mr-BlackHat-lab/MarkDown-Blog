import { getSortedPostsData, getPostData } from "@/lib/posts";
import Link from "next/link";



export default async function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 lg:p-24">
      <section className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-center">My Blog</h1>


        <ul className="space-y-6">

          {allPostsData.map((post) => (

            <li key={post.slug} className="border p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in-out">
              <Link href={`/posts/${post.slug}`} className="block p-4"> 

              <h2 className="text-2xl font-semibold mb-2">
                {post.title}
              </h2>

              <div className="mt-1">
                <time dateTime={post.date} className="text-gray-600 dark:text-gray-400 text-sm">
                  {post.date} • {post.author}
                </time>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  {post.description}
                </p>
              </div>
            </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}