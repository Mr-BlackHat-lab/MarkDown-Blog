

import { getSortedPostsData } from '@/lib/posts'; // You might still have this
import { getPostData } from '@/lib/posts';      // Import the function to test

// Make the default export function async to use await inside
export default async function Blog() {
  // --- Test getSortedPostsData (Optional - you can keep or remove) ---
  const allPostsData = getSortedPostsData();
  // console.log('--- All Posts Data (Sorted) ---', allPostsData); // Optional log

  // --- Test getPostData ---
  const specificSlug = 'first-post'; // Choose a slug that exists in your /posts folder
  try {
    console.log(`--- Fetching data for slug: ${specificSlug} ---`);
    // Call the async function using await
    const postData = await getPostData(specificSlug);

    // Log the entire returned object to the server console (terminal)
    console.log(`--- Single Post Data for slug: ${specificSlug} ---`);
    console.log(postData);
    console.log('----------------------------------------------');

  } catch (error) {
    // Log any errors that might occur (e.g., file not found)
    console.error(`Error fetching post data for slug "${specificSlug}":`, error);
  }

  // --- Render the page ---
  // The component still needs to return JSX
  // We add a message indicating where to check the log output
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>
          Check your terminal (running 'npm run dev') to see the detailed log output for the post with slug: '{specificSlug}'.
        </p>
        {/* You could potentially render postData.title here later */}
      </div>
      {/* ... other existing default content ... */}
    </main>
  );
}