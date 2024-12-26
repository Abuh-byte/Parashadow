// Seleciona os cartões
const cards = document.querySelectorAll('.card');

// Adiciona a classe 'show' ao cartão visível
const revealCards = () => {
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Se o cartão estiver visível, adiciona a classe 'show'
    if (cardTop < windowHeight - 100) {
      card.classList.add('show');
    }
  });
};

// Escuta o evento de rolagem
window.addEventListener('scroll', revealCards);

// Executa a função inicialmente
revealCards();