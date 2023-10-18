// Array de objetos contendo informações sobre personagens de "One Piece"
var personagens = [
  {
    nome: "Monkey D. Luffy",
    tipo: "Protagonista",
    descricao: "O capitão dos Chapéu de Palha.",
  },
  {
    nome: "Roronoa Zoro",
    tipo: "Espadachim",
    descricao: "Usuário da técnica Três Espadas.",
  },
  {
    nome: "Nami",
    tipo: "Navegadora",
    descricao: "Especialista em navegação e meteorologia.",
  },
];

// Obtendo o elemento HTML onde os personagens serão criados
var container = document.getElementById("personagens");

// Iterando sobre o array de objetos e criando elementos HTML
for (var i = 0; i < personagens.length; i++) {
  var personagem = personagens[i];

  // Criando um elemento de div
  var divElement = document.createElement("div");

  // Definindo o conteúdo da div com base nos valores do objeto
  divElement.innerHTML =
    "<div>" +
    "<h2>" +
    personagem.nome +
    "</h2>" +
    "<p><strong>Tipo:</strong> " +
    personagem.tipo +
    "</p>" +
    "<p><strong>Descrição:</strong> " +
    personagem.descricao +
    "</p>" +
    "</div>";

  // Adicionando a div ao contêiner
  container.appendChild(divElement);
}
