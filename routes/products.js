// routes/products.js
const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: 'Keyboard', price: 1500 },
  { id: 2, name: 'Headphones', price: 2500 },
  { id: 3, name: 'Power Bank', price: 2000},
  { id: 4, name: 'Smart TV', price: 62000},
  { id: 5, name: 'Electric Kettle', price: 1300 },
  { id: 6, name: 'AirPods', price: 20000 },
];

router.get('/', (req, res) => res.json(products));

router.post('/', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price)
    return res.status(400).json({ message: 'Name and price are required' });
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json({ message: 'Product added', product: newProduct });
});

module.exports = router;
