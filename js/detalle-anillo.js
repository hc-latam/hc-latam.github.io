$('#anilloModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var idEvento = button.data('evento')
    $.get({
        url: "https://hc.infobreras.org/detallar.php?t=anillos&w=id_evento&id=" + idEvento,
        success: function (anillo) {
            console.log(anillo);

            if (anillo == 0) {
                $('#anilloModalLabel').text('No disponible');
                $('#anilloModal p.descripcion').text('Pronto agregaremos la descripción del anillo.');
                $('#anilloModal .modal-header img').attr('src', 'img/general/pronto.png').attr('alt', 'Pronto...');

                $('#anilloModalLabel').fadeIn();
                $('#anilloModal p.descripcion').fadeIn();
                $('#anilloModal .modal-header img').fadeIn();

            } else {
                if (anillo.imagen) {
                    $('#anilloModal .modal-header img').attr('src', 'img/eventos/anillos/' + anillo.imagen).attr('alt', anillo.nombre);
                } else {
                    $('#anilloModal .modal-header img').attr('src', 'img/general/pronto.png').attr('alt', 'Pronto...');
                }
                
                $('#anilloModalLabel').text(anillo.nombre);
                $('#anilloModalLabel').fadeIn();

                if (anillo.descripcion) {
                    $('#anilloModal p.descripcion').text(anillo.descripcion);
                } else {
                    $('#anilloModal p.descripcion').text('Pronto...');
                }
                $('#anilloModal p.descripcion').fadeIn();
                let elementToFindDigitsIn = document.querySelector('#anilloModal p.descripcion');
                elementToFindDigitsIn.innerHTML =
                    elementToFindDigitsIn
                        .textContent
                        .replace(/(\$?\d+)/g, '<span>$1</span>').replace(/(\$?\%+)/g, '<span>$1</span>');

                $('#anilloModal .modal-header img').fadeIn();
            }
        },
        error: function (error) {
            console.error("Error del servicio")
            console.log(error)
        }
    })

});

$('#anilloModal').on('hidden.bs.modal', function (event) {
    $('#anilloModalLabel').hide();
    $('#anilloModal p.descripcion').hide();
    $('#anilloModal .modal-header img').hide();
});