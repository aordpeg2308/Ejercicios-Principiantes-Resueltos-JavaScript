function agregarBotonDinamico() {
    const buttonContainer = document.getElementById("buttonContainer");
    const button = document.createElement("button");
    button.textContent = `Botón ${buttonContainer.children.length + 1}`;
    button.id = `btn${buttonContainer.children.length + 1}`;
    buttonContainer.appendChild(button);
}
document.getElementById("buttonContainer").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        alert(`ID del botón: ${e.target.id}`);
    }
});
