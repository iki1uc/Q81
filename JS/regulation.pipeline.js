// JS/regulation.pipeline.js
import { REGULATION } from "./regulation.js";
import { REGULATION_MATRIX } from "./regulation.matrix.js";

export function REGULATION_PIPE(v, standort, A, B, C) {
    const reg = REGULATION(v, standort, A, B, C);
    return REGULATION_MATRIX(reg);
}
