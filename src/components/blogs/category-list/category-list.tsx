import React, { Suspense } from "react";
import Navigation from "@/ui/navigation/navigation";
import css from "@/components/blogs/category-list/category-list.module.css";
import Text from "@/ui/text/text";
import Skeleton from "@/ui/skeleton/skeleton";
import { getCategoryList } from "@/services/postService";

interface Categories {
    slug: string;
    title: string;
    _id: string;
}

const CategoryList = async () => {
    return (
        <div className={css.container}>
            <Text as="h3" color="var(--text-base-400)">
                لیست بلاگ ها
            </Text>
            <Suspense fallback={<ListLoading />}>
                <List />
            </Suspense>
        </div>
    );
};

const List = async () => {
    await new Promise((res) =>
        setTimeout(() => {
            res("");
        }, 2000)
    );

    const categories = await getCategoryList();

    return (
        <ul className={css.list}>
            <li>
                <Navigation route="/blogs">همه</Navigation>
            </li>
            {categories.map((category: Categories) => (
                <li key={category?._id}>
                    <Navigation route={`/blogs/${category?.slug}`}>
                        {category?.title}
                    </Navigation>
                </li>
            ))}
        </ul>
    );
};

const ListLoading = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {Array.from({ length: 8 }, (_, i) => i + 1).map((item) => (
                <Skeleton
                    key={item}
                    width="70px"
                    height="25px"
                    variant="rect"
                />
            ))}
        </div>
    );
};

export default CategoryList;
