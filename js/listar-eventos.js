$(document).ready(function() {
    //obtenerListadoGET();
    obtenerListadoEventos();
    $('.bus2').addClass('d-none')
});

function obtenerListadoEventos(){
    $.get({
        url: "https://hc.infobreras.org/listar.php?t=eventos",
        success: function(listado){
            eventos = $.parseJSON(eventos)
            console.log(jefes)
        },
        error: function(error){
            console.error("Error del servicio")
            console.log(error)
        }
    })
    
}
