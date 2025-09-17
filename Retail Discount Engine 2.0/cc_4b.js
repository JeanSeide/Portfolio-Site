
const TAX_RATE = 0.085;

const products = [
    { sku: "0034001", name: "Laptop", category: "electronics", price: 1200, inventory: 5 },
    { sku: "0567001", name: "T-Shirt", category: "apparel", price: 25, inventory: 10 },
    { sku: "0987001", name: "Organic Apples", category: "groceries", price: 3, inventory: 20 },
    { sku: "0986001", name: "Dish Soap", category: "household", price: 5, inventory: 8 },
    { sku: "0056002", name: "Wireless Mouse", category: "electronics", price: 50, inventory: 3 }
];
for ( let product of products){
    let discount = 0;
    switch (product.category) {
        case "electronics":
            discount = 0.20;
            break;
        case "apparel":
            discount = 0.15;
            break;
        case "groceries":
        case "household":
            discount = 0.10;
            break;
        default:
            discount = 0;
    }
let promoPrice = product.price - (product.price*discount);
    product.promoPrice = product.price;
}
    let finalTotal = subtotal;
    if (customer.type === "student") {
        finalTotal *= 0.95;
    } else if (customer.type === "senior") {
        finalTotal *= 0.93;
    }