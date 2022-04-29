jQuery.expr[':'].contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
   };

$('#buscar').on('keyup',function () {
    $('.card').removeClass('d-none');
    var filter = $(this).val().toUpperCase();
    $('#contenedor').find(".card-title:not(:contains(" + filter + "))").parent().parent().parent().parent().addClass('d-none');
});

$('#indispensable').click(function () {
    $('#buscar').val('');
    $('.btn-group .active').removeClass('active');
    $('.card').removeClass('d-none');

    if (!$(this).hasClass('active')) {
        $('.btn-group .active').removeClass('active');
        $(this).addClass('active');
        $('#contenedor').find(".nivel:not(:contains('Indispensable'))").parent().parent().parent().parent().parent().toggleClass('d-none');
    } else {
        $('.btn-group .active').removeClass('active');
    }
});

$('#honroso').click(function () {
    $('#buscar').val('');
    $('.btn-group .active').removeClass('active');
    $('.card').removeClass('d-none');

    if (!$(this).hasClass('active')) {
        $('.btn-group .active').removeClass('active');
        $(this).addClass('active');
        $('#contenedor').find(".nivel:not(:contains('Honroso'))").parent().parent().parent().parent().parent().toggleClass('d-none');
    } else {
        $('.btn-group .active').removeClass('active');
    }
});

$('#olvidable').click(function () {
    $('#buscar').val('');
    $('.btn-group .active').removeClass('active');
    $('.card').removeClass('d-none');

    if (!$(this).hasClass('active')) {
        $('.btn-group .active').removeClass('active');
        $(this).addClass('active');
        $('#contenedor').find(".nivel:not(:contains('Olvidable'))").parent().parent().parent().parent().parent().toggleClass('d-none');
    } else {
        $('.btn-group .active').removeClass('active');
    }
});

$('#sin-info').click(function () {
    $('#buscar').val('');
    $('.card').removeClass('d-none');

    if (!$(this).hasClass('active')) {
        $('.btn-group .active').removeClass('active');
        $(this).addClass('active');
        $('#contenedor').find(".nivel:not(:contains('Sin información'))").parent().parent().parent().parent().parent().toggleClass('d-none');
    } else {
        $('.btn-group .active').removeClass('active');
    }
});

$('#nuevo').click(function () {
    $('#buscar').val('');
    $('.btn-group .active').removeClass('active');
    $('.card').removeClass('d-none');

    if (!$(this).hasClass('active')) {
        $('.btn-group .active').removeClass('active');
        $(this).addClass('active');
        $('#contenedor').find(".nivel:not(:contains('nuevo'))").parent().parent().parent().parent().parent().toggleClass('d-none');
    } else {
        $('.btn-group .active').removeClass('active');
    }
});

$('#reacondicionado').click(function () {
    $('#buscar').val('');
    $('.btn-group .active').removeClass('active');
    $('.card').removeClass('d-none');

    if (!$(this).hasClass('active')) {
        $('.btn-group .active').removeClass('active');
        $(this).addClass('active');
        $('#contenedor').find(".nivel:not(:contains('Reacondicionado'))").parent().parent().parent().parent().parent().toggleClass('d-none');
    } else {
        $('.btn-group .active').removeClass('active');
    }
});