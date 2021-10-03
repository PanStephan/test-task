import React, { CSSProperties, FC, SyntheticEvent } from "react";
import { c } from "utils/c";

import css from "./Button.module.css";

interface ButtonProps {
    label?: string | React.ReactNode
    onClick?: (e: SyntheticEvent) => void
    type?: "submit" | "reset" | "button"
    className?: string
    style?: CSSProperties
}

export const Button: FC<ButtonProps> = props => {
    const {
        label,
        type,
        onClick,
        className,
        style
    } = props;
    
    return <button type={type}
                   onClick={onClick}
                   style={style}
                   className={c(css.button, className)}>
        { label }
    </button>;
};