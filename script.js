// script.js

const apps = [
    {
        id: "app1",
        name: "App 1",
        description: "Description of App 1",
        price: 9.99
    },
    {
        id: "app2",
        name: "App 2",
        description: "Description of App 2",
        price: 14.99
    }
];

let cartItems = [];

function addToCart(appId) {
    const app = getAppDetails(appId);
    cartItems.push(app);
    updateCartDisplay();
}

function checkout() {
    if (cartItems.length === 0) {
        alert("Your cart is empty. Please add items to proceed.");
    } else {
        // Perform the checkout process
        // Redirect to payment gateway or display payment options
        alert("Checkout process initiated. Please proceed to payment.");
        clearCart();
    }
}

function getAppDetails(appId) {
    return apps.find(app => app.id === appId);
}

function updateCartDisplay() {
    const cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";
    let totalPrice = 0;
    cartItems.forEach(app => {
        const listItem = document.createElement("li");
        listItem.textContent = `${app.name} - $${app.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
        totalPrice += app.price;
    });
    document.getElementById("total-price").textContent = `$${totalPrice.toFixed(2)}`;
}

function clearCart() {
    cartItems = [];
    updateCartDisplay();
}
