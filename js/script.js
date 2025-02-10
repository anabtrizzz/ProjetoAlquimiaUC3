document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  const carrossel = document.querySelector('.carrossel');
  const imagens = document.querySelectorAll('.carrossel img');
  const total = imagens.length;
  const larguraSlide = 100 / total;
  let intervalo;

  function mudarSlide(direcao) {
    index += direcao;

    if (index < 0) index = total - 1;
    if (index >= total) index = 0;

    carrossel.style.transform = `translateX(${-index * larguraSlide}%)`;

    clearInterval(intervalo);
    iniciarTrocaAutomatica();
  }

  function iniciarTrocaAutomatica() {
    intervalo = setInterval(() => mudarSlide(1), 3000);
  }

  document.querySelector(".prev").addEventListener("click", () => mudarSlide(-1));
  document.querySelector(".next").addEventListener("click", () => mudarSlide(1));

  iniciarTrocaAutomatica();
});

function scrollCarrossel(botao, direcao) {
  const carrossel = botao.closest('.carrossel-filmes').querySelector('.carrossel-imagens');
  const imagens = carrossel.querySelectorAll('img');
  const larguraImagem = imagens[0].offsetWidth + 10; 
  let scrollIndex = parseInt(carrossel.getAttribute('data-scroll') || '0'); 

  if (direcao === 'direita') {
    scrollIndex++;
    if (scrollIndex >= imagens.length) scrollIndex = 0;
  } else if (direcao === 'esquerda') {
    scrollIndex--;
    if (scrollIndex < 0) scrollIndex = imagens.length - 1; 
  }

  carrossel.setAttribute('data-scroll', scrollIndex);
  carrossel.style.transition = 'transform 0.5s ease'; 
  carrossel.style.transform = `translateX(-${larguraImagem * scrollIndex}px)`; 
}
