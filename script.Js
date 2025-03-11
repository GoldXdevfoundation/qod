let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    alert(`${product} ditambahkan ke keranjang!`);
    localStorage.setItem("cart", JSON.stringify(cart));
}
