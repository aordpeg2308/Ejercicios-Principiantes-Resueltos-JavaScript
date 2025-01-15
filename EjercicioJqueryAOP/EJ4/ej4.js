let cargando = false;

$("#loadUsers").click(function() {
   
    $("#loading").show();
    $("#error").hide();
    $("#usersTable tbody").empty(); 

    setTimeout(function() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'GET',
            success: function(respuesta) {
                $("#loading").hide();
                respuesta.forEach(function(usuario) {
                    let fila = `<tr>
                                    <td>${usuario.name}</td>
                                    <td>${usuario.email}</td>
                                </tr>`;
                    $("#usersTable tbody").append(fila);
                });
            },
            error: function() {
                $("#loading").hide();
                $("#error").text("Ocurrió un error al cargar los usuarios.").show();
            }
        });
    }, 500); 
});
