$('#anilloModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var idEvento = button.data('evento')
    $.get({
        url: "https://hc.infobreras.org/detallar.php?t=amuletos&w=id_evento&id=" + idEvento,
        success: function (amuleto) {
            console.log(amuleto);

            if (anillo == 0) {
                $('#amuletoModalLabel').text('No disponible');
                $('#amuletoModal p.descripcion').text('Pronto agregaremos la descripción.');

                $('#amuletoModalLabel').fadeIn();
                $('#amuletoModal p.descripcion').fadeIn();

            } else {
                $('#amuletoModal .modal-header img').attr('src', 'img/eventos/amuletos/' + amuleto.imagen).attr('alt', amuleto.nombre);
                $('#amuletoModalLabel').text(amuleto.nombre);

                $('#anillamuletoModalLabelModalLabel').fadeIn();

                if (amuleto.descripcion) {
                    $('#amuletoModal p.descripcion').text(amuleto.descripcion);
                } else {
                    $('#amuletoModal p.descripcion').text('Pronto...');
                }
                $('#amuletoModal p.descripcion').fadeIn();
                let elementToFindDigitsIn = document.querySelector('#amuletoModal p.descripcion');
                elementToFindDigitsIn.innerHTML =
                    elementToFindDigitsIn
                        .textContent
                        .replace(/(\$?\d+)/g, '<span>$1</span>').replace(/(\$?\%+)/g, '<span>$1</span>');

                if (amuleto.imagen) {
                    $('#amuletoModal .modal-header img').fadeIn();
                }


            }
        },
        error: function (error) {
            console.error("Error del servicio")
            console.log(error)
        }
    })

});

$('#anilloModal').on('hidden.bs.modal', function (event) {
    $('#amuletoModalLabel').hide();
    $('#amuletoModal p.descripcion').hide();
    $('#amuletoModal .modal-header img').hide();
});