$('#amuletoModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var idEvento = button.data('evento')
    $.get({
        url: "https://hc.infobreras.org/detallar.php?t=runas&w=id_evento&id=" + idEvento,
        success: function (runa) {
            console.log(runa);

            if (runa == 0) {
                /*
                $('#amuletoModalLabel').text('No disponible');
                $('#amuletoModal p.descripcion').text('Pronto agregaremos la descripción del amuleto.');
                $('#amuletoModal .modal-header img').attr('src', 'img/general/pronto.png').attr('alt', 'Pronto...');

                $('#amuletoModalLabel').fadeIn();
                $('#amuletoModal p.descripcion').fadeIn();
                $('#amuletoModal .modal-header img').fadeIn();
*/
            } else {

                $('#runasModal #conflicto .modal-header img').attr('src', 'img/eventos/runas/' + runa.conflicto_imagen).attr('alt', runa.conflicto_nombre);
                $('#runasModal #masacre .modal-header img').attr('src', 'img/eventos/runas/' + runa.masacre_imagen).attr('alt', runa.masacre_nombre);
                $('#runasModal #diversion .modal-header img').attr('src', 'img/eventos/runas/' + runa.diversion_imagen).attr('alt', runa.diversion_nombre);

                $('#runasModal #conflicto .modal-title').text('Runa ' + runa.conflicto_nombre);
                $('#runasModal #conflicto .modal-title').fadeIn();
                $('#runasModal #masacre .modal-title').text('Runa ' + runa.masacre_nombre);
                $('#runasModal #masacre .modal-title').fadeIn();
                $('#runasModal #diversion .modal-title').text('Runa ' + runa.diversion_nombre);
                $('#runasModal #diversion .modal-title').fadeIn();

                $('#runasModal .modal-body .activa').text('Se usa para mejorar ' + runa.titulo);
                $('#runasModal .modal-body .activa').fadeIn();

                $('#runasModal .modal-body .descripcion').html('Usa la runa con un ' + runa.usa_con +
                    'para <span>' + runa_descripcion + '</span> una de sus habilidades.<br /> ' +
                    'Puedes retirar la runa en cualquier momento y usarla en otra ' + runa.usa_con + '.');
                $('#runasModal .modal-body .descripcion').fadeIn();

                if (runa.conflicto_tipo) {
                    $('#runasModal #conflicto .modal-content .tipo').html('<img src="img/tipos/' + runa.conflicto_tipo + '.png" alt="Tipo ' + runa.conflicto_tipo + '" />Tipo: ' + runa.conflicto_tipo);
                    $('#runasModal #conflicto .modal-content .tipo').fadeIn();
                    $('#runasModal #masacre .modal-content .tipo').html('<img src="img/tipos/' + runa.masacre_tipo + '.png" alt="Tipo ' + runa.masacre_tipo + '" />Tipo: ' + runa.masacre_tipo);
                    $('#runasModal #masacre .modal-content .tipo').fadeIn();
                    $('#runasModal #diversion .modal-content .tipo').html('<img src="img/tipos/' + runa.diversion_tipo + '.png" alt="Tipo ' + runa.diversion_tipo + '" />Tipo: ' + runa.diversion_tipo);
                    $('#runasModal #diversion .modal-content .tipo').fadeIn();
                }

                $('#runasModal #conflicto .modal-header img').fadeIn();
                $('#runasModal #masacre .modal-header img').fadeIn();
                $('#runasModal #diversion .modal-header img').fadeIn();

            }
        },
        error: function (error) {
            console.error("Error del servicio")
            console.log(error)
        }
    })

});

$('#amuletoModal').on('hidden.bs.modal', function (event) {
    $('#amuletoModalLabel').hide();
    $('#amuletoModal p.descripcion').hide();
    $('#amuletoModal .modal-header img').hide();
});