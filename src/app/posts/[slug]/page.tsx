import { getSortedPostsData, getPostData } from "@/lib/posts";

export async function generateStaticParams() {
    const posts = getSortedPostsData();

    const params = posts.map((post) => ({
        slug: post.slug,
    }));


    console.log(
        "[generateStaticParams] Fetched posts data:",
        JSON.stringify(params, null, 2)
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

    const postData = await getPostData(slug);


    console.log(`[PostPage] Rendering page for slug: ${slug}`);

    return (
        <article>
            <h1>{postData.title}</h1>
            <div>
                <p>By {postData.author} • {postData.date}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    );
}