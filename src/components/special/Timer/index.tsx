import React, { CSSProperties, FC, useEffect, useState } from "react";

import css from "./Timer.module.css";

interface TimerProps {
    initTime: number
    setTimerEnd: () => void
    style?: CSSProperties
}

export const Timer: FC<TimerProps> = props => {
    const {
        initTime,
        setTimerEnd,
        style
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

    return <span className={css.timer} style={style}>
        { time }
    </span>;
};