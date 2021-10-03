import React, { FC } from "react";

import css from "./CardScroller.module.css";

export const CardScroller: FC = props => {
    const {
        children
    } = props;

    return <div className={css.cardScrollerOverflow}>
        { children }
    </div>;
};