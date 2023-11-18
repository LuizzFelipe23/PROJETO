document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', handleAddToCart);
    });
  
    function handleAddToCart(event) {
      const carElement = event.target.closest('.car');
      const carName = carElement.dataset.name;
      const carPrice = parseFloat(carElement.dataset.price);
  
   S
      const cartItem = createCartItemElement(carName, carPrice);
      cartItems.appendChild(cartItem);
  
    
      total += carPrice;
      updateTotal();
    }
  
    function createCartItemElement(name, price) {
      const cartItem = document.createElement('li');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <span>${name}</span>
        <span>R$${price.toFixed(2)}</span>
      `;
      return cartItem;
    }
  
    function updateTotal() {
      totalElement.textContent = `Total: R$${total.toFixed(2)}`;
    }
  });