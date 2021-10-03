import { createEvent, createStore, sample } from "effector";
import { MockData } from "views/screens/Main/mock";

interface CardStore {
    data?: MockData[]
    itemNumber: number
}

export const setCardData = createEvent<MockData[]>();
export const nextCardItem = createEvent();

export const CardStore = createStore<CardStore>({ itemNumber: 0 })
    .on(setCardData, (s, p) =>
        ({ ...s, data: p }))
    .on(nextCardItem, s => ({ ...s, itemNumber: ++s.itemNumber }));
export const CardItemStore = createStore<Partial<MockData>>({});

sample({
    source: CardStore,
    fn: s => {
        if (!s.data) return {};
        return s.data[s.itemNumber];
    },
    target: CardItemStore
});