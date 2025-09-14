// ✅ Step 2: Model the Inventory
const inventory = [
    { sku: 'SKU-001', name: 'Eco Bottle', price: 19.99, stock: 42 },
    { sku: 'SKU-002', name: 'Wireless Headphones', price: 129.99, stock: 15 },
    { sku: 'SKU-003', name: 'Ergonomic Keyboard', price: 75.50, stock: 8 },
    { sku: 'SKU-004', name: 'Portable Charger', price: 29.99, stock: 50 }
];

console.log("--- Initial Inventory ---");
inventory.forEach(product => {
    console.log(`${product.sku} | ${product.name} | $${product.price.toFixed(2)} | Stock: ${product.stock}`);
});
console.log("\n");

// ✅ Step 3: Manage Inventory Changes
console.log("--- Managing Inventory ---");
// Add a new product
const newProduct = { sku: 'SKU-005', name: 'Smartwatch', price: 199.99, stock: 25 };
inventory.push(newProduct);
console.log("New product added:", newProduct.name);

// Remove the last product
const removedProduct = inventory.pop();
console.log(`Product removed: ${removedProduct.name}`);

// Update a product's price and another's stock
const headphoneProduct = inventory.find(p => p.sku === 'SKU-002');
if (headphoneProduct) {
    headphoneProduct.price = 119.99; // Simulate a sale
    console.log(`Updated price for ${headphoneProduct.name} to $${headphoneProduct.price.toFixed(2)}`);
}

const keyboardProduct = inventory.find(p => p.sku === 'SKU-003');
if (keyboardProduct) {
    keyboardProduct.stock += 10; // Simulate a restock
    console.log(`Updated stock for ${keyboardProduct.name} to ${keyboardProduct.stock}`);
}
console.log("\n");

// ✅ Step 4: Create and Process Orders
const orders = [
    {
        orderId: 'ORD-001',
        items: [
            { sku: 'SKU-001', qty: 2 },
            { sku: 'SKU-003', qty: 5 }
        ]
    },
    {
        orderId: 'ORD-002',
        items: [
            { sku: 'SKU-002', qty: 20 }, // This will fail due to insufficient stock
            { sku: 'SKU-004', qty: 1 }
        ]
    }
];

function processOrder(order) {
    let orderTotal = 0;
    for (const item of order.items) {
        const product = inventory.find(p => p.sku === item.sku);
        if (!product) {
            return `Error: Product with SKU ${item.sku} not found.`;
        }
        if (product.stock < item.qty) {
            return `Insufficient stock for ${product.name} (SKU: ${product.sku}). Requested: ${item.qty}, Available: ${product.stock}.`;
        }
    }

    // If all items have sufficient stock, process the order
    for (const item of order.items) {
        const product = inventory.find(p => p.sku === item.sku);
        product.stock -= item.qty;
        orderTotal += product.price * item.qty;
    }

    return `Order ${order.orderId} processed successfully. Total: $${orderTotal.toFixed(2)}`;
}

console.log("--- Processing Orders ---");
orders.forEach(order => {
    const result = processOrder(order);
    console.log(result);
});
console.log("\n");

// ✅ Step 5: Reporting & Insights
console.log("--- Reporting & Insights ---");

// Total inventory value
const totalInventoryValue = inventory.reduce((total, product) => total + (product.price * product.stock), 0);
console.log(`Total inventory value: $${totalInventoryValue.toFixed(2)}`);

// Low-stock items
const lowStockItems = inventory.filter(product => product.stock <= 5);
console.log("Low-stock items (stock <= 5):", lowStockItems.map(p => p.name).join(', '));

// Price list
const priceList = inventory.map(product => `${product.sku} - $${product.price.toFixed(2)}`);
console.log("Simple price list:", priceList);

// ⭐ Stretch Goals
console.log("\n--- Stretch Goals ---");

// Find a product by SKU
function findProductBySku(sku) {
    const foundProduct = inventory.find(product => product.sku === sku);
    return foundProduct || null;
}
const foundProduct = findProductBySku('SKU-001');
console.log("Found product 'SKU-001':", foundProduct ? foundProduct.name : "Not found");
const notFoundProduct = findProductBySku('SKU-999');
console.log("Found product 'SKU-999':", notFoundProduct ? notFoundProduct.name : "Not found");

// Sort inventory by stock ascending
const sortedInventory = [...inventory].sort((a, b) => a.stock - b.stock);
console.log("Inventory sorted by stock (ascending):");
sortedInventory.forEach(product => {
    console.log(`${product.name} | Stock: ${product.stock}`);
}); // <--- Ensure this is a closing parenthesis and curly brace here