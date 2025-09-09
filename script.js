// Seleciona o input e todos os cards
  const searchInput = document.getElementById('search-users');
  const userCards = document.querySelectorAll('.user-card');

  
  // Adiciona um evento quando o usuário digita
  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase(); // transforma em minúsculas
    userCards.forEach(card => {
      const userName = card.querySelector('.user-name').textContent.toLowerCase();
      // Se o nome contém o termo pesquisado, mostra; se não, esconde
      if (userName.includes(searchTerm)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });