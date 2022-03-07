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
                    evento.joyas,
                    evento.armaduras,
                    evento.armas,
                    evento.extras,
                    evento.outfit,
                ))
            })
        },
        error: function(error){
            console.error("Error del servicio")
            console.log(error)
        }
    })
    
}

function crearTarjetaEvento(nombre, logo, fecha, artefacto, joyeria, armaduras, armas, extras, outfit) {

    if (fecha==null) {
        fecha='';
    }

    var contenido = "<div class='col-xl-3 col-sm-6 mb-5'><div class='bg-dark rounded shadow-sm py-4 px-3'>";

    if (logo) {
        contenido += "<img src='img/eventos/" + logo + "' alt='" + nombre + "' width='150' class='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm bg-dark'>";
    }
    
    contenido += "<h5 class='mb-0'>" + nombre + "</h5><span class='small text-uppercase text-muted'>" + fecha + "</span>"+
    "<ul class='list-group list-group-flush bg-dark mb-0 mt-3'>";

    if (artefacto) {
        contenido += "<li class='list-group-item bg-dark p-0 border-0 artefacto'><img src='img/eventos/artefactos/" + artefacto + "' alt='" + artefacto + "' class='img-fluid mb-3'></li>";
    }
    if (joyeria) {
        contenido += "<li class='list-group-item bg-dark p-0 border-0 joyeria'><img src='img/eventos/joyas/" + joyeria + "' alt='" + joyeria + "' class='img-fluid mb-3'></li>";
    }
    if (armaduras) {
        contenido += "<li class='list-group-item bg-dark p-0 border-0 armaduras'><img src='img/eventos/armaduras/" + armaduras + "' alt='" + armaduras + "' class='img-fluid mb-3'></li>";
    }
    if (armas) {
        contenido += "<li class='list-group-item bg-dark p-0 border-0 armas'><img src='img/eventos/armas/" + armas + "' alt='" + armas + "' class='img-fluid mb-3'></li>";
    }
    if (extras) {
        contenido += "<li class='list-group-item bg-dark p-0 border-0 armas'><img src='img/eventos/extras/" + extras + "' alt='" + extras + "' class='img-fluid mb-3'></li>";
    }
    /*
    if (outfit) {
        contenido += "<li class='list-group-item bg-dark p-0 border-0 outfit'><img src='img/eventos/outfit/" + outfit + "' alt='" + outfit + "' class='img-fluid mb-3'></li>";
    }*/
    
    contenido += "</ul></div></div>";

    var tarjeta = $(contenido);

    return tarjeta;

}
