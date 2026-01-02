const profileIcon = document.getElementById("profileIcon");
const profileDropdown = document.getElementById("profileDropdown");

profileIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  profileDropdown.classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", () => {
  profileDropdown.classList.remove("show");
});





////////////////dropdown//////////////////
function toggleDropdown(event, id) {
    // 1. Stop the click from reaching the 'document' listener below
    event.stopPropagation();

    // 2. Close all other dropdowns so only one is open at a time
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
        if (menu.id !== id) {
            menu.classList.remove("show");
        }
    });

    // 3. Toggle the one you actually clicked
    const current = document.getElementById(id);
    current.classList.toggle("show");
}

// 4. This listener only runs if you click AWAY from a dropdown button
document.addEventListener("click", (event) => {
    // Check if the click was inside a dropdown; if not, close all menus
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll(".dropdown-menu").forEach(menu => {
            menu.classList.remove("show");
        });
    }
});
 
/* =============================
  SEARCH BUTTON
============================= */
const searchIcon = document.getElementById("searchIcon");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");

/* Open Search */
searchIcon.addEventListener("click", () => {
  searchOverlay.classList.add("active");
  searchInput.focus();
});

/* Close Search */
closeSearch.addEventListener("click", () => {
  searchOverlay.classList.remove("active");
});

/* SEARCH LOGIC */
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});

function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();

  if (query.includes("philodendron")) {
    window.location.href = "philodendron.html";
  } 
  else if (query.includes("money")) {
    window.location.href = "money plant.html";
  } 
  else if (query.includes("indoorplants")) {
    window.location.href = "indoorplants.html";
  } 
  else {
    alert("No matching plant found ❌");
  }
}

/***********************
 * HAMBURGER MENU
 ***********************/
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

/* Close menu when clicking a nav link */
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

/* Close menu when clicking outside */
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  }
});


/***********************
 * ADD TO CART (BASIC)
 ***********************/
let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });

  alert(`${productName} added to cart 🪴`);

  console.log("Cart Items:", cart);
}


/***********************
 * PAGE LOAD CHECK
 ***********************/
document.addEventListener("DOMContentLoaded", () => {
  console.log("PlantLand JS Loaded Successfully 🌿");
});


/* =============================
  ADD TO CART
============================= */
// ================= ICON CLICKS =================

// WISHLIST
let wishlistCount = 0;

const wishlistIcon = document.getElementById("wishlistIcon");
const cartIcon = document.getElementById("cartIcon");

const wishlistCountEl = document.getElementById("wishlistCount");
const cartCountEl = document.getElementById("cartCount");

/* ❤️ WISHLIST */
wishlistIcon.addEventListener("click", () => {
  wishlistCount++;
  wishlistCountEl.textContent = wishlistCount;

  const heart = wishlistIcon.querySelector("i");
  heart.classList.remove("fa-regular");
  heart.classList.add("fa-solid");

  wishlistIcon.classList.add("wishlist-active", "active");
  setTimeout(() => wishlistIcon.classList.remove("active"), 300);
});

/* 🛒 CART ICON → OPEN CART */
cartIcon.addEventListener("click", () => {
  window.location.href = "cart.html";
});


// ================= ADD TO CART LOGIC =================
// ⬇️ ADD THIS PART AT THE BOTTOM ⬇️

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price,
    qty: 1
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartCountEl.textContent = cart.length;
}

// Load cart count when page loads
updateCartCount();



/* =============================
   FOOTER SCROLL ANIMATION
============================= */

const footerCols = document.querySelectorAll(".footer-col");

const footerObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

footerCols.forEach(col => footerObserver.observe(col));


/* =============================
   FOOTER ACCORDION (MOBILE)
============================= */

const titles = document.querySelectorAll(".footer-title");

titles.forEach(title => {
  title.addEventListener("click", () => {
    if (window.innerWidth <= 600) {
      title.classList.toggle("active");

      const content = title.nextElementSibling;
      if (content) {
        content.style.display =
          content.style.display === "block" ? "none" : "block";
      }
    }
  });
});



// FAQ ACCORDION FUNCTION
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector("h3");

  question.addEventListener("click", () => {
    // close others
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // toggle current
    item.classList.toggle("active");
  });
});
