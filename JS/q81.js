// q81.js
import { JEIN } from "./JEIN.js";

export function q81(v) {

    const j = JEIN(v);

    return {
        typ: "q81",
        input: v,

        // JA/NEIN Logik
        status: j.erfüllt,
        aktiv: j.bool,
        nenner: j.kleinster_nenner,

        // q81 = reine Qualität
        qualität: j.bool ? v : 0
    };
}
