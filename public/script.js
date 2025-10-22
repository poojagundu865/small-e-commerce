const productList = document.getElementById('product-list');
const form = document.getElementById('product-form');
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');

const API_URL = '/products';

async function fetchProducts() {
  const res = await fetch(API_URL);
  const products = await res.json();
  productList.innerHTML = '';
  products.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.name} - ₹${p.price}`;
    productList.appendChild(li);
  });
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const product = {
    name: nameInput.value,
    price: Number(priceInput.value)
  };
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  });
  nameInput.value = '';
  priceInput.value = '';
  fetchProducts();
});

fetchProducts();
