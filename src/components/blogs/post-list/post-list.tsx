import React, { Suspense } from "react";
import Text from "@/ui/text/text";
import Image from "next/image";
import css from "@/components/blogs/post-list/post-list.module.css";
import Skeleton from "@/ui/skeleton/skeleton";
import PostInteractions from "../post-interactions/post-interactions";
import Navigation from "@/ui/navigation/navigation";
import { FiClock } from "react-icons/fi";
import { getPostList } from "@/services/postService";

export interface Post {
    title: string;
    id: string;
    coverImage: string;
    coverImageUrl: string;
    author: {
        avatarUrl: string;
        name: string;
    };
    readingTime: number;
    comments: { _id: string }[];
    isBookmarked: boolean;
    isLiked: boolean;
    slug: string;
    briefText: string;
    text: string;
}

const PostList = async () => {
    return (
        <Suspense fallback={<SkeletonLoading />}>
            <List />
        </Suspense>
    );
};

const List = async () => {
    await new Promise((res) =>
        setTimeout(() => {
            res("");
        }, 3000)
    );

    const posts = await getPostList();

    return (
        <>
            {posts.map((post: Post) => (
                <Navigation route={`/blogs/${post.slug}`} key={post.id}>
                    <div className={css.card}>
                        <div className={css["image-container"]}>
                            <Image
                                src={post.coverImageUrl}
                                fill
                                alt="post"
                                quality={100}
                                sizes="(max-width: 600px) 100vw, 100px"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                            />
                        </div>
                        <Text
                            as="h6"
                            color="var(--text-base-500)"
                            fontSize="14px"
                        >
                            {post.title}
                        </Text>
                        <div className={css["author-container"]}>
                            <div className={css["author-right"]}>
                                <div className={css["avatar-container"]}>
                                    <Image
                                        src={post.author.avatarUrl}
                                        fill
                                        alt={post.author.name}
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "center",
                                        }}
                                    />
                                </div>
                                <Text
                                    as="p"
                                    fontSize="11px"
                                    color="var(--text-base-600)"
                                >
                                    {post.author.name}
                                </Text>
                            </div>
                            <div className={css["author-left"]}>
                                <FiClock className={css["clock-icon"]} />
                                <Text
                                    as="p"
                                    fontSize="11px"
                                    color="var(--text-base-600)"
                                >
                                    خواندن: {post.readingTime} دقیقه
                                </Text>
                            </div>
                        </div>
                        <PostInteractions {...post} />
                    </div>
                </Navigation>
            ))}
        </>
    );
};

const SkeletonLoading = () => {
    return (
        <>
            {Array.from({ length: 8 }, (_, i) => i + 1).map((item) => (
                <Skeleton
                    key={item}
                    width="300px"
                    height="320"
                    variant="rect"
                    theme="light"
                />
            ))}
        </>
    );
};

export default PostList;
