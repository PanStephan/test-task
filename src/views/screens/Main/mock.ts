import img from "../../../assets/imgs/first.jpeg";

enum Type {
    test = "test",
    open = "open"
}

type TruncateOptions =
    | { type: Type.open }
    | { type: Type.test; options: string[] };

type MockData = {
    question: string
    time?: number
    img?: string
} & TruncateOptions;

export const data: MockData[] = [
    {
        type: Type.open,
        question: "1",
        img: img
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
        time: 3600
    }
];