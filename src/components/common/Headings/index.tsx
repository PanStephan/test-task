import React, { CSSProperties, FC } from "react";
import { c } from "utils/c";

import css from "./Headings.module.css";

export enum Headers {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6"
}

interface HeadingsProps {
    as: Headers
    className?: string
    style?: CSSProperties
}

export const Headings: FC<HeadingsProps> = props => {
    const {
        as,
        className,
        children,
        style
    } = props;

    return React.createElement(as, {
        className: c(css.headings, css[as], className),
        style
    }, <>{ children }</>);
};