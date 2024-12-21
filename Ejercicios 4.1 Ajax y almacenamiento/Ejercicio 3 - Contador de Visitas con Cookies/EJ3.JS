function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
        if (cookie.trim().startsWith(name + "=")) {
            return cookie.split("=")[1];
        }
    }
    return null;
}

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 86400000).toUTCString();
    document.cookie = `${name}=${value};expires=${expires};path=/`;
}

// Aviso que esto no funciona del todo no se si es por local , he intentado ver si podia arreglarlo pero da por echo quue no existe  la coockie y no me hace el contador
function handleVisits() {
    let totalVisits = getCookie("totalVisits");
    let uniqueVisits = getCookie("uniqueVisits");
    let firstVisitDate = getCookie("firstVisitDate");
    let lastVisitDate = getCookie("lastVisitDate");

    if (!totalVisits) { // Si no existe crea todas las coockies
        setCookie("totalVisits", 1, 365);
        setCookie("uniqueVisits", 1, 365);
        setCookie("firstVisitDate", new Date().toLocaleString(), 365);
        setCookie("lastVisitDate", new Date().toLocaleString(), 365);
        totalVisits = 1;
        uniqueVisits = 1;
        firstVisitDate = new Date().toLocaleString();
        lastVisitDate = new Date().toLocaleString();
    } else { //si esxiste cambia la  ultima visita, y el contador de visitas
        totalVisits = parseInt(totalVisits) + 1;
        setCookie("totalVisits", totalVisits, 365);

        uniqueVisits = uniqueVisits ? parseInt(uniqueVisits) + 1 : 1;
        setCookie("uniqueVisits", uniqueVisits, 365);

        lastVisitDate = new Date().toLocaleString();
        setCookie("lastVisitDate", lastVisitDate, 365);
    }

    document.getElementById("totalVisits").textContent = totalVisits;
    document.getElementById("firstVisitDate").textContent = firstVisitDate;
    document.getElementById("lastVisitDate").textContent = lastVisitDate;
    document.getElementById("uniqueVisits").textContent = uniqueVisits;
}

function resetVisits() { //Aqui elimino  el contenido de las coockies 
    setCookie("totalVisits", 0, 365);
    setCookie("uniqueVisits", 0, 365);
    setCookie("firstVisitDate", "", 365);
    setCookie("lastVisitDate", "", 365);
    handleVisits();
}

window.onload = handleVisits;
