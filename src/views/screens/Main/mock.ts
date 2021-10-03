import img from "../../../assets/imgs/first.jpeg";

export enum Type {
    test = "test",
    open = "open"
}

type TruncateOptions =
    | { type: Type.open }
    | { type: Type.test; options: string[] };

export type MockData = {
    question: string
    time?: number
    img?: string
} & TruncateOptions;

export const data: MockData[] = [
    {
        type: Type.open,
        question: "1",
        img
    },
    {
        type: Type.test,
        question: "2",
        options: ["1", "2", "3"]
    },
    {
        type: Type.test,
        question: "3",
        options: ["1", "2", "3", "4"],
        time: 15
    },
    {
        type: Type.open,
        question: "4",
    },
    {
        type: Type.open,
        question: "5",
        img
    }
];