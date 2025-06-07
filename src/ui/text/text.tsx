import React from "react";

type HeadingProps = {
    as: keyof React.JSX.IntrinsicElements &
        ("h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p");
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    children: React.ReactNode;
};

const Text: React.FC<HeadingProps> = ({
    as: Tag,
    color = "var(--text-base-200)",
    fontSize,
    fontWeight,
    style,
    onClick,
    children,
}) => {
    return (
        <Tag
            style={{ color, fontSize, fontWeight, ...style }}
            onClick={onClick}
        >
            {children}
        </Tag>
    );
};

export default Text;
