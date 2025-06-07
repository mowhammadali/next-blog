import { Post } from "@/components/blogs/post-list/post-list";

// get

export async function getPostBySlug(slug: string) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}post/slug/${slug}`
    );
    const { data } = await res.json();
    const post: Post = data?.post;

    return post;
}
