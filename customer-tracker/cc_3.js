const customers = [
  {
    name: "Alice Johnson",
    email: "alice.j@gmail.com",
    purchases: ["Laptop", "Mouse"]
  },
  {
    name: "Bob Smith",
    email: "bob.s@gmail.com",
    purchases: ["Keyboard", "Monitor", "Webcam"]
  },
  {
    name: "Charlie Brown",
    email: "charlie.b@gmail.com",
    purchases: ["Headphones"]
  }
];

customers.push({
  name: "Diana Prince",
  email: "diana.p@gmail.com",
  purchases: ["Tablet", "Stylus"]
});

const removedCustomer = customers.shift();
console.log("Removed customer:", removedCustomer.name);

const bob = customers.find(customer => customer.name === "Bob Smith");
if (bob) {
  bob.email = "robert.s@gmail.com";
  console.log("Updated Bob's email to:", bob.email);
}

const charlie = customers.find(customer => customer.name === "Charlie Brown");
if (charlie) {
  charlie.purchases.push("Microphone");
  console.log("Added new purchase for Charlie:", charlie.purchases);
}

console.log("\nCurrent Customer List:");

customers.forEach(customer => {
  console.log(`
    Name: ${customer.name}
    Email: ${customer.email}
    Total Purchases: ${customer.purchases.length}
  `);
});
