import React, { CSSProperties } from "react";
import css from "@/ui/button/button.module.css";
import classNames from "classnames";

interface PropsType {
    children: React.ReactNode;
    onClick?: () => void;
    height?: string;
    width?: string;
    bg?: string;
    fontSize?: string;
    textColor?: string;
    disabled?: boolean;
    styles?: CSSProperties;
    className?: string;
    type?: "button" | "submit" | "reset";
}

const Button = ({
    children,
    onClick,
    height = "auto",
    width = "auto",
    textColor = "var(--white-fixed)",
    bg = "var(--blue-600)",
    fontSize = "12px",
    disabled = false,
    styles,
    className,
    type = "button",
}: PropsType): React.JSX.Element => {
    return (
        <button
            disabled={disabled}
            type={type}
            style={{
                height: height,
                width: width,
                backgroundColor: bg,
                color: textColor,
                fontSize,
                ...styles,
            }}
            className={classNames(css.button, className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
