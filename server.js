// server.js
const express = require('express');
const cors = require('cors');
const os = require('os');
const http = require('http');
const path = require('path');
const productRoutes = require('./routes/products');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);
  app(req, res);
});

app.use('/products', productRoutes);

console.log('System Information:');
console.log(`Platform: ${os.platform()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Hostname: ${os.hostname()}`);

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
