/*• Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;

• Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;

• Crie uma branch exercicio_es6 no repositório do curso, armazene o código nesta branch e nos envie o link através da plataforma. */


const alunos = [
    { nome: 'Anderson', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Thiago', nota: 6 },
    { nome: 'Felipe', nota: 4 },
  ];
  
  function filtrarAlunosAprovados(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
  }
  
  function gerarMensagensAprovacao(listaAlunos) {
    return listaAlunos.map(aluno => `O aluno ${aluno.nome} tirou nota ${aluno.nota} e está aprovado.`);
  }
  
  const alunosAprovados = filtrarAlunosAprovados(alunos);
 
  const mensagensAprovacao = gerarMensagensAprovacao(alunosAprovados);
  
  mensagensAprovacao.forEach(mensagem => console.log(mensagem));
