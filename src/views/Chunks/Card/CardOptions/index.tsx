import React, { FC } from "react";
import { Button } from "components/common/Button";

import css from "./CardOptions.module.css";

interface CardOptionsProps {
    options: string[]
    onItemClick?: () => void
}

export const CardOptions: FC<CardOptionsProps> = props => {
    const {
        options,
        onItemClick
    } = props;
    
    return <ul className={css.cardList}>
        {
            options.map(o => (
                <li key={o} className={css.cardItem}>
                    <Button label={o} onClick={onItemClick} />
                </li>
            ))
        }
    </ul>;
};