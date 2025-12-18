let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    renderCart();
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    const list = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");

    list.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} — ${item.price} ₽
            <button onclick="removeFromCart(${index})">✖</button>
        `;
        list.appendChild(li);
    });

    totalEl.textContent = total;
} 