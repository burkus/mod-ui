import { writable } from "svelte/store"
import { type Peg } from "../types/peg"

import { pegs as mockedPegs } from "../mocks/pegs"

export const pegs = writable<Peg[]>(mockedPegs)