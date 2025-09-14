// Coding Challenge 01
let productName = "Iphone 25";
let costPerUnit = 499.99;
let basePrice = 899.99;
let discountRate = 0.19;
let salesTaxRate = 0.09;
let fixedMonthlyCosts = 11500.00;
let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;
console.log(`Product Name: ${productName}`);
console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
console.log(`Final Price with Tax: $${finalPriceWithTax.toFixed(2)}`);
console.log(`Profit per Unit: $${profitPerUnit.toFixed(2)}`);
console.log(`Break-Even Units: ${breakEvenUnits}`);
console.log(`Is Profitable per Unit? ${isProfitablePerUnit}`);