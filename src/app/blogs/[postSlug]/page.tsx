import React from "react";
import SinglePost from "@/components/blogs/single-post/single-post";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug } from "@/services/posts";

interface PropsType {
    params: {
        postSlug: string;
    };
}

export async function generateMetadata(
    { params }: PropsType,
): Promise<Metadata> {
    const postSlug = (await params).postSlug;

    const post = await getPostBySlug(postSlug);

    if (!post)
        return {
            title: "یافت نشد",
        };

    return {
        title: post.title,
    };
}

const post = async ({ params }: PropsType) => {
    const postSlug = (await params).postSlug;

    const post = await getPostBySlug(postSlug);

    if (!post) notFound();

    return <SinglePost {...post} />;
};

export default post;
