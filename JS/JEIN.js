// JEIN.js
export function JEIN(v) {

    const erfüllt =
        v !== null &&
        v !== undefined &&
        v !== false &&
        v !== "" &&
        !(Number.isNaN(v));

    return {
        wert: v,
        erfüllt: erfüllt ? "JA" : "NEIN",
        bool: !!erfüllt,
        kleinster_nenner: erfüllt ? 1 : 0
    };
}
