import React from "react";
import css from "@/app/blogs/layout.module.css";
import CategoryList from "@/components/blogs/category-list/category-list";

interface PropsType {
    children: React.ReactNode;
}

const Layout = ({ children }: PropsType): React.JSX.Element => {
    return (
        <div className={css.container}>
            <CategoryList />
            <div className={css.left}>
                <section className={css.header}>header</section>
                <section className={css.blogs}>{children}</section>
                <section className={css.footer}>footer</section>
            </div>
        </div>
    );
};

export default Layout;
