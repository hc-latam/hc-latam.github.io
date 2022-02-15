$(document).ready(function() {
    //obtenerListadoGET();
    obtenerListadoEventos();
    $('.bus2').addClass('d-none')
});

function obtenerListadoEventos(){
    $.get({
        url: "https://hc.infobreras.org/listar.php?t=eventos",
        success: function(eventos){
            console.log(eventos);
            eventos = listado

            var contenedor = $('#contenedor');

            $.each(eventos, function(i, evento) {
                var div = $('<div></div>').addClass('evento')
                var tit = $('<h4></h4>').text(evento.nombre)
                var img = $('<img />').attr('src', evento.imagen).attr('hight', '150')

                div.append(tit).append(img)
                contenedor.append(div)
            })
        },
        error: function(error){
            console.error("Error del servicio")
            console.log(error)
        }
    })
    
}
