// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

function descobreValor() {
  let indice = 12;
  let soma = 0;
  let k = 1;

  for (k; k < indice; k++) {
    soma = soma + k;
  }

  console.log(soma);
}

descobreValor(); // Ao final do processamento, o valor da variavél SOMA será 66
