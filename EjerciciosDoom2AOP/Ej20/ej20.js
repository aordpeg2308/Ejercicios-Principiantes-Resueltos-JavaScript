let count = 1;
function agregarElemento() {
    const lista = document.getElementById("lista");
    const li = document.createElement("li");
    li.textContent = `Elemento ${count++}`;
    lista.appendChild(li);
}