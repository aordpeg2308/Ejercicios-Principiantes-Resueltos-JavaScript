document.getElementById("moveWindowButton").addEventListener("click", function() {
    const newWindow = window.open("https://reinoanimalia.fandom.com/es/wiki/Capibara", "_blank", "width=500,height=500");
    setTimeout(() => newWindow.close(), 3000);
});