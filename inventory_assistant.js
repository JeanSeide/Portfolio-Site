// Coding Challenge 02
const itemName = "Watch";
const unitCost = 24.99;
let currentStock = 400;
const reorderLevel = 5;
const targetStock = 300;
let weeklyDemand = 80;
const supplierLeadTimeWeeks = 1;
const weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
const stockDeficit = Math.max(0, targetStock - currentStock);
const reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;
const reorderQuantity = reorderNow ? Math.ceil(stockDeficit) : 0;
const estimatedReorderCost = reorderQuantity * unitCost;
console.log(`${itemName}`);
console.log(`Weeks of Cover: ${weeksOfCover.toFixed(2)}`);
console.log(`Reorder Now?: ${reorderNow}`);
console.log(`Recommended Reorder Quantity: ${reorderQuantity}`);
console.log(`Estimated Reorder Cost: $${estimatedReorderCost.toFixed(2)}`);