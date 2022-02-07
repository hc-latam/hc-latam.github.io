$(document).ready(function() {
    obtenerListadoConjunto();
});

function obtenerListadoConjunto() {
    $.getJSON("json/conjuntos-antiguos.json", function(conjuntos){
            console.log(conjuntos)
            listarConjuntos(conjuntos);
    }).fail(function(){
        console.log("Error al leer el json");
    });
}

function listarConjuntos(conjuntos) {
    var contenedor = $('#contenedor')
    contenedor.empty()

    $.each(conjuntos, function(i, conjunto) {
        var tarjetaConstruida = generarConjunto(conjunto.nombre, conjunto.descripcion, conjunto.nivel, conjunto.imagenes)
        
        contenedor.append(tarjetaConstruida)
    });
}

function generarConjunto(nombre, descripcion, nivel, imagenes) {

    var tarjeta = $("<div class='card mb-3'><div class='row no-gutters'><div class='col-md-4 imagenes'>"+
        "<img class='armadura' src='img/conjuntos-antiguos/" + imagenes[0].src + "' alt='" + imagenes[0].alt + "'><br />"+
        "<img class='esencia' src='img/conjuntos-antiguos/esencias/" + imagenes[1].src + "' alt='" + imagenes[1].alt + "'><br />"+
        "<img src='img/conjuntos-antiguos/esencias/" + imagenes[2].src + "' alt='" + imagenes[2].alt + "'>"+
        "<img src='img/conjuntos-antiguos/esencias/" + imagenes[3].src + "' alt='" + imagenes[3].alt + "'>"+
        "<img class='esencia-azul' src='img/conjuntos-antiguos/esencias/" + imagenes[4].src + "' alt='" + imagenes[4].alt + "'>"+
        "<img class='esencia-azul' src='img/conjuntos-antiguos/esencias/" + imagenes[5].src + "' alt='" + imagenes[5].alt + "'>"+
      "</div><div class='col-md-8'><div class='card-body'>"+
          "<h4 class='card-title amarilloso'>" + nombre + "</h4>"+
          "<p class='card-text gris'>"+ descripcion +"</p>"+
          "<p class='card-text petroleo'>"+ nivel +"</p>"+
        "</div></div></div></div>")


    return tarjeta    
}
