import React, { FC, useEffect, useState } from "react";
import { MockData } from "views/screens/Main/mock";
import { Timer } from "components/special/Timer";
import { CardItemStore, nextCardItem, setCardData } from "views/Chunks/Card/unit";
import { useStore } from "effector-react";
import { Button } from "components/common/Button";

interface CardMainProps {
    data: MockData[]
}

export const CardMain: FC<CardMainProps> = props => {
    const {
        data
    } = props;

    const [
        isTimerEnd,
        setIsTimerEnd
    ] = useState(false);

    const cardData = useStore(CardItemStore);

    useEffect(() => {
        setCardData(data);
    }, []);

    console.log(cardData);

    return <div>
        <Timer initTime={2}
               setTimerEnd={() => setIsTimerEnd(true)} />
        <Button label="Next Q" onClick={() => nextCardItem()} />
    </div>;
};