document.addEventListener('DOMContentLoaded', function(){
    const botoes = document.querySelectorAll('.product-button');
    
    botoes.forEach(botao => {
      botao.addEventListener('click', () => {
        alert('Você clicou em ver detalhes');
      });
    });


})
