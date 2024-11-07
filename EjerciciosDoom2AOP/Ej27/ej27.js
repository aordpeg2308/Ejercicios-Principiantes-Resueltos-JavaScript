document.getElementById("basicForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("basicFileInput");
    const file = fileInput.files[0];
    const error = document.getElementById("basicError");
    const success = document.getElementById("basicSuccess");
    const preview = document.getElementById("imagePreview");
    error.textContent = success.textContent = "";
    preview.src = "";

    if (!file) return (error.textContent = "Seleccione un archivo");
    if (!file.type.startsWith("image/")) return (error.textContent = "El archivo debe ser una imagen");
    if (file.size > 1024 * 1024) return (error.textContent = "El archivo debe pesar menos de 1MB");

    success.textContent = "Archivo válido!";
    preview.src = URL.createObjectURL(file);
});