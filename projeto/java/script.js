document.addEventListener("DOMContentLoaded", function () {
    var colorPalette = document.querySelector(".color-palette");
    var colors = colorPalette.getElementsByClassName("color");

    for (var i = 0; i < colors.length; i++) {
        colors[i].addEventListener("click", function () {
            // Limpa a seleção de todas as cores
            for (var j = 0; j < colors.length; j++) {
                colors[j].classList.remove("selected");
            }

            // Adiciona a classe "selected" à cor clicada
            this.classList.add("selected");
        });
    }
});