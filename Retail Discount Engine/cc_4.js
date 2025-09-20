const products = [
    { name: "Laptop", category: "electronics", price: 1200, inventory: 5 },
    { name: "T-Shirt", category: "apparel", price: 25, inventory: 50 },
    { name: "Milk", category: "groceries", price: 4, inventory: 100 },
    { name: "Screwdriver Set", category: "household", price: 30, inventory: 20 },
    { name: "Headphones", category: "electronics", price: 150, inventory: 15 }
];
for (const product of products) {
    let discount = 0;
    switch (product.category) {
        case "electronics":
            discount = 0.20; // 20% off
            break;
        case "apparel":
            discount = 0.15; // 15% off
            break;
        case "groceries":
        case "household":
            discount = 0.10; // 10% off
            break;
        default:
            discount = 0; // No discount
    }
    product.price -= product.price * discount;
}
console.log("Products after category discounts:", products);
const customerType = "senior"; // Changed from "student" to demonstrate senior discount
let extraDiscount = 0;

if (customerType === "student") {
    extraDiscount = 0.05; // 5% off
} else if (customerType === "senior") {
    extraDiscount = 0.07; // 7% off
} else {
    extraDiscount = 0; // 0% off for everyone else
}
for (let i = 1; i <= 3; i++) {
    let subtotal = 0;
    let allProductsAvailable = true;
    for (const product of products) {
        if (product.inventory <= 0) {
            allProductsAvailable = false;
            break;
        }
    }

    if (allProductsAvailable) {
        for (const product of products) {
            subtotal += product.price;
            product.inventory--;
        }

        let totalCost = subtotal;
        totalCost -= totalCost * extraDiscount;

        console.log(`\nCustomer ${i} checked out:`);
        console.log(`- Subtotal (before extra discount): $${subtotal.toFixed(2)}`);
        console.log(`- Total cost (after all discounts): $${totalCost.toFixed(2)}`);
    } else {
        console.log(`\nCustomer ${i} was unable to purchase the full cart due to insufficient inventory.`);
        break;
    }
}
console.log("\nFinal inventory after all checkouts:", products.map(p => ({ name: p.name, inventory: p.inventory })));
const singleProduct = products[0];
console.log("\nLogging key/value pairs for a single product (Laptop):");
for (const key in singleProduct) {
    console.log(`${key}: ${singleProduct[key]}`);
}
console.log("\nLogging all product info using Object.entries() and destructuring:");
for (const [key, value] of Object.entries(products)) {
    console.log(`Product at index ${key}:`, value);
}