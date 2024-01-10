// Requisção XMLHttpRequest

// document.addEventListener("DOMContentLoaded", function (){
//     document.getElementById('btn-buscar-cep').addEventListener('click', function(){
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;

//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//         xhttp.open('GET', endpoint);
//         xhttp.send();

//         // https://viacep.com.br/ws/cep/json
//     })
// })

//Requisição ajax com jquery

$(document).ready(function () {
  $("#btn-buscar-cep").click(function () {
    const cep = $("#cep").val();
    const endpoint = `https://viacep.com.br/ws/${cep}/json`;
    const botao = $(this);

    $(botao).find("i").addClass("d-none");
    $(botao).find("i").removeClass("d-none");

    // $.ajax(endpoint).done(function(resposta){
    //     const logradouro = resposta.logradouro;
    //     const bairro = resposta.bairro;
    //     const cidade = resposta.localidade;
    //     const estado = resposta.uf;
    //     const enderecoCompleto = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;

    //     $("#endereco").val(enderecoCompleto);

    //     $(botao).find('i').removeClass('d-none');
    //     $(botao).find('span').addClass('d-none');
    // })

    fetch(endpoint)
      .then(function (resposta) {
        return resposta.json();
      })
      .then(function (json) {
        const logradouro = json.logradouro;
        const bairro = json.bairro;
        const cidade = json.localidade;
        const estado = json.uf;
        const enderecoCompleto = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
        $("#endereco").val(enderecoCompleto);
      })
      .catch(function () {
        alert("Ocorreu um erro! Tente novamente mais tarde.");
      })
      .finally(function () {
        setTimeout(() => {
          $(botao).find("i").removeClass("d-none");
          $(botao).find("span").addClass("d-none");
        }, 3000);
      });
  });

  $('#formulario-pedido').submit(function(e){
    e.preventDefault();
    if($("#nome").val().length == 0 ){
       throw new Error("Digite o nome");

    }
  })
});


