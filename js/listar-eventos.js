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

            var contenedor = $('#contenedor div');

            $.each(eventos, function(i, evento) {

                contenedor.append(crearTarjetaEvento(
                    evento.nombre,
                    evento.imagen,
                    evento.fecha,
                    evento.artefacto,
                    evento.joyeria,
                    evento.armaduras,
                    evento.armas,
                    evento.outfit
                ))
            })
        },
        error: function(error){
            console.error("Error del servicio")
            console.log(error)
        }
    })
    
}

function crearTarjetaEvento(nombre, logo, fecha, artefacto, joyeria, armaduras, armas, outfit) {

    if (fecha==null) {
        fecha='';
    }

    var contenido = "<div class='col-xl-3 col-sm-6 mb-5'><div class='bg-dark rounded shadow-sm py-5 px-4'>" +
    "<img src='img/eventos/" + logo + "' alt='" + nombre + "' width='150' class='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'>"+
    "<h5 class='mb-0'>" + nombre + "</h5><span class='small text-uppercase text-muted'>" + fecha + "</span>"+
    "<ul class='list-group list-group-flush bg-dark mb-0 mt-3'>";

    if (artefacto) {
        contenido += "<li class='list-group-item'><img src='img/eventos/artefactos/" + artefacto + "' alt='" + artefacto + "' height='60' class='img-fluid mb-3 shadow-sm'></li>";
    }
    if (joyeria) {
        contenido += "<li class='list-group-item'><img src='img/eventos/joyeria/" + joyeria + "' alt='" + joyeria + "' height='60' class='img-fluid mb-3 shadow-sm'></li>";
    }
    if (armaduras) {
        contenido += "<li class='list-group-item'><img src='img/eventos/armaduras/" + armaduras + "' alt='" + armaduras + "' height='60' class='img-fluid mb-3 shadow-sm'></li>";
    }
    if (armas) {
        contenido += "<li class='list-group-item'><img src='img/eventos/armas/" + armas + "' alt='" + armas + "' height='60' class='img-fluid mb-3 shadow-sm'></li>";
    }
    if (outfit) {
        contenido += "<li class='list-group-item'><img src='img/eventos/outfit/" + outfit + "' alt='" + outfit + "' height='60' class='img-fluid mb-3 shadow-sm'></li>";
    }
    
    contenido += "</ul></div></div>";

    var tarjeta = $(contenido);

    return tarjeta;

}
