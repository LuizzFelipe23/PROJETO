document.addEventListener("DOMContentLoaded", function () {
    // Configurando as estatísticas e o preço para o veículo atual
    const currentVehicle = {
      stats: {
        speed: 90,
        acceleration: 87,
        brake: 92,
        traction: 80,
      },
      price: 100000,
    };
  
    // Chamando a função para atualizar as estatísticas na inicialização
    updateStats(currentVehicle.stats);
  
    // Adicionando um ouvinte de evento para o botão de encomenda
    const orderButton = document.getElementById("botaoPedido");
    orderButton.addEventListener("click", function () {
      handleOrder(currentVehicle.price);
    });
  });
  
  // Função para atualizar as estatísticas na interface
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