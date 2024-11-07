const draggable = document.getElementById("draggable");
let offsetX, offsetY;

draggable.addEventListener("mousedown", (e) => {
    
    e.preventDefault();


    offsetX = e.offsetX;
    offsetY = e.offsetY;


    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
});

function mouseMove(e) {

    draggable.style.left = `${e.pageX - offsetX}px`;
    draggable.style.top = `${e.pageY - offsetY}px`;
}

function mouseUp() {
   
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
}
