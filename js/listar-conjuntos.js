$(document).ready(function () {
    obtenerListadoConjunto();
});

/*
function obtenerListadoConjunto() {
    $.getJSON("json/conjuntos-antiguos.json", function(conjuntos){
            listarConjuntos(conjuntos);
    }).fail(function(){
        console.log("Error al leer el json");
    });
}
*/
function obtenerListadoConjunto() {
    $.get({
        url: "https://hc.infobreras.org/listar.php?t=conjuntos_antiguos",
        success: function (conjuntos) {
            console.log(conjuntos);

            listarConjuntos(conjuntos);
        },
        error: function (error) {
            console.error("Error del servicio")
            console.log(error)
        }
    })

}

function listarConjuntos(conjuntos) {
    var contenedor = $('#contenedor')
    contenedor.empty()

    $.each(conjuntos, function (i, conjunto) {

        var imagenes = [
            { src: conjunto.armadura_img, alt: conjunto.armadura_alt},
            { src: conjunto.esencia_img, alt: conjunto.esencia_alt},
            { src: conjunto.material_legendario_img, alt: conjunto.material_legendario_alt},
            { src: conjunto.material_epico_img, alt: conjunto.material_epico_alt},
            { src: conjunto.material_raro1_img, alt: conjunto.material_raro1_alt},
            { src: conjunto.material_raro2_img, alt: conjunto.material_raro2_alt}
        ]
        var tarjetaConstruida = generarConjunto(conjunto.tipo, conjunto.nombre, conjunto.descripcion, conjunto.nivel, conjunto.arma,
            conjunto.armadura, imagenes);

        contenedor.append(tarjetaConstruida)
    });
}

function generarConjunto(tipo, nombre, descripcion, nivel, arma, armadura, imagenes) {

    var tarjeta = "<div class='card mb-3 ";
    if (tipo == "Tanque") {
        tarjeta += 'tanque'
    } else if (tipo == "Mago") {
        tarjeta += 'mago'
    } else if (tipo == "Arquero") {
        tarjeta +='arquero'
    }
    tarjeta += "'></div>";

   
    var tarjetaImagenes = "<div class='row no-gutters'><div class='col-md-4 imagenes'>"
    
    if (imagenes[0].src) tarjetaImagenes += "<img class='armadura' src='img/conjuntos-antiguos/" + imagenes[0].src + "' alt='" + imagenes[0].alt + "'><br />"
    if (imagenes[1].src) tarjetaImagenes += "<img class='esencia' src='img/conjuntos-antiguos/esencias/" + imagenes[1].src + "' alt='" + imagenes[1].alt + "'><br />"
    
    if (imagenes[2].src) tarjetaImagenes += "<img src='img/conjuntos-antiguos/materiales/legendario/" + imagenes[2].src + "' alt='" + imagenes[2].alt + "'>"
    if (imagenes[3].src) tarjetaImagenes += "<img src='img/conjuntos-antiguos/materiales/epico/" + imagenes[3].src + "' alt='" + imagenes[3].alt + "'><br />"
    if (imagenes[4].src) tarjetaImagenes += "<img class='esencia-azul' src='img/conjuntos-antiguos/materiales/raro/" + imagenes[4].src + "' alt='" + imagenes[4].alt + "'>"
    if (imagenes[5].src) tarjetaImagenes += "<img class='esencia-azul' src='img/conjuntos-antiguos/materiales/raro/" + imagenes[5].src + "' alt='" + imagenes[5].alt + "'>"
    
    tarjetaImagenes += "</div>";

    var tarjetaDescripcion = "<div class='col-md-8'><div class='card-body'>" +
        "<h4 class='card-title amarilloso'>" + nombre + "</h4>" +
        "<p class='card-text gris'><b class='nivel blanco'>" + nivel + "</b>" + descripcion + "</p>" +
        "<p class='card-text petroleo'><b>Tipo de arma: </b>" + arma + "</p>"

        if (armadura == "Arquero") {
            tarjetaDescripcion += "<p class='card-text verde'><b>Tipo de armadura: </b>" + armadura +"</p>"
        }

        tarjetaDescripcion += "</div></div></div>"

    return $(tarjeta).html(tarjetaImagenes+tarjetaDescripcion)
}
