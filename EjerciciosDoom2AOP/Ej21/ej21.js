document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("mouseArea").addEventListener("mousemove", (event) => {
        document.getElementById("coordenadas").textContent = `X: ${event.offsetX}, Y: ${event.offsetY}`;
    });
});
