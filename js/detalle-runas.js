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

                $('#runasModal #conflicto .modal-header img').attr('src', 'img/eventos/runas/' + runa.base_imagen + '-runa-conflicto.png').attr('alt', runa.conflicto_nombre);
                $('#runasModal #masacre .modal-header img').attr('src', 'img/eventos/runas/' + runa.base_imagen + '-runa-masacre.png').attr('alt', runa.masacre_nombre);
                $('#runasModal #diversion .modal-header img').attr('src', 'img/eventos/runas/' + runa.base_imagen + '-runa-diversion.png').attr('alt', runa.diversion_nombre);

                $('#runasModal #conflicto .modal-title').text('Runa ' + runa.conflicto_nombre);
                $('#runasModal #conflicto .modal-title').fadeIn();
                $('#runasModal #masacre .modal-title').text('Runa ' + runa.masacre_nombre);
                $('#runasModal #masacre .modal-title').fadeIn();
                $('#runasModal #diversion .modal-title').text('Runa ' + runa.diversion_nombre);
                $('#runasModal #diversion .modal-title').fadeIn();

                if (runa.conflicto_tipo) {
                    $('#runasModal #conflicto.modal-content .tipo').html('<img src="img/tipos-personajes/' + runa.conflicto_tipo + '.png" alt="Tipo ' + runa.conflicto_tipo + '" />Tipo: ' + runa.conflicto_tipo);
                    $('#runasModal #masacre.modal-content .tipo').html('<img src="img/tipos-personajes/' + runa.masacre_tipo + '.png" alt="Tipo ' + runa.masacre_tipo + '" />Tipo: ' + runa.masacre_tipo);
                    $('#runasModal #diversion.modal-content .tipo').html('<img src="img/tipos-personajes/' + runa.diversion_tipo + '.png" alt="Tipo ' + runa.diversion_tipo + '" />Tipo: ' + runa.diversion_tipo);
                    $('#runasModal .modal-content .tipo').show();
                } else {
                    $('#runasModal .modal-content .tipo').hide();
                }

                if (runa.difieren === "1") {
                    $('#runasModal #conflicto .modal-body .mejorar').text('Se usa para mejorar ' + runa.mejorar + ' de ' + runa.conflicto_tipo.toLowerCase() + 's');
                    $('#runasModal #masacre .modal-body .mejorar').text('Se usa para mejorar ' + runa.mejorar + ' de ' + runa.masacre_tipo.toLowerCase() + 's');
                    $('#runasModal #diversion .modal-body .mejorar').text('Se usa para mejorar ' + runa.mejorar + ' de ' + runa.diversion_tipo.toLowerCase() + 's');

                    $('#runasModal #conflicto .modal-body .descripcion').html('Usa la runa con un ' + runa.descripcion_usa_con +
                        ' para <span>' + runa.descripcion_destacada.replace("REMPLAZAR", runa.conflicto_tipo.toUpperCase()) + '</span> ' + runa.descripcion_restante + '<br /> ' +
                        'Puedes retirar la runa en cualquier momento y usarla en otra ' + runa.descripcion_usa_con + '.');
                    $('#runasModal #masacre .modal-body .descripcion').html('Usa la runa con un ' + runa.descripcion_usa_con +
                        ' para <span>' + runa.descripcion_destacada.replace("REMPLAZAR", runa.masacre_tipo.toUpperCase()) + '</span> ' + runa.descripcion_restante + '<br /> ' +
                        'Puedes retirar la runa en cualquier momento y usarla en otra ' + runa.descripcion_usa_con + '.');
                    $('#runasModal #diversion .modal-body .descripcion').html('Usa la runa con un ' + runa.descripcion_usa_con +
                        ' para <span>' + runa.descripcion_destacada.replace("REMPLAZAR", runa.diversion_tipo.toUpperCase()) + '</span> ' + runa.descripcion_restante + '<br /> ' +
                        'Puedes retirar la runa en cualquier momento y usarla en otra ' + runa.descripcion_usa_con + '.');
                } else if (runa.difieren === "2") {
                    $('#runasModal #conflicto .modal-body .mejorar').text('Se usa para mejorar ' + runa.mejorar);
                    $('#runasModal #masacre .modal-body .mejorar').text('Se usa para mejorar ' + runa.mejorar);
                    $('#runasModal #diversion .modal-body .mejorar').text('Se usa para mejorar ' + runa.mejorar);

                    $('#runasModal #conflicto .modal-body .descripcion').html('Usa la runa con un ' + runa.descripcion_usa_con +
                        ' para <span>' + runa.descripcion_destacada.replace("REMPLAZAR", runa.conflicto_tipo.toUpperCase()) + '</span> ' + runa.descripcion_restante + '<br /> ' +
                        'Puedes retirar la runa en cualquier momento y usarla en otra ' + runa.descripcion_usa_con + '.');
                    $('#runasModal #masacre .modal-body .descripcion').html('Usa la runa con un ' + runa.descripcion_usa_con +
                        ' para <span>' + runa.descripcion_destacada.replace("REMPLAZAR", runa.masacre_tipo.toUpperCase()) + '</span> ' + runa.descripcion_restante + '<br /> ' +
                        'Puedes retirar la runa en cualquier momento y usarla en otra ' + runa.descripcion_usa_con + '.');
                    $('#runasModal #diversion .modal-body .descripcion').html('Usa la runa con un ' + runa.descripcion_usa_con +
                        ' para <span>' + runa.descripcion_destacada.replace("REMPLAZAR", runa.diversion_tipo.toUpperCase()) + '</span> ' + runa.descripcion_restante + '<br /> ' +
                        'Puedes retirar la runa en cualquier momento y usarla en otra ' + runa.descripcion_usa_con + '.');
                } else if (runa.difieren === "3") {
                    var mejorasC = ''
                    var descripcion_usa_conC = '';
                    var tipoC = '';
                    if (runa.conflicto_tipo == "Hechicero") {
                        mejorasC = 'atuendos de hechiceros';
                        descripcion_usa_conC = 'atuendo';
                        tipoC = 'hechicero';
                    }
                    if (runa.conflicto_tipo == "Arquero") {
                        mejorasC = 'equipamiento de arqueros';
                        descripcion_usa_conC = 'conjunto de equipamiento';
                        tipoC = 'arquero';
                    }
                    if (runa.conflicto_tipo == "Tanque") {
                        mejorasC = 'armadura de guerreros';
                        descripcion_usa_conC = 'conjunto de armadura';
                        tipoC = 'guerrero';
                    }

                    var mejorasM = ''
                    var descripcion_usa_conM = '';
                    var tipoM = '';
                    if (runa.masacre_tipo == "Hechicero") {
                        mejorasM = 'atuendos de hechiceros';
                        descripcion_usa_conM = 'atuendo';
                        tipoM = 'hechicero';
                    }
                    if (runa.masacre_tipo == "Arquero") {
                        mejorasM = 'equipamiento de arqueros';
                        descripcion_usa_conM = 'conjunto de equipamiento';
                        tipoM = 'arquero';
                    }
                    if (runa.masacre_tipo == "Tanque") {
                        mejorasM = 'armadura de guerreros';
                        descripcion_usa_conM = 'conjunto de armadura';
                        tipoM = 'guerrero';
                    }

                    var mejorasD = ''
                    var descripcion_usa_conD = '';
                    var tipoD = '';
                    if (diversion_tipo == "Hechicero") {
                        mejorasD = 'atuendos de hechiceros';
                        descripcion_usa_conD = 'atuendo';
                        tipoD = 'hechicero';
                    }
                    if (runa.diversion_tipo == "Arquero") {
                        mejorasD = 'equipamiento de arqueros';
                        descripcion_usa_conD = 'conjunto de equipamiento';
                        tipoD = 'arquero';
                    }
                    if (runa.diversion_tipo == "Tanque") {
                        mejorasD = 'armadura de guerreros';
                        descripcion_usa_conD = 'conjunto de armadura';
                        tipoD = 'guerrero';
                    }

                    $('#runasModal #conflicto .modal-body .mejorar').text('Se usa para mejorar ' + mejorasC);
                    $('#runasModal #masacre .modal-body .mejorar').text('Se usa para mejorar ' + mejorasM);
                    $('#runasModal #diversion .modal-body .mejorar').text('Se usa para mejorar ' + mejorasD);

                    $('#runasModal #conflicto .modal-body .descripcion').html('Usa la runa con un ' + descripcion_usa_conC +
                    ' para <span>' + runa.descripcion_destacada.replace("REMPLAZAR", tipoC) + '</span> ' + runa.descripcion_restante + '<br /> ' +
                    'Puedes retirar la runa en cualquier momento y usarla en otra ' + descripcion_usa_conC + '.');


                    $('#runasModal #masacre .modal-body .descripcion').html('Usa la runa con un ' + descripcion_usa_conM +
                        ' para <span>' + runa.descripcion_destacada.replace("REMPLAZAR", tipoM) + '</span> ' + runa.descripcion_restante + '<br /> ' +
                        'Puedes retirar la runa en cualquier momento y usarla en otra ' + descripcion_usa_conM + '.');

                    $('#runasModal #diversion .modal-body .descripcion').html('Usa la runa con un ' + descripcion_usa_conD +
                        ' para <span>' + runa.descripcion_destacada.replace("REMPLAZAR", tipoD ) + '</span> ' + runa.descripcion_restante + '<br /> ' +
                        'Puedes retirar la runa en cualquier momento y usarla en otra ' + descripcion_usa_conD + '.');
                } else {
                    $('#runasModal .modal-body .mejorar').text('Se usa para mejorar ' + runa.mejorar);

                    $('#runasModal .modal-body .descripcion').html('Usa la runa con un ' + runa.descripcion_usa_con +
                        ' para <span>' + runa.descripcion_destacada + '</span> ' + runa.descripcion_restante + '<br /> ' +
                        'Puedes retirar la runa en cualquier momento y usarla en otra ' + runa.descripcion_usa_con + '.');
                }
                $('#runasModal .modal-body .mejorar').show();
                $('#runasModal .modal-body .descripcion').show();

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