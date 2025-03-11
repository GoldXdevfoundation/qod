document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");

    let total = 0;
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.product} - Rp ${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = `Rp ${total}`;

    document.getElementById("checkout-form").addEventListener("submit", (e) => {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let address = document.getElementById("address").value;
        let email = document.getElementById("email").value;

        // Kirim email konfirmasi (menggunakan EmailJS misalnya)
        alert(`Pesanan atas nama ${name} akan dikirim ke ${address}. Konfirmasi dikirim ke ${email}.`);
    });
});
