// Função sem parâmetros e sem valor de retorno
function saudacao() {
  console.log("Olá, mundo!");
}
saudacao();


//Função com parâmetros e valor de retorno
function somar(a, b) {
  return a + b;
}
const resultado = somar(3, 5);
console.log(resultado); // Saída: 8


//Função anônima
const multiplicar = function (a, b) {
  return a * b;
};
const produto = multiplicar(4, 6);
console.log(produto); // Saída: 24


//Arrow Function (Função de seta)
const dividir = (a, b) => a / b;
const quociente = dividir(10, 2);
console.log(quociente); // Saída: 5


//Função como parâmetro de outra função (Callback)
function executarOperacao(a, b, operacao) {
  return operacao(a, b);
}
const resultadoSoma = executarOperacao(7, 3, (x, y) => x + y);
console.log(resultadoSoma); // Saída: 10
const resultadoSubtracao = executarOperacao(7, 3, (x, y) => x - y);
console.log(resultadoSubtracao); // Saída: 4


// Função recursiva (para calcular o fatorial)
function fatorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}
const resultadoFatorial = fatorial(5);
console.log(resultadoFatorial); // Saída: 120
