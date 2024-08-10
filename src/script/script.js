document.body.addEventListener("click", function () {
  var audio = document.getElementById("background-audio");
  if (audio.paused) {
    audio.play();
  }
});

const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes"); 
const botoes = document.querySelectorAll(".botao");

let imagemAtual = 0;

function atualizarCarrossel(index) {

  imagens.forEach((img) => img.classList.remove("ativa"));
  informacoes.forEach((info) => info.classList.remove("ativa"));
  botoes.forEach((botao) => botao.classList.remove("selecionado"));

  imagens[index].classList.add("ativa");
  informacoes[index].classList.add("ativa");
  botoes[index].classList.add("selecionado");
}

function proximaImagem() {
  imagemAtual = (imagemAtual + 1) % imagens.length;
  atualizarCarrossel(imagemAtual);
}
botoes.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    atualizarCarrossel(index);
    imagemAtual = index; ual
  });
});

setInterval(proximaImagem, 5000); 