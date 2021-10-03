import React, { FC } from "react";
import { Button } from "components/common/Button";

interface CardOptionsProps {
    options: string[]
}

export const CardOptions: FC<CardOptionsProps> = props => {
    const {
        options
    } = props;
    
    return <ul>
        {
            options.map(o => (
                <li key={o}>
                    <Button label={o} onClick={() => { console.log("click"); }} />
                </li>
            ))
        }
    </ul>;
};