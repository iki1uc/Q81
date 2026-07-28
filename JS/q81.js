// q81.js
import { JEIN } from "./JEIN.js";

export function q81(v) {

    const basis = JEIN(v);

    return {
        typ: "q81",
        input: v,
        status: basis.erfüllt,
        aktiv: basis.bool,
        nenner: basis.kleinster_nenner,
        qualität: basis.bool ? v : 0
    };
}
