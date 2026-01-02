const cartItemsDiv = document.getElementById("cartItems");
const cartTotalDiv = document.getElementById("cartTotal");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

cartItemsDiv.innerHTML = "";

// If cart is empty
if (cart.length === 0) {
  cartItemsDiv.innerHTML = "<p>Your cart is empty 🛒</p>";
} else {
  cart.forEach(item => {
    total += item.price * item.qty;

    cartItemsDiv.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>₹${item.price}</span>
      </div>
    `;
  });
}


///chechking purpose/////

cartTotalDiv.textContent = "Total: ₹" + total;

function goToBilling() {
  window.location.href = "billing.html";
}


function addToCart(name, price) {
  console.log("Adding:", name, price); // 👈 ADD THIS

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart");
}

