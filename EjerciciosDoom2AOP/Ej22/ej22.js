let selectedNode = null;
function agregarNodoArbol() {
    const newNode = document.createElement("div");
    newNode.textContent = `Nodo ${Math.floor(Math.random() * 1000)}`;
    newNode.className = "tree-node";
    newNode.onclick = function (e) {
        e.stopPropagation();
        if (selectedNode) selectedNode.classList.remove("selected");
        newNode.classList.add("selected");
        selectedNode = newNode;
    };
    (selectedNode || document.getElementById("treeRoot")).appendChild(newNode);
}
function eliminarNodoSeleccionado() {
    if (selectedNode) {
        selectedNode.remove();
        selectedNode = null;
    }
}