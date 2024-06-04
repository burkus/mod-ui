export interface Peg {
    id: string
    type: PegType
    props: Record<string, unknown>
    dim: PegDimension
}

export interface PegDimension {
    width: number
    height: number
}

export enum PegType {
    BarChart = 'bar-chart',
    ScatterPlot = 'scatter-plot',
}

export const createPegDimension = (width: number, height: number): PegDimension => ({
    width,
    height
})

export const createPeg = (type: PegType, props: Record<string, unknown>, width=1, height=1): Peg => ({
    id: Math.random() * 1000 + '',
    props,
    type,
    dim: createPegDimension(width, height)
})