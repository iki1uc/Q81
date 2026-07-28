// JS/regulation.js
import { JEIN } from "./JEIN.js";
import { q81 } from "./q81.js";
import { ABC_Vektor } from "./vector.js";
import { RESPO_ID } from "./RESPO_AXD.tmp";

export function REGULATION(v, standort, A, B, C) {
    return {
        jein: JEIN(v),
        q81: q81(v),
        vec: ABC_Vektor(A, B, C, standort),
        respo: RESPO_ID(v, standort, A, B, C)
    };
}
