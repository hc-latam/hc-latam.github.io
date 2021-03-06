$(document).ready(function() {
    //obtenerListadoGET();
    obtenerListadoEventos();
    $('.bus2').addClass('d-none')
});

function obtenerListadoEventos(){
    $.get({
        url: "https://hc.infobreras.org/listar.php?t=eventos",
        success: function(eventos){

            var contenedor = $('#contenedor div');

            $.each(eventos, function(i, evento) {

                contenedor.append(crearTarjetaEvento(
                    evento.id_evento,
                    evento.nombre,
                    evento.imagen,
                    evento.fecha,
                    evento.artefacto,
                    evento.anillo,
                    evento.amuleto,
                    evento.armaduras,
                    evento.armas,
                    evento.runas,
                    evento.extras,
                    evento.outfit,
                    evento.tipo,
                    evento.dragon_rojo
                ))
            })
        },
        error: function(error){
            console.error("Error del servicio")
            console.log(error)
        }
    })
    
}

function crearTarjetaEvento(id, nombre, logo, fecha, artefacto, anillo, amuleto, armaduras, armas, runas, extras, outfit, tipo, dragon_rojo) {

    if (fecha==null) fecha='';

    var contenido = "<div class='col-xl-3 col-sm-6 mb-5'><div class='bg-dark rounded shadow-sm py-4 px-3'>";

    if (logo) contenido += "<img src='img/eventos/" + logo + "' alt='" + nombre + "' class='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm bg-dark logo-evento'>";
    
    if (nombre) contenido += "<h5 class='mb-0'>" + nombre + "</h5>"

    if (tipo) contenido += "<img src='img/eventos/tipos/"+tipo+".png' class='tipo-evento' alt='"+tipo+"' title='"+tipo+"'></img>";

    contenido +="<span class='small text-uppercase text-muted'>" + fecha + "</span>"

    if (dragon_rojo) contenido += "<img src='img/eventos/tipos/dragon_rojo.png' class='dragon-rojo' alt='Dragon Rojo' title='Dragon Rojo'></img>";

    contenido += "<ul class='list-group list-group-flush bg-dark mb-0 mt-3'>";

    if (artefacto) contenido += "<li class='list-group-item bg-dark p-0 border-0 artefacto'><a href='#' data-toggle='modal' data-target='#artefactoModal' data-evento='"+id+"'><img src='img/eventos/artefactos/" + artefacto + "' alt='" + artefacto + "' class='img-fluid mb-3'></a></li>";
    
    if (anillo || amuleto) contenido += "<li class='list-group-item bg-dark p-0 border-0 joyeria'>";

    if (anillo) contenido += "<a href='#' data-toggle='modal' data-target='#anilloModal' data-evento='"+id+"'><img src='img/eventos/anillos/" + anillo + "' alt='" + anillo + "' class='img-fluid mb-3'></a>";
    if (amuleto) contenido += "<a href='#' data-toggle='modal' data-target='#amuletoModal' data-evento='"+id+"'><img src='img/eventos/amuletos/" + amuleto + "' alt='" + amuleto + "' class='img-fluid mb-3'></a>";
   
    if (anillo || amuleto) contenido += "</li>";

    if (armaduras) contenido += "<li class='list-group-item bg-dark p-0 border-0 armaduras'><img src='img/eventos/armaduras/" + armaduras + "' alt='" + armaduras + "' class='img-fluid mb-3'></li>";
    if (armas) contenido += "<li class='list-group-item bg-dark p-0 border-0 armas'><img src='img/eventos/armas/" + armas + "' alt='" + armas + "' class='img-fluid mb-3'></li>";
    if (runas) contenido += "<li class='list-group-item bg-dark p-0 border-0 runas'><a href='#' data-toggle='modal' data-target='#runasModal' data-evento='"+id+"'><img src='img/eventos/runas/" + runas + "' alt='" + runas + "' class='img-fluid mb-3'></a></li>";
    if (extras) contenido += "<li class='list-group-item bg-dark p-0 border-0 extras'><img src='img/eventos/extras/" + extras + "' alt='" + extras + "' class='img-fluid mb-3'></li>";

    //if (outfit) contenido += "<li class='list-group-item bg-dark p-0 border-0 outfit'><img src='img/eventos/outfit/" + outfit + "' alt='" + outfit + "' class='img-fluid mb-3'></li>";
    
    contenido += "</ul></div></div>";

    var tarjeta = $(contenido);

    return tarjeta;

}
