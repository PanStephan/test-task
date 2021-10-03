import React, { CSSProperties, FC, useEffect } from "react";
import { MockData, Type } from "views/screens/Main/mock";
import { Timer } from "components/special/Timer";
import {
    CardItemData,
    IsTestComplete,
    nextCardItem,
    setCardData
} from "views/Chunks/Card/unit";
import { useStore } from "effector-react";
import { Button } from "components/common/Button";
import { Headers, Headings } from "components/common/Headings";
import { CardOptions } from "views/Chunks/Card/CardOptions";
import { Input } from "components/common/Input";

import css from "./Card.module.css";

interface CardSegmentProps {
    style?: CSSProperties
}

const CardSegment: FC<CardSegmentProps> = props => {
    const {
        children,
        style
    } = props;

    return <div className={css.cardSegment} style={style}>
        { children }
    </div>;
};

interface CardMainProps {
    data: MockData[]
}

export const Card: FC<CardMainProps> = props => {
    const {
        data
    } = props;

    const cardData = useStore(CardItemData);
    const isTestComplete = useStore(IsTestComplete);

    useEffect(() => {
        //emulate backend data receive
        setCardData(data);
    }, []);

    return <div className={css.cardOverflow}>
        {
            isTestComplete ?
                <Headings as={Headers.h3}>Test Complete</Headings> :
                <>
                    {
                        cardData.img &&
                            <img src={cardData.img} alt="card-img"
                                 style={{ width: "50px", height: "50px" }} />
                    }
                    <CardSegment>
                        {
                            cardData.time && <>
                                Time:
                                <Timer initTime={cardData.time}
                                       style={{ marginLeft: "10px" }}
                                       setTimerEnd={() => nextCardItem()} />
                            </>
                        }
                    </CardSegment>
                    <Headings as={Headers.h2}>{ cardData.question }</Headings>
                    <CardSegment>
                        {
                            cardData.type === Type.test &&
                            cardData.options &&
                                <CardOptions options={cardData.options}
                                             onItemClick={() => nextCardItem()} />
                        }
                        {
                            cardData.type === Type.open &&
                                <Input />
                        }
                    </CardSegment>
                    {
                        cardData.type === Type.open &&
                            <Button label="Next Question" onClick={() => nextCardItem()} />
                    }
                </>
        }
    </div>;
};