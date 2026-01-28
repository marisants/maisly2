        // Aplica o tema
        const temaSalvo = localStorage.getItem('tema');
        if (temaSalvo) {
            document.body.setAttribute('theme', temaSalvo);
        }
    
        function aplicarTema(tema) {
            document.body.setAttribute('theme', tema);
            localStorage.setItem('tema', tema);
        }

        document.getElementById('dark').addEventListener('click', () => aplicarTema('dark'));
        document.getElementById('light').addEventListener('click', () => aplicarTema('light'));
        document.getElementById('baixa').addEventListener('click', () => aplicarTema('baixa'));

        //Função para abrir carrinho (cheio ou vazio)
        function abrirCarrinho() {
            let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
            if (carrinho.length > 0) {
                window.location.href = '../Tela_carrinho/carrinho.html';
            } else {
                window.location.href = '../Tela_carrinhovazio/carrinhovazio.html';
            }
        }

        // Função para abrir curtidos (cheio e vazio)
        function abrirCurtido() {
            let curtido = JSON.parse(localStorage.getItem('curtido')) || [];
            if (curtido.length > 0) {
                window.location.href = '../Tela_curtido/curtidos2.html';
            } else {
                window.location.href = '../Tela_curtidovazio/curtidovazio.html';
            }
        }



let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


function verificarUsuario(email) {
  return usuarios.find(u => u.email === email);
}



function cadastrar(e) {
  e.preventDefault();

  const cadastro = document.getElementById("form2");
  const inputs = cadastro.querySelectorAll("input");

  const usuario = {
    nome: inputs[0].value.trim(),
    sobrenome: inputs[1].value.trim(),
    email: inputs[2].value.trim(),
    senha: inputs[3].value.trim()
  };

  if (verificarUsuario(usuario.email)) {
    alert("Email já cadastrado");
    return;
  }

  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));



  //alert("Usuário cadastrado com sucesso");
  window.location.href = '../Tela_inicio/inicio.html';

  cadastro.reset();
}


function login(e) {
  e.preventDefault();

  const dados = document.getElementById("form1");
  const inputs = dados.querySelectorAll("input");

  const email = inputs[0].value.trim();
  const senha = inputs[1].value.trim();

  const usuario = verificarUsuario(email);

  if (usuario && usuario.senha === senha) {
    //alert("Entrando na conta");
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario))
    window.location.href = '../Tela_inicio/inicio.html';
  } else {
    alert("Usuário ou senha incorretos");
  }
}


document.getElementById("form2").addEventListener("submit", cadastrar);
document.getElementById("form1").addEventListener("submit", login);

const checksenha = document.getElementById("mostrarSenha");
const inputSenha = document.getElementsByClassName("caixa2")[3];

checksenha.addEventListener("change", () => {
  if (checksenha.checked) {
    inputSenha.type = "text";
  } else {
    inputSenha.type = "password";
  }
});

const checksenhalogin = document.getElementById("mostrarsenhalogin")
const inputSenhalogin = document.getElementsByClassName("caixa1")[1];

checksenhalogin.addEventListener("change", () => {
  if (checksenhalogin.checked) {
    inputSenhalogin.type = "text";
  } else {
    inputSenhalogin.type = "password";
  }
});





        