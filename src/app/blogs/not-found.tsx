"use client";
import React from "react";
import css from "@/app/blogs/not-found.module.css";
import Text from "@/ui/text/text";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();

    return (
        <div className={css.container}>
            <Text as="h3" color="var(--rose-400)">
                هیچ پستی یافت نشد!
            </Text>
            <Text
                as="p"
                onClick={() => router.replace("/blogs")}
                style={{ cursor: "pointer" }}
            >
                بازگشت
            </Text>
        </div>
    );
};

export default NotFound;
