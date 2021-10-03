import React, { FC } from "react";

import { Card } from "views/Chunks/Card";

import { Headers, Headings } from "components/common/Headings";

import { data } from "views/screens/Main/mock";

import styles from "./Main.module.css";

export const Main: FC = () => {
    return <div className={styles.mainWrapper}>
        <Headings as={Headers.h1}>Test game</Headings>
        <Card.CardScroller>
            <Card.CardMain data={data} />
        </Card.CardScroller>
    </div>;
};