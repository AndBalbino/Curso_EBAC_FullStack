$(document).ready(function(){


    $('#cep').mask('00000-000');

    $('#telefone').mask('(00) 00000-0000');

    $('#cpf').mask('000.000.000-00');
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, insira o seu nome completo',
            telefone: 'Campo obrigatório',
            email: 'Insira um email válido',
            endereco:'Campo obrigatório',
            cep:'Campo obrigatório',
            cpf:'Campo obrigatório'
        },

        submitHandler: function(form) {
            let camposPreenchidos = true;
            $('input[type="text"]').each(function() {
                if ($(this).val() === '') {
                    camposPreenchidos = false;
                    return false; 
                }
            });

            if (camposPreenchidos) {
                alert('Formulário preenchido com sucesso!');
                form.submit(); 
            } 
        },

            
    })
    

    })

