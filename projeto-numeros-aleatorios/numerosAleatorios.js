function gerarNumerosAleatorios(quantidade, min, max) {
  const numeros = [];
  for (let i = 0; i < quantidade; i++) {
    const numero = Math.floor(Math.random() * (max - min + 1) + min);
    numeros.push(numero);
  }
  return numeros;
}

function contarFrequencias(numeros) {
  const frequencias = {};
  numeros.forEach((numero) => {
    if (frequencias[numero]) {
      frequencias[numero]++;
    } else {
      frequencias[numero] = 1;
    }
  });
  return frequencias;
}
const quantidade = 10000;
const numerosAleatorios = gerarNumerosAleatorios(quantidade, 1, 20);
const frequencias = contarFrequencias(numerosAleatorios);

console.log(`Frequencia dos números gerados:`);
console.log(frequencias);
