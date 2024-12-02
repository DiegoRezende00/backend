async function CalcularSoma(num1, num2) {
  return new Promise((resolve, rejected) => {
    if (num1 === 0 || num2 === 0) {
      rejected("Operação inválida");
    } else {
      const soma = num1 + num2;
      if (soma < 0) {
        rejected("A calculadora deve retornar apenas valores positivos");
      } else {
        resolve(soma);
      }
    }
  });
}
async function ExecutarCalculo() {
  try {
    const resultado = await CalcularSoma(2, 6);
    console.log(`O resultado da soma é: ${resultado}`);
  } catch {
    console.error(`Ocorrreu um erro no sistema: ${error}`);
  }
}
ExecutarCalculo();
