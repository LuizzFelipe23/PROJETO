document.addEventListener("DOMContentLoaded", function () {
  // Configurando as estatísticas e o preço para o veículo atual
  const currentVehicle = {
      stats: {
          speed: 78,
          acceleration: 79,
          brake: 84,
          traction: 80,
      },
      price: 100000,
  };

  // Chamando a função para atualizar as estatísticas na inicialização
  updateStats(currentVehicle.stats);

  // Adicionando um ouvinte de evento para o botão de encomenda
  const orderButton = document.getElementById("botaoPedido");
  orderButton.addEventListener("click", function () {
      // Chamando a função para tratar o pedido
      handleOrder(currentVehicle.price);

      // Oculta o botão e exibe a mensagem de parabéns pela compra
      orderButton.style.display = "none";
      const mensagemCompra = document.getElementById("mensagemCompra");
      mensagemCompra.style.display = "block";
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

// Função para tratar o pedido
function handleOrder(price) {
  // Adicione aqui a lógica para processar o pedido com o preço fornecido
  console.log(`Pedido recebido com sucesso! Preço: $${price}`);
}