// JS/qmove.popup.js
import { QMOVE } from "./qmove.js";

export function QMOVE_POPUP() {
    const w = window.open("", "Q-Move", "width=600,height=700");

    const move = QMOVE();

    w.document.write(`
        <style>
            body { background:#000; color:#eee; font-family:Consolas; padding:20px; }
            h1 { color:#6cf; }
            .dot {
                width:20px; height:20px; border-radius:50%;
                position:absolute; transition:all 0.8s ease;
            }
        </style>
        <h1>Q‑Move · W → S → M → 81 → Q → W</h1>
        <div id="area" style="position:relative;width:500px;height:500px;border:1px solid #333;"></div>
    `);

    const area = w.document.getElementById("area");

    move.forEach((p, i) => {
        const dot = w.document.createElement("div");
        dot.className = "dot";
        dot.style.background = p.color;
        dot.style.left = "250px";
        dot.style.top = "250px";
        area.appendChild(dot);

        setTimeout(() => {
            dot.style.left = (250 + p.x * 120) + "px";
            dot.style.top  = (250 + p.y * 120) + "px";
        }, i * 600);
    });
}
