import { createPeg, PegType } from "../types/peg";

const randomEntry = () => ({
    x: Math.round(Math.random() * 15),
    y: Math.random()
});

const randomEntries = (length: number) => Array.from({length}).map(randomEntry)


export const pegs = [
    createPeg(PegType.BarChart, {
        data: randomEntries(10),
        x: 'x',
        y: 'y'
    }),
    createPeg(PegType.ScatterPlot, {
        data: randomEntries(10),
        x: 'x',
        y: 'y'
    })
];