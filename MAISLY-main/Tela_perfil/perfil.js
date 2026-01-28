const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

if (usuario) {
  document.getElementById("perfil-nome").textContent = usuario.nome;
  document.getElementById("perfil-sobrenome").textContent = usuario.sobrenome;
  document.getElementById("perfil-email").textContent = usuario.email;
  document.getElementById("perfil-senha").textContent = "********";
} else {
  alert("Você precisa estar logado");
  window.location.href = "../Tela_cadastrar/cadastrar.html";
}

function sair() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "../Tela_cadastrar/cadastrar.html";
}
document.getElementsByClassName("botao")[0].addEventListener("click", sair);

