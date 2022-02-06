var jefes;

$(document).ready(function() {
    //obtenerListadoGET();
    obtenerListadoJSON();
    $('.bus2').addClass('d-none')
});

/*
function obtenerListadoGET(){
    $.get({
        url: "https://aaravena.laboratoriodiseno.cl/js2020/api/modelo/listar.php?tabla=jefes_mazmorras",
        success: function(listado){
            jefes = $.parseJSON(listado)
            console.log(jefes)
            listarJefes();
        },
        error: function(error){
            console.error("Error del servicio")
            console.log(error)
        }
    })
    
}
*/

function obtenerListadoJSON() {
    $.getJSON("json/jefes-mazmorras.json", function(listado){
            jefes = listado
            console.log(jefes)
            listarJefes();
    }).fail(function(){
        console.log("Error al leer el json");
    });
}

function listarJefes() {
    var contenedor = $('#contenedor')
    contenedor.empty()

    $.each(jefes, function(i, jefe) {
        var tarjetaConstruida = generarJefe(jefe.titulo, jefe.lema, jefe.caracteristicas, jefe.equipo, jefe.imagen)
        
        contenedor.append(tarjetaConstruida)
    });
}

function listarJefes2() {
    var contenedor = $('#contenedor')
    contenedor.empty()

    $.each(jefes, function(i, jefe) {
        var tarjetaConstruida = generarJefe2(jefe.titulo, jefe.lema, jefe.caracteristicas, jefe.equipo, jefe.imagen)
        
        contenedor.append(tarjetaConstruida)
    });
}

function generarJefe(titulo, lema, caracteristicas, equipo, imagen) {

    var tarjeta = $("<div></div>").addClass("card w-300")
    
    var div1 = $("<div></div>").addClass("row no-gutters")
    var divImg = $("<div></div>").addClass("col-md-5")
    var imagenT = $("<img />")
    imagenT.attr('src', imagen)
    imagenT.addClass("card-img")
    imagenT.attr("alt", titulo)
    divImg.append(imagenT)
    div1.append(divImg)
    
    
    var divtexto = $("<div></div>").addClass("col-md-7")
    var divBody = $("<div></div>").addClass('card-body')
    var tituloT = $('<h5></h5>').addClass('card-title celeste').text(titulo)
    var lemT = $('<p></p>').addClass('naranja small').text(lema)
    divBody.append(tituloT)
    divBody.append(lemT)
    
    divtexto.append(divBody)
    div1.append(divtexto)
    
    var caracTs = caracteristicas.split(',')
    var lista = $('<ul></ul>').addClass('verdoso')
    $.each(caracTs, function(i, car) {
        var elem = $('<li></li>').text(car)
        lista.append(elem)
    });
    //divBody.append(lista)
    div1.append(lista)
    
    var equipT = $('<p></p>').addClass('card-text blanco').append($('<small></small>').addClass('font-weight-bold').text(equipo))
    div1.append(equipT)
    
    tarjeta.append(div1)


    return tarjeta    
}

function generarJefe2(titulo, lema, caracteristicas, equipo, imagen) {
    
    var tarjeta = $("<div></div>").addClass("card w-300")
    var tarjetaInterior = $("<div></div>").addClass("interior")

    var imagenT = $("<img />")
    imagenT.attr('src', imagen)
    imagenT.addClass("card-img-top")
    imagenT.attr("alt", titulo)
    tarjetaInterior.append(imagenT)

    var divBody = $("<div></div>").addClass('card-body')

    var tituloT = $('<h5></h5>').addClass('card-title celeste').text(titulo)
    var lemT = $('<p></p>').addClass('naranja small').text(lema)
    divBody.append(tituloT)
    divBody.append(lemT)
    
    var caracTs = caracteristicas.split(',')
    var lista = $('<ul></ul>').addClass('verdoso')
    $.each(caracTs, function(i, car) {
        var elem = $('<li></li>').text(car)
        lista.append(elem)
    });
    divBody.append(lista)
    
    tarjetaInterior.append(divBody)

    var divFooter = $("<div></div>").addClass('card-footer')
    
    var equipT = $('<p></p>').addClass('card-text blanco').append($('<small></small>').addClass('font-weight-bold').text(equipo))
    divFooter.append(equipT)
    
    tarjetaInterior.append(divFooter)
    tarjeta.append(tarjetaInterior)
    return tarjeta    
}
