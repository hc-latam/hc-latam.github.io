$('#artefactoModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var idEvento = button.data('evento')
    $.get({
        url: "https://hc.infobreras.org/detallar.php?t=artefactos&w=id_evento&id=" + idEvento,
        success: function (artefacto) {
            console.log(artefacto);

            if (artefacto == 0) {
                $('#artefactoModalLabel').text('No disponible');
                $('#artefactoModal p.descripcion').text('Pronto agregaremos la descripción.');
                $('#artefactoModal .modal-header img').attr('src', 'img/general/pronto.png').attr('alt', 'Pronto...');

                $('#artefactoModalLabel').fadeIn();
                $('#artefactoModal p.descripcion').fadeIn();
                $('#artefactoModal .modal-header img').fadeIn();

            } else {


                $('#artefactoModalLabel').text(artefacto.nombre);
                $('#artefactoModal p.descripcion').text(artefacto.descripcion);
                $('#artefactoModal p.activa span').text(artefacto.se_activa);
                $('#artefactoModal p.subtitulo').text(artefacto.sub_titulo);
                $('#artefactoModal .modal-header img').attr('src', 'img/eventos/artefactos/' + artefacto.imagen).attr('alt', 'img/eventos/artefactos/' + artefacto.nombre);

                let elementToFindDigitsIn = document.querySelector('p.descripcion');
                elementToFindDigitsIn.innerHTML =
                    elementToFindDigitsIn
                        .textContent
                        .replace(/(\$?\d+)/g, '<span>$1</span>').replace(/(\$?\%+)/g, '<span>$1</span>');

                $('#artefactoModalLabel').fadeIn();
                $('#artefactoModal p.descripcion').fadeIn();
                $('#artefactoModal p.activa').fadeIn();
                $('#artefactoModal p.subtitulo').fadeIn();
                $('#artefactoModal .modal-header img').fadeIn();

                if (artefacto.tiempo) {
                    $('#artefactoModal p.tiempo span').text(artefacto.tiempo);
                    $('#artefactoModal p.tiempo').fadeIn();
                }
            }
        },
        error: function (error) {
            console.error("Error del servicio")
            console.log(error)
        }
    })

});

$('#artefactoModal').on('hidden.bs.modal', function (event) {
    $('#artefactoModalLabel').hide();
    $('#artefactoModal p.descripcion').hide();
    $('#artefactoModal p.activa').hide();
    $('#artefactoModal p.subtitulo').hide();
    $('#artefactoModal p.tiempo').hide();
    $('#artefactoModal .modal-header img').hide();
});