import { type ComponentType } from "svelte"

import BarChart from "./BarChart.svelte"
import ScatterPlot from "./ScatterPlot.svelte"

import { PegType } from "../types/peg"

const componentMap: Record<PegType, ComponentType> = {
    [PegType.BarChart]: BarChart,
    [PegType.ScatterPlot]: ScatterPlot,
}

export default componentMap