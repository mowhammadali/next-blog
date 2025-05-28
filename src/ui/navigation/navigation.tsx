'use client'
import React from "react";
import Link from "next/link";
import css from "@/ui/navigation/navigation.module.css";
import { usePathname } from "next/navigation";
import classNames from "classnames";

interface PropsType {
    children: React.ReactNode;
    route: string;
    prefetch?: boolean;
    replace?: boolean;
    scroll?: boolean;
    passHref?: boolean;
    color?: string;
}

const Navigation = ({
    children,
    route,
    prefetch = true,
    replace = false,
    scroll = true,
    passHref = false,
    color = "var(--text-base-400)"
}: PropsType): React.JSX.Element => {
    const path = usePathname(); 
    
    return (
        <Link
            href={route}
            prefetch={prefetch}
            replace={replace}
            scroll={scroll}
            passHref={passHref}
            style={{color: color}}
            className={classNames(css.link  , (path == route) && css.match)}
        >
            {children}
        </Link>
    );
};

export default Navigation;
