document.addEventListener("DOMContentLoaded", function () {
  const stats = {
    speed: 70,
    acceleration: 80,
    brake: 90,
    traction: 75,
  };

  updateStats(stats);

  const orderButton = document.getElementById("orderButton");
  orderButton.addEventListener("click", handleOrder);
});

function updateStats(stats) {
  for (const statName in stats) {
    if (stats.hasOwnProperty(statName)) {
      const bar = document.getElementById(`${statName}Bar`);
      const label = document.getElementById(`${statName}Label`);

      const value = stats[statName];

      bar.style.width = `${value}%`;
      label.textContent = `${value}%`;
    }
  }
}

function handleOrder() {
  alert("Parabéns pela compra!");
}