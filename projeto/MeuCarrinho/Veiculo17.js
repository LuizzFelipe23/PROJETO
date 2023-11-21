document.addEventListener("DOMContentLoaded", function () {
  // Configurando as estatísticas e o preço para o veículo atual
  const currentVehicle = {
    stats: {
      speed: 100,
      acceleration: 98,
      brake: 94,
      traction: 98,
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

function mostrarModalCompra() {
  var modal = document.getElementById('modalCompra');
  modal.style.display = 'block';
}

function fecharModalCompra() {
  var modal = document.getElementById('modalCompra');
  modal.style.display = 'none';
}

document.getElementById('botaoPedido').addEventListener('click', function () {
  mostrarModalCompra();
});


function mostrarModalCompra() {
  var modal = document.getElementById('modalCompra');
  modal.style.display = 'block';
}

function fecharModalCompra() {
  var modal = document.getElementById('modalCompra');
  modal.style.display = 'none';
}

function voltarParaPaginaInicial() {
  // Redirecionar para a página inicial ou tomar a ação desejada
  window.location.href = "/projeto/index.html";
}

document.getElementById('botaoPedido').addEventListener('click', function () {
  mostrarModalCompra();
  // Mostrar botão de voltar após a compra
  document.getElementById('botaoVoltar').style.display = 'block';
});