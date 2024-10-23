// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const readline = require('readline');

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verificaFibonacci(num) {
  let soma = 0;
  let anterior = 0;
  let proximo = 1;

  while (soma < num) {
    soma = anterior + proximo;
    anterior = proximo;
    proximo = soma;
  }

  if (soma == num) {
    return `Número ${num} pertence a sequência Fibonacci`;
  }
  return `Número ${num} não pertence a sequência Fibonacci`;
}

leitor.question(
  'Informe um número para verificar se pertence a sequência Fibonacci: ',
  (resposta) => {
    console.log(verificaFibonacci(resposta));
    leitor.close();
  }
);
