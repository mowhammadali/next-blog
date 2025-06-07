"use client";
import React from "react";
import css from "@/components/blogs/single-post/single-post.module.css";
import Text from "@/ui/text/text";
import Image from "next/image";
import { Post } from "@/components/blogs/post-list/post-list";
import { useRouter } from "next/navigation";

const SinglePost = (props: Post) => {
    const router = useRouter();

    return (
        <div className={css.container}>
            <Text as="h3">{props.title}</Text>
            <Text as="p">{props.briefText}</Text>
            <Text as="p">{props.text}</Text>
            <div className={css["image-container"]}>
                <Image
                    src={props.coverImageUrl}
                    alt={props.title}
                    fill
                    className={css.image}
                />
            </div>
            <Text
                as="p"
                onClick={() => router.back()}
                color="var(--blue-500)"
                fontSize="18px"
                style={{ cursor: "pointer" }}
            >
                بازگشت
            </Text>
        </div>
    );
};

export default SinglePost;
