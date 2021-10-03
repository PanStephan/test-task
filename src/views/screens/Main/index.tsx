import React, { FC } from "react";
import { Headers, Headings } from "components/common/Headings";
import { Card } from "views/сhunks/Card";
import { data } from "views/screens/Main/mock";

import css from "./Main.module.css";

export const Main: FC = () => {
    return <div className={css.mainWrapper}>
        <Headings as={Headers.h1}>Test game</Headings>
        <Card data={data} />
    </div>;
};