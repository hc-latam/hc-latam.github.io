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
        var tarjetaConstruida = generarConjunto(conjunto.nombre, conjunto.descripcion, conjunto.nivel, conjunto.arma,
            imagenes);

        if (conjunto.tipo == "Tanque") {
            tarjetaConstruida.addClass('tanque');
        } else if (conjunto.tipo == "Mago") {
            tarjetaConstruida.addClass('mago');
        } else if (conjunto.tipo == "Arquero") {
            tarjetaConstruida.addClass('arquero');
        }

        if (conjunto.armadura == "Arquero") {
            console.log("Pintando");
            tarjetaConstruida.find('verde').html("<b>Tipo de armadura: </b>" + conjunto.armadura);
        }

        contenedor.append(tarjetaConstruida)
    });
}

function generarConjunto(nombre, descripcion, nivel, arma, imagenes) {

    var tarjeta = $("<div class='card mb-3'></div>").html("<div class='row no-gutters'><div class='col-md-4 imagenes'>" +
        "<img class='armadura' src='img/conjuntos-antiguos/" + imagenes[0].src + "' alt='" + imagenes[0].alt + "'><br />" +
        "<img class='esencia' src='img/conjuntos-antiguos/esencias/" + imagenes[1].src + "' alt='" + imagenes[1].alt + "'><br />" +
        "<img src='img/conjuntos-antiguos/materiales/legendario/" + imagenes[2].src + "' alt='" + imagenes[2].alt + "'>" +
        "<img src='img/conjuntos-antiguos/materiales/epico/" + imagenes[3].src + "' alt='" + imagenes[3].alt + "'><br />" +
        "<img class='esencia-azul' src='img/conjuntos-antiguos/materiales/raro/" + imagenes[4].src + "' alt='" + imagenes[4].alt + "'>" +
        "<img class='esencia-azul' src='img/conjuntos-antiguos/materiales/raro/" + imagenes[5].src + "' alt='" + imagenes[5].alt + "'>" +
        "</div><div class='col-md-8'><div class='card-body'>" +
        "<h4 class='card-title amarilloso'>" + nombre + "</h4>" +
        "<p class='card-text gris'><b class='nivel blanco'>" + nivel + "</b>" + descripcion + "</p>" +
        "<p class='card-text petroleo'><b>Tipo de arma: </b>" + arma + "</p>" +
        "<p class='card-text verde'></p>" +
        "</div></div></div>")

    return tarjeta
}
