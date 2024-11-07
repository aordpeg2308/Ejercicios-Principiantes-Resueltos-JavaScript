const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        console.log(mutation);
    });
});
observer.observe(document.getElementById("observedElement"), { attributes: true, childList: true, subtree: true });
function modificarElementoObservado() {
    const element = document.getElementById("observedElement");
    element.textContent += "!";
    element.style.color = element.style.color === "red" ? "blue" : "red";
}