import React from "react";

type HeadingProps = {
    as: keyof React.JSX.IntrinsicElements &
        ("h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p");
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
};

const Text: React.FC<HeadingProps> = ({
    as: Tag,
    color = "var(--text-base-200)",
    fontSize = "16px",
    fontWeight = "400",
    style,
    children,
}) => {
    return (
        <Tag style={{ color, fontSize, fontWeight, ...style }}>{children}</Tag>
    );
};

export default Text;
