document.querySelectorAll('.valor-carro').forEach(function (botao) {
    botao.addEventListener('click', function () {
        // Encontra o elemento pai (.caixa-carro) do botão clicado
        var caixaCarro = this.closest('.caixa-carro');

        // Encontra o elemento filho <p> dentro da .caixa-carro
        var descricaoCarro = caixaCarro.querySelector('p');

        // Alternar a visibilidade da descrição
        if (descricaoCarro.style.display === 'none' || descricaoCarro.style.display === '') {
            descricaoCarro.style.display = 'block';
        } else {
            descricaoCarro.style.display = 'none';
        }
    });
});

/* função do login*/
function entrar() {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simulação de autenticação (substitua com lógica de autenticação real)
    if (email === "usuario" && password === "usuario") {

        window.location.replace("index.html");
        // Adicione aqui a lógica para redirecionar para a tela inicial

    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}

