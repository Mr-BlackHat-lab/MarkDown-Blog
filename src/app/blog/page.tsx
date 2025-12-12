// app/page.tsx (Cleaned up - assuming you'll use the data later)

import { getStoredPostsData } from "@/lib/posts"; // Adjust path if necessary

export default function Home() {
  // Call the function to get the sorted post data
  // We'll use this data later to render the post list
  const allPostsData = getStoredPostsData();
  console.log('--- Blog Post Data ---');
  console.log(allPostsData);
  console.log('----------------------');

  // console.log lines REMOVED

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Default Next.js content can be replaced with post list later */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
         {/* You might map over allPostsData here later */}
         <p>Blog Posts will be listed here.</p>
      </div>
      {/* ... rest of default content ... */}
    </main>
  );
}