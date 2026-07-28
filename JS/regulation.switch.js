// JS/regulation.switch.js
import { REGULATION_PIPE } from "./regulation.pipeline.js";

export function REGULATION_SWITCH(v, standort, A, B, C) {
    return {
        tp3: REGULATION_PIPE(v, standort, A, B, C),
        tp4: REGULATION_PIPE(v+1, standort, A, B, C),
        tp6: REGULATION_PIPE(v+2, standort, A, B, C),
        tp8: REGULATION_PIPE(v+3, standort, A, B, C),
        tp9: REGULATION_PIPE(v+4, standort, A, B, C),
        tp12: REGULATION_PIPE(v+5, standort, A, B, C)
    };
}
