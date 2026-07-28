export function NC(v) {
    return `NC-${v}`;
}
// ABC-Vektor.js
export function ABC_Vektor(A, B, C, standort) {

    return {
        nc: `NC-${standort}`,

        // mathematische Vektoren
        AB: {
            x: B.x - A.x,
            y: B.y - A.y,
            z: B.z - A.z
        },

        BC: {
            x: C.x - B.x,
            y: C.y - B.y,
            z: C.z - B.z
        },

        AC: {
            x: C.x - A.x,
            y: C.y - A.y,
            z: C.z - A.z
        }
    };
}
const Mond  = { x: 1,  y: 2,  z: 0 };
const Erde  = { x: 4,  y: 3,  z: 1 };
const Sonne = { x: 10, y: 8,  z: 5 };

const v = ABC_Vektor(Mond, Erde, Sonne, "HH");
