$('#buscar').on('keyup',function () {
    $('.card').show();
    var filter = $(this).val().toUpperCase();
    $('#contenedor').find(".card-title:not(:contains(" + filter + "))").parent().parent().parent().parent().addClass('d-none');
});

$('#indispensable').click(function () {
    $('.card').show();
    $('#buscar').val('');
    $('.btn-group .active').removeClass('active');
    $(this).addClass('active');
    $('#contenedor').find(".nivel:not(:contains('Indispensable'))").parent().parent().parent().parent().toggleClass('d-none');
});

$('#interesante').click(function () {
    $('.card').show();
    $('#buscar').val('');
    $('.btn-group .active').removeClass('active');
    $(this).addClass('active');
    $('#contenedor').find(".nivel:not(:contains('Interesante'))").parent().parent().parent().parent().toggleClass('d-none');
});

$('#olvidable').click(function () {
    $('.card').show();
    $('#buscar').val('');
    $('.btn-group .active').removeClass('active');
    $(this).addClass('active');
    $('#contenedor').find(".nivel:not(:contains('Olvidable'))").parent().parent().parent().parent().toggleClass('d-none');
});

$('#sin-info').click(function () {
    $('.card').removeClass('d-none');
    $('#buscar').val('');
    $('.btn-group .active').removeClass('active');
    $(this).addClass('active');
    $('#contenedor').find(".nivel:not(:contains('Sin información'))").parent().parent().parent().parent().toggleClass('d-none');
});