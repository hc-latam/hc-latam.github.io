//BUSCADOR
jQuery.expr[':'].contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
   };
   
   $('#buscar1').on('keyup',function () {
       $('.card').show();
       var filter = $(this).val().toUpperCase();
       $('#contenedor').find(".card-title:not(:contains(" + filter + "))").parent().parent().parent().parent().css('display','none');
   });
   
   $('#buscar2').on('keyup',function () {
       $('.card').show();
       var filter = $(this).val().toUpperCase();
       $('#contenedor').find(".card-title:not(:contains(" + filter + "))").parent().parent().parent().css('display','none');
   });

// BOTONERA
$('#horizontal').on('click',function () {
    $('.bus1').removeClass('d-none')
    $('.bus2').addClass('d-none')
    
    listarJefes();
    
    $('#horizontal').addClass('active')
    $('#vertical').removeClass('active')
});

$('#vertical').on('click',function () {
    $('.bus1').addClass('d-none')
    $('.bus2').removeClass('d-none')
    
    listarJefes2();
    
     $('#horizontal').removeClass('active')
     $('#vertical').addClass('active')
});

