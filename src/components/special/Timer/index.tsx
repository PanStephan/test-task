import React, { FC, useEffect, useState } from "react";

interface TimerProps {
    initTime: number
    setTimerEnd: () => void
}

export const Timer: FC<TimerProps> = props => {
    const {
        initTime,
        setTimerEnd
    } = props;

    const [
        time,
        setTime
    ] = useState(initTime);

    useEffect(() => {
        const interval = setTimeout(() =>
            //TODO use localstorage
            setTime(time - 1), 1000);
        if (time === 0) {
            setTimerEnd();
            clearTimeout(interval);
        }
        return () => {
            clearTimeout(interval);
        };
    }, [time]);

    return <>{ time }</>;
};