import React from "react";
import SinglePost from "@/components/blogs/single-post/single-post";
import { Post } from "@/components/blogs/post-list/post-list";

interface PropsType {
    params: {
        postSlug: string;
    };
}

const post = async ({ params }: PropsType) => {
    const postSlug = (await params).postSlug;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}post/slug/${postSlug}`
    );
    const { data } = await res.json();
    const post: Post = data?.post;

    return <SinglePost {...post} />;
};

export default post;
