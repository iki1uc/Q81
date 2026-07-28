// JS/regulation.matrix.js
export function REGULATION_MATRIX(reg) {
    return {
        identität: {
            nc: reg.respo.nc,
            id: reg.respo.id
        },
        qualität: reg.q81,
        richtung: reg.vec,
        speicher: {
            XI: reg.respo.XI,
            IX: reg.respo.IX,
            hdf: reg.respo.hdf_tmp
        },
        raum: {
            mystery: reg.respo.mystery
        }
    };
}
