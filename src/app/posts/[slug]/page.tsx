import { getSortedPostsData, getPostData } from "@/lib/posts";

export async function generateStaticParams() {
    const posts = getSortedPostsData();

    const params = posts.map((post) => ({
        slug: post.slug,
    }));

    // For now, log the fetched posts data to see the structure (optional, for debugging build)

    console.log(
        "[generateStaticParams] Fetched posts data:",
        JSON.stringify(params, null, 2) // Pretty print the array
    );
    return params;
}
type PostPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params;

    // Fetch the post data using the slug
    const postData = await getPostData(slug);

    // Log the received slug to the server console (during render) for verification
    console.log(`[PostPage] Rendering page for slug: ${slug}`);

    return (
        <article className="prose dark:prose-invert max-w-3xl mx-auto py-8 px-4">
            {/* Display the post title */}
            <h1>{postData.title}</h1>

            {/* Display post metadata */}
            <div className="text-gray-600 dark:text-gray-400 mb-4">
                <p>By {postData.author} • {postData.date}</p>
            </div>

            {/* Display the post content as HTML */}
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    );
}