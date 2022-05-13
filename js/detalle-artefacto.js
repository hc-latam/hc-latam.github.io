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
                $('#artefactoModal .modal-header img').attr('src', 'img/eventos/artefactos/' + artefacto.imagen).attr('alt', 'img/eventos/artefactos/' + artefacto.nombre);
                $('#artefactoModalLabel').text(artefacto.nombre);

                $('#artefactoModalLabel').fadeIn();

                if (artefacto.descripcion) {
                    $('#artefactoModal p.descripcion').text(artefacto.descripcion);
                } else {
                    $('#artefactoModal p.descripcion').text('Pronto...');
                }
                $('#artefactoModal p.descripcion').fadeIn();
                let elementToFindDigitsIn = document.querySelector('p.descripcion');
                elementToFindDigitsIn.innerHTML =
                    elementToFindDigitsIn
                        .textContent
                        .replace(/(\$?\d+)/g, '<span>$1</span>').replace(/(\$?\%+)/g, '<span>$1</span>');

                if (artefacto.se_activa) {
                    $('#artefactoModal p.activa span').text(artefacto.se_activa);
                    $('#artefactoModal p.activa').fadeIn();
                } else {
                    $('#artefactoModal p.activa').hide();
                }

                if (artefacto.sub_titulo) {
                    $('#artefactoModal p.subtitulo').text(artefacto.sub_titulo);
                    $('#artefactoModal p.subtitulo').fadeIn();
                } else {
                    $('#artefactoModal p.subtitulo').hide();
                }

                if (artefacto.tiempo) {
                    $('#artefactoModal p.tiempo span').text(artefacto.tiempo);
                    $('#artefactoModal p.tiempo').fadeIn();
                } else {
                    $('#artefactoModal p.tiempo').hide();
                }

                $('#artefactoModal .modal-header img').fadeIn();
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