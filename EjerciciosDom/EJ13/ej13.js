document.getElementById("duplicateButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value +" ";
    document.getElementById("textDisplay").textContent = inputText + inputText;
});