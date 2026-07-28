// JS/cache.js
export const XI = {};   // Input Cache
export const IX = {};   // Output Cache

export function CACHE_UPDATE(standort, q, vec) {
    XI[standort] = q.qualität;
    IX[standort] = vec.AC;
}
