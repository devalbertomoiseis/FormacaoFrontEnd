const valorTotal = parseInt(prompt("Digite o Valor Total: "));
const qtdPessoasValor = parseInt(
  prompt("Quantas pessoas irão dividir a conta ?: ")
);
const qtdPessoas = prompt("Pessoas para Dividir a conta ?(S/N): ");
let qtdPessoasDiv;

if (qtdPessoas === "S" || qtdPessoas === "s") {
  qtdPessoasDiv = parseInt(valorTotal / qtdPessoasValor);
  alert("O valor por pessoa ficará em: " + qtdPessoasDiv);
} else {
  alert("O valor total a se pagar será: " + valorTotal);
}
