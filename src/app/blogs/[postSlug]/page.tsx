import React from "react";
import SinglePost from "@/components/blogs/single-post/single-post";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostList } from "@/services/postService";
import { Post as PostTypes } from "@/components/blogs/post-list/post-list";

interface PropsType {
    params: Promise<{
        postSlug: string;
    }>;
}

export async function generateStaticParams(): Promise<{ postSlug: string }[]> {
    const allPosts: PostTypes[] = await getPostList();

    return allPosts.map(post => ({postSlug: post.slug}))
}

export async function generateMetadata({ params }: PropsType) {
    const props = await params;
    const postSlug = props.postSlug;

    const post = await getPostBySlug(postSlug);

    if (!post) {
        return {
            title: "یافت نشد",
        };
    }

    return {
        title: post.title,
    };
}

const Post = async ({ params }: PropsType) => {
    const props = await params;
    const postSlug = props.postSlug;

    const post = await getPostBySlug(postSlug);

    if (!post) notFound();

    return <SinglePost {...post} />;
};

export default Post;
