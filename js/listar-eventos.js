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

            var contenedor = $('#contenedor');

            $.each(eventos, function(i, evento) {
                var div = $('<div></div>').addClass('evento')
                var tit = $('<h4></h4>').text(evento.nombre)
                div.append(tit)

                if (evento.imagen != null) {
                    img = $('<img />').attr('src', 'img/eventos/' + evento.imagen)
                    div.append(img)
                }
                
                contenedor.append(div)
            })
        },
        error: function(error){
            console.error("Error del servicio")
            console.log(error)
        }
    })
    
}
