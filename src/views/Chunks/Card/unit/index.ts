import { createEvent, createStore, sample } from "effector";
import { MockData } from "views/screens/Main/mock";

interface CardStore {
    data?: MockData[]
    itemNumber: number
}

export const setCardData = createEvent<MockData[]>();
export const nextCardItem = createEvent();

export const CardData = createStore<CardStore>({ itemNumber: 0 })
    .on(setCardData, (s, p) =>
        ({ ...s, data: p }))
    .on(nextCardItem, s => ({ ...s, itemNumber: ++s.itemNumber }));
export const CardItemData = createStore<Partial<MockData>>({});
export const IsTestComplete = createStore<boolean>(false);

sample({
    source: CardData,
    fn: s => {
        return s.data?.length === s.itemNumber;
    },
    target: IsTestComplete
});

sample({
    source: CardData,
    fn: s => {
        if (!s.data) return {};
        return s.data[s.itemNumber];
    },
    target: CardItemData
});