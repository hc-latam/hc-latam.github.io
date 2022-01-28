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