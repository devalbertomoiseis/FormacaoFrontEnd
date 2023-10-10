document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const idade = document.getElementById("idade").value;

  // Exibindo os dados do usuário
  document.getElementById("nomeUsuario").textContent = nome;
  document.getElementById("emailUsuario").textContent = email;
  document.getElementById("idadeUsuario").textContent = idade;

  // Mostrando a seção de dados do usuário
  document.getElementById("dadosDoUsuario").style.display = "block";
});