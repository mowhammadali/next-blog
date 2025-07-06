"use client";
import React from "react";
import Navigation from "@/ui/navigation/navigation";
import css from "@/components/shared/header/header.module.css";
import useAuth from "@/hooks/useAuth";
import Skeleton from "@/ui/skeleton/skeleton";

const RenderAuthNavigation = () => {
    const { state } = useAuth();

    if (state.isLoading) {
        return <Skeleton width="90px" height="25px" />;
    }

    return state.isAuthenticated ? (
        <Navigation route="/profile">{state.user?.name}</Navigation>
    ) : (
        <Navigation route="/signup">ورود / ثبت نام</Navigation>
    );
};

const Header = () => {
    return (
        <div className={css.container}>
            <div className={css["links-container"]}>
                <Navigation route="/">خانه</Navigation>
                <Navigation route="/blogs">بلاگ ها</Navigation>
            </div>
            <div className={css["links-container"]}>
                {RenderAuthNavigation()}
            </div>
        </div>
    );
};

export default Header;
