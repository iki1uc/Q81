// JS/ID.engine.js
export function ID_ENGINE(mode, respo) {
    const prefix = {
        koop: "KP",
        neutral: "NT",
        pook: "PK"
    }[mode];

    return `${prefix}-${respo.id}`;
}
