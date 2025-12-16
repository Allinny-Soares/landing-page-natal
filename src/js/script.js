// ==============================
// CONTAGEM REGRESSIVA PARA O NATAL
// ==============================

// Seleciona os elementos
const timerElement = document.getElementById("timer");
const messageElement = document.getElementById("message");

// Define a data do Natal (25 de dezembro)
const christmasDate = new Date(new Date().getFullYear(), 11, 25, 0, 0, 0);

// Atualiza o contador
function updateCountdown() {
  const now = new Date();
  const difference = christmasDate - now;

  // Se já chegou o Natal
  if (difference <= 0) {
    timerElement.textContent = "🎄 Feliz Natal! 🎄";
    messageElement.textContent =
      "Que este Natal seja repleto de amor, paz e momentos especiais.";
    return;
  }

  // Cálculos de tempo
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  // Atualiza o HTML
  timerElement.innerHTML = `
    ${days} dias<br>
    ${hours}h ${minutes}m ${seconds}s
  `;
}

// Atualiza imediatamente
updateCountdown();

// Atualiza a cada segundo
setInterval(updateCountdown, 1000);
