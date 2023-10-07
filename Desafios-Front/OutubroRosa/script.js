// Função para mudar a cor de fundo para rosa
function tornarPaginaRosa() {
  document.body.style.backgroundColor = "#FF69B4";
  document.querySelector(".pink-text").style.color = "#fff"; // Muda a cor do texto
}

// Adicionar um ouvinte de evento ao botão
const pinkButton = document.getElementById("pinkButton");
pinkButton.addEventListener("click", tornarPaginaRosa);
