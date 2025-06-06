import React, { Suspense } from "react";
import { Metadata } from "next";
import PostList from "@/components/blogs/post-list/post-list";

export const metadata: Metadata = {
    title: "بلاگ ها",
    description: "صفحه مربوط به بلاگ ها",
};

const Blogs = () => {
    return <PostList />;
};

export default Blogs;
