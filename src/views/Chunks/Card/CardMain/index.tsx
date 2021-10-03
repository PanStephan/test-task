import React, { FC, useEffect } from "react";
import { MockData, Type } from "views/screens/Main/mock";
import { Timer } from "components/special/Timer";
import { CardItemStore, nextCardItem, setCardData } from "views/Chunks/Card/unit";
import { useStore } from "effector-react";
import { Button } from "components/common/Button";
import { Headers, Headings } from "components/common/Headings";
import { CardOptions } from "views/Chunks/Card/CardOptions";

interface CardMainProps {
    data: MockData[]
}

export const CardMain: FC<CardMainProps> = props => {
    const {
        data
    } = props;

    const cardData = useStore(CardItemStore);

    useEffect(() => {
        setCardData(data);
    }, []);

    console.log(cardData);

    return <div>
        <Headings as={Headers.h2}>{ cardData.question }</Headings>
        {
            cardData.time 
                && <Timer initTime={2}
                          setTimerEnd={() => nextCardItem()} />
        }
        {
            cardData.type === Type.test && cardData.options
                && <CardOptions options={cardData.options} />
        }
        <Button label="Next Q" onClick={() => nextCardItem()} />
    </div>;
};