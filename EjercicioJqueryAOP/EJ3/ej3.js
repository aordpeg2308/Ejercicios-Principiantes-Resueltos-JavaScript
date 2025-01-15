$("#addTask").click(function(){
    let datos = $("#newTask").val().trim();
    $("#taskList").append('<li>'+datos+' <button class="eliminar">eliminar</button> <button class="modificar">Modificar</button></li> ')
});
$(document).on('click','.eliminar',function(){
    $(this).parent().fadeOut();
})
$(document).on('click','.modificar',function(){
    $(this).parent().toggleClass("completed");
})

