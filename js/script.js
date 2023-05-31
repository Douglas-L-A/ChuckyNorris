const pergunta = document.querySelector(".grid-container p");
setTimeout(() => {
  pergunta.classList.add("animacao");
}, 3000);

const simNao = document.querySelector(".simNao");
setTimeout(() => {
  simNao.classList.add("block");
}, 6000);

const sim = document.querySelector(".sim");
const nao = document.querySelector(".nao");
const btnPiada = document.querySelector(".piada button");
const spanPiada = document.querySelector(".piada span");

function acionarPiada() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((r) => r.json())
    .then((piada) => {
      spanPiada.innerText = piada.value;
      btnPiada.classList.add("block");
    });
  pergunta.classList.remove("animacao");
  simNao.classList.remove("block");
}

function negarPiada(){
  spanPiada.innerText = 'Aconselho que clique em sim...';
}

sim.addEventListener("click", acionarPiada);
nao.addEventListener("click", negarPiada);
btnPiada.addEventListener("click", acionarPiada);
