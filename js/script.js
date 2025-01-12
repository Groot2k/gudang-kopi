//toggle class active
const navbarNav = document.querySelector('.navbar-nav');

//ketika menu hamberger di click
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

//klik diluar sidebar untuk menghilangkan nav

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

document.getElementById("sendButton").addEventListener("click", function () {
  // Ambil nilai dari form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validasi sederhana
  if (!name || !email || !message) {
    alert("Semua field wajib diisi!");
    return;
  }

  // Buat URL untuk API WhatsApp
  const phoneNumber = "6281218422303"; // nomor WA Anda
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Halo%20Mimin%0ASaya%20*${encodeURIComponent(
    name
  )}*%0AEmail%20Saya%20*${encodeURIComponent(
    email
  )}*%0A%0A*${encodeURIComponent(message)}*`;

  // Redirect ke WhatsApp
  window.open(whatsappUrl, "_blank");
});


// Ambil elemen tombol dan modal
const buyNowButton = document.getElementById("buyNowButton");
const modalWindow = document.getElementById("modalWindow");
const closeButton = document.querySelector(".close-button");
const closeModalBtn = document.querySelector(".btn-close-modal");

// Fungsi untuk membuka modal
buyNowButton.addEventListener("click", function () {
  modalWindow.style.display = "block";
});

// Fungsi untuk menutup modal (via close button)
closeButton.addEventListener("click", function () {
  modalWindow.style.display = "none";
});

// Fungsi untuk menutup modal (via tombol tutup)
closeModalBtn.addEventListener("click", function () {
  modalWindow.style.display = "none";
});

// Fungsi untuk menutup modal jika pengguna mengklik area di luar modal
window.addEventListener("click", function (event) {
  if (event.target === modalWindow) {
    modalWindow.style.display = "none";
  }
});


// new
let cart = [];

// Fungsi untuk menambahkan item ke keranjang
function addToCart(productName, price) {
  const item = cart.find((item) => item.name === productName);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ name: productName, price, quantity: 1 });
  }
  updateCart();
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCart() {
  const cartList = document.getElementById("cart-list");
  const totalPrice = document.getElementById("total-price");

  cartList.innerHTML = ""; // Kosongkan daftar keranjang
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} x${item.quantity} = IDR ${(item.price * item.quantity).toLocaleString()}`;
    cartList.appendChild(listItem);
  });

  totalPrice.textContent = total.toLocaleString(); // Tampilkan total harga
}

// Fungsi untuk checkout
function checkout() {
  if (cart.length === 0) {
    alert("Keranjang kosong. Silakan tambahkan item terlebih dahulu.");
    return;
  }

  alert("Pembelian berhasil! Terima kasih telah berbelanja.");
  cart = []; // Kosongkan keranjang setelah checkout
  updateCart();
}