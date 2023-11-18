document.addEventListener('DOMContentLoaded', function () {
    const colorPalette = document.querySelector('.color-palette');
    const productTitle = document.getElementById('productTitle');

    colorPalette.addEventListener('click', function (event) {
        if (event.target.classList.contains('color')) {
            const selectedColor = event.target.style.backgroundColor;
            productTitle.style.color = selectedColor;
        }
    });
});