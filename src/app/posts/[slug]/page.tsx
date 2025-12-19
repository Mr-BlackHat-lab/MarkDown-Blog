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
        <main className="bg-background">
            <section className="py-10">
                <article className="max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-6 bg-card text-card-foreground border border-border rounded-2xl shadow-sm p-6 sm:p-8">
                    <h1 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                        {postData.title}
                    </h1>
                    <div className="mt-3 text-muted-foreground text-sm">
                        <p>
                            By {postData.author} • {postData.date}
                        </p>
                    </div>
                    <div className="mt-6 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </article>
            </section>
        </main>
    );
}