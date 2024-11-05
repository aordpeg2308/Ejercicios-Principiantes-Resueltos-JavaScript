document.getElementById("mouseInfo").addEventListener("mousemove", function(event) {
    this.textContent = `Coordenadas del mouse: X=${event.clientX}, Y=${event.clientY}`;
});
