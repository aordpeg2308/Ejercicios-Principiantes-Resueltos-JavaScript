const dropZone = document.getElementById("dropZone");
dropZone.addEventListener("dragover", (e) => e.preventDefault());
dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
});
document.getElementById("advancedFileInput").addEventListener("change", (e) => handleFiles(e.target.files));
function handleFiles(files) {
    const fileList = document.getElementById("fileList");
    fileList.innerHTML = "";
    Array.from(files).forEach((file) => {
        const item = document.createElement("div");
        if (file.size > 5 * 1024 * 1024) {
            item.textContent = `Archivo: ${file.name} - Excede tamaño permitido`;
            item.classList.add("error");
        } else {
            item.textContent = `Archivo: ${file.name} - Tamaño: ${file.size} bytes`;
            item.classList.add("success");
        }
        fileList.appendChild(item);
    });
}
function uploadFiles() {
    const progress = document.getElementById("uploadProgress");
    progress.style.display = "block";
    let value = 0;
    const interval = setInterval(() => {
        value += 10;
        progress.value = value;
        if (value >= 100) clearInterval(interval);
    }, 100);
}