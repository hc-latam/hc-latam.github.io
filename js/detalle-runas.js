$('#runasModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var idEvento = button.data('evento')
    $.get({
        url: "https://hc.infobreras.org/detallar.php?t=runas&w=id_evento&id=" + idEvento,
        success: function (runa) {
            console.log(runa);

            if (runa == 0) {

                $('#runasModal #conflicto p.mejorar').hide();
                $('#runasModal .modal-content .tipo').hide();
                $('#runasModal #masacre').hide();
                $('#runasModal #diversion').hide();

                $('#runasModal #conflicto .modal-title').text('No disponible');
                $('#runasModal #conflicto p.descripcion').text('Pronto agregaremos la descripción de las runas.');
                $('#runasModal #conflicto .modal-header img').attr('src', 'img/general/pronto.png').attr('alt', 'Pronto...');

                $('#runasModal #conflicto').fadeIn();

            } else {

                $('#runasModal #conflicto').show();
                $('#runasModal #masacre').show();
                $('#runasModal #diversion').show();

                $('#runasModal #conflicto .modal-header img').attr('src', 'img/eventos/runas/' + runa.conflicto_imagen + '.png').attr('alt', runa.conflicto_nombre);
                $('#runasModal #masacre .modal-header img').attr('src', 'img/eventos/runas/' + runa.masacre_imagen + '.png').attr('alt', runa.masacre_nombre);
                $('#runasModal #diversion .modal-header img').attr('src', 'img/eventos/runas/' + runa.diversion_imagen + '.png').attr('alt', runa.diversion_nombre);

                $('#runasModal #conflicto .modal-title').text('Runa ' + runa.conflicto_nombre);
                $('#runasModal #conflicto .modal-title').fadeIn();
                $('#runasModal #masacre .modal-title').text('Runa ' + runa.masacre_nombre);
                $('#runasModal #masacre .modal-title').fadeIn();
                $('#runasModal #diversion .modal-title').text('Runa ' + runa.diversion_nombre);
                $('#runasModal #diversion .modal-title').fadeIn();

                $('#runasModal .modal-body .mejorar').text('Se usa para mejorar ' + runa.mejorar);
                $('#runasModal .modal-body .mejorar').show();

                $('#runasModal .modal-body .descripcion').html('Usa la runa con un ' + runa.descripcion_usa_con +
                    ' para <span>' + runa.descripcion_destacada + '</span> ' + runa.descripcion_restante + '<br /> ' +
                    'Puedes retirar la runa en cualquier momento y usarla en otra ' + runa.descripcion_usa_con + '.');
                $('#runasModal .modal-body .descripcion').show();

                if (runa.conflicto_tipo) {
                    $('#runasModal #conflicto.modal-content .tipo').html('<img src="img/tipos-personajes/' + runa.conflicto_tipo + '.png" alt="Tipo ' + runa.conflicto_tipo + '" />Tipo: ' + runa.conflicto_tipo);
                    $('#runasModal #masacre.modal-content .tipo').html('<img src="img/tipos-personajes/' + runa.masacre_tipo + '.png" alt="Tipo ' + runa.masacre_tipo + '" />Tipo: ' + runa.masacre_tipo);
                    $('#runasModal #diversion.modal-content .tipo').html('<img src="img/tipos-personajes/' + runa.diversion_tipo + '.png" alt="Tipo ' + runa.diversion_tipo + '" />Tipo: ' + runa.diversion_tipo);
                    $('#runasModal .modal-content .tipo').show();
                } else {
                    $('#runasModal .modal-content .tipo').hide();
                }

                if (runa.difieren === "1") {
                    var mejorar = $('#runasModal #conflicto .modal-body .mejorar').text();
                    $('#runasModal #conflicto .modal-body .mejorar').text(mejorar + 'de ' + runa.conflicto_tipo + 's');
                    $('#runasModal #masacre .modal-body .mejorar').text(mejorar + 'de ' + runa.masacre_tipo + 's');
                    $('#runasModal #diversion .modal-body .mejorar').text(mejorar + 'de ' + runa.diversion_tipo + 's');

                    var descripcion = $('#runasModal #conflicto .modal-body .descripcion').text();
                    $('#runasModal #conflicto .modal-body .descripcion').text(descripcion.replace("REMPLAZAR", runa.conflicto_tipo.toUpperCase()));
                    $('#runasModal #masacre .modal-body .descripcion').text(descripcion.replace("REMPLAZAR", runa.masacre_tipo.toUpperCase()));
                    $('#runasModal #diversion .modal-body .descripcion').text(descripcion.replace("REMPLAZAR", runa.diversion_tipo.toUpperCase()));

                    let elementoTanqueMejorar = document.querySelector('#runasModal .modal-body .mejorar');
                    elementoTanqueMejorar.innerHTML = elementoTanqueMejorar.textContent.replace('Tanques', 'Guerreros');

                    let elementoTanqueDescripcion = document.querySelector('#runasModal .modal-body .descripcion');
                    elementoTanqueDescripcion.innerHTML = elementoTanqueDescripcion.textContent.replace('TANQUE', 'GUERRERO');
                }

                $('#runasModal .modal-header img').show();

                $('#runasModal #conflicto').fadeIn();
                $('#runasModal #masacre').fadeIn();
                $('#runasModal #diversion').fadeIn();


            }
        },
        error: function (error) {
            console.error("Error del servicio")
            console.log(error)
        }
    })

});

$('#runasModal').on('hidden.bs.modal', function (event) {
    $('#runasModal .modal-title').text('');
    $('#runasModal p.descripcion').text('');
    $('#runasModal .modal-header img').attr('src', '');

    $('#runasModal #conflicto').fadeOut();
    $('#runasModal #masacre').fadeOut();
    $('#runasModal #diversion').fadeOut();
});