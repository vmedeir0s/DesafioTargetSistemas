//2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

const readline = require('readline');

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verificaString(palavra) {
  let cont = 0;

  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i].toLowerCase() == 'a') {
      cont += 1;
    }
  }

  if (cont > 0) {
    return `Existem ${cont} letra 'a' na palavra`;
  }
  return "Não existe a letra 'a' na palavra ";
}

leitor.question('Informe uma palavra: ', (resposta) => {
  console.log(verificaString(resposta));
  leitor.close();
});
