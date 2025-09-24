// Esports Arena catalog (price per unit)
const products = [
  { id: 201, name: "Pro Mouse (wired)",   category: "gear",    price: 39.99 },
  { id: 202, name: "Team Jersey",         category: "apparel", price: 49.5  },
  { id: 203, name: "Energy Drink 6-pack", category: "snacks",  price: 12.0  },
  { id: 204, name: "Arena Day Pass",      category: "access",  price: 15.0  },
  { id: 205, name: "Switchable Key",  category: "gear",    price: 19.0  }
];

const cart = [
  { productId: 202, qty: 1 },
  { productId: 203, qty: 2 },
  { productId: 204, qty: 1 },
  { productId: 205, qty: 1 }
];

const customerType = "member";

function getCategoryDiscount(category) {
  switch (category) {
    case "gear":
      return 0.10;
    case "apparel":
      return 0.15;
    case "snacks":
      return 0.08;
    case "access":
      return 0.05;
    default:
      return 0;
  }
}

function priceAfterCategoryDiscount(product) {
  const rate = getCategoryDiscount(product.category);
  return product.price * (1 - rate);
}

function findProductById(id) {
  return products.find(product => product.id === id) || null;
}

function lineItemTotal(cartItem) {
  const product = findProductById(cartItem.productId);
  if (!product || cartItem.qty <= 0) {
    return 0;
  }
  const discountedPrice = priceAfterCategoryDiscount(product);
  return cartItem.qty * discountedPrice;
}

function orderSubtotal(cart) {
  return cart.reduce((total, item) => total + lineItemTotal(item), 0);
}

function customerAdjustmentRate(customerType) {
  switch (customerType) {
    case "student":
      return 0.03;
    case "member":
      return 0.05;
    case "vip":
      return 0.10;
    default:
      return 0;
  }
}

function orderTotal(cart, customerType) {
  const sub = orderSubtotal(cart);
  const adj = customerAdjustmentRate(customerType);
  return sub * (1 - adj);
}

function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

function printReceipt(cart, customerType) {
  console.log("--- Esports Arena Receipt ---");

  cart.forEach(item => {
    const product = findProductById(item.productId);
    if (product) {
      const discountedPrice = priceAfterCategoryDiscount(product);
      const lineTotal = lineItemTotal(item);
      console.log(`${product.name} (x${item.qty})`);
      console.log(`  Unit Price: ${formatCurrency(discountedPrice)}`);
      console.log(`  Line Total: ${formatCurrency(lineTotal)}`);
      console.log("");
    }
  });

  const subtotal = orderSubtotal(cart);
  const adjustmentRate = customerAdjustmentRate(customerType);
  const total = orderTotal(cart, customerType);

  console.log("----------------------------");
  console.log(`Subtotal: ${formatCurrency(subtotal)}`);
  console.log(`Customer Adjustment (${(adjustmentRate * 100).toFixed(0)}%): ${formatCurrency(subtotal * adjustmentRate)}`);
  console.log(`Final Total: ${formatCurrency(total)}`);
  console.log("----------------------------");
}

printReceipt(cart, customerType);