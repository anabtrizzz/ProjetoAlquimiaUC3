document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  const carrossel = document.querySelector('.carousel');
  const imagens = document.querySelectorAll('.carousel img');
  const total = imagens.length;
  const larguraSlide = 100 / total; // Calcula a largura com base no total de imagens
  let intervalo;

  function mudarSlide(direcao) {
    index += direcao;

    // Garantir que o índice esteja dentro dos limites
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;

    // Ajustar a transição dinamicamente
    carrossel.style.transform = `translateX(${-index * larguraSlide}%)`;

    // Reseta o intervalo para evitar sobreposições
    clearInterval(intervalo);
    iniciarTrocaAutomatica();
  }

  function iniciarTrocaAutomatica() {
    intervalo = setInterval(() => mudarSlide(1), 3000);
  }

  // Eventos de clique para os botões do carrossel
  document.querySelector(".prev").addEventListener("click", () => mudarSlide(-1));
  document.querySelector(".next").addEventListener("click", () => mudarSlide(1));

  // Iniciar troca automática
  iniciarTrocaAutomatica();
});


function scrollCarrossel(botao, direcao) {
  const carrossel = botao.closest('.carrossel-filmes').querySelector('.carrossel-imagens'); // Encontra o carrossel dentro do mesmo container
  const imagens = carrossel.querySelectorAll('img');
  const larguraImagem = imagens[0].offsetWidth + 10; // Largura da imagem + espaçamento
  let scrollIndex = parseInt(carrossel.getAttribute('data-scroll') || '0'); // Obtém o índice atual ou inicia em 0

  if (direcao === 'direita') {
    scrollIndex++;
    if (scrollIndex >= imagens.length) scrollIndex = 0; // Volta ao começo
  } else if (direcao === 'esquerda') {
    scrollIndex--;
    if (scrollIndex < 0) scrollIndex = imagens.length - 1; // Vai para o final
  }

  carrossel.setAttribute('data-scroll', scrollIndex); // Atualiza o índice no atributo
  carrossel.style.transition = 'transform 0.5s ease'; // Adiciona transição suave
  carrossel.style.transform = `translateX(-${larguraImagem * scrollIndex}px)`; // Aplica o movimento
}

