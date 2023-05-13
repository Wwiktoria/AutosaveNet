// Funkcja scrollToBottom przesuwa stronę o pełną wysokość
function scrollToBottom() {
    // Przewijamy stronę o jej pełną wysokość
    window.scrollTo({
      // top: document.documentElement.scrollHeight,
      top:0,
      behavior: "smooth" // opcjonalnie, dodajemy płynne przewijanie
    });
  }
  
  // Przypisujemy funkcję do przycisku
  const button = document.querySelector('.scroll-to-bottom');
  button.addEventListener('click', scrollToBottom);